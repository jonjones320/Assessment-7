/** User related routes. */

const User = require('../models/user');
const express = require('express');
const router = new express.Router();
const ExpressError = require('../helpers/expressError');
const { authUser, requireLogin, requireAdmin } = require('../middleware/auth');
const { rawListeners } = require('../app');

/** GET /
 *
 * Get list of users. Only logged-in users should be able to use this.
 *
 * It should return only *basic* info:
 *    {users: [{username, first_name, last_name}, ...]}
 *
 */

router.get('/', authUser, requireLogin, async (req, res, next) => {
  try {
    let users = await User.getAll();

    // FIXES BUG #1 //
    let filteredUsers = users.map(({username, first_name, last_name}) => ({
      username, first_name, last_name
    }))

    return res.json({ users : filteredUsers });
  } catch (err) {
    return next(err);
  }
}); // end

/** GET /[username]
 *
 * Get details on a user. Only logged-in users should be able to use this.
 *
 * It should return:
 *     {user: {username, first_name, last_name, phone, email}}
 *
 * If user cannot be found, return a 404 err.
 *
 */

router.get('/:username', authUser, requireLogin, async (req, res, next) => {
    try {
      let user = await User.get(req.params.username);
      // FIXES BUG #2 //
      if (!user) {
        throw new ExpressError("User not found", 404);
      }
      return res.json({ user });
    } catch (err) {
      return next(err);
    }
  });

/** PATCH /[username]
 *
 * Update user. Only the user themselves or any admin user can use this.
 *
 * It should accept:
 *  {first_name, last_name, phone, email}
 *
 * It should return:
 *  {user: all-data-about-user}
 *
 * It user cannot be found, return a 404 err. If they try to change
 * other fields (including non-existent ones), an error should be raised.
 *
 */

// FIXED BUG #3 //
router.patch('/:username', authUser, requireLogin, async (req, res, next) => {
    try {
      if (!req.curr_admin && req.curr_username !== req.params.username) {
        throw new ExpressError('Only  that user or admin can edit a user.', 401);
      }
      // FIXED BUG #4 //
      // Ensure only allowed, existing fields are being changed
      const allowedFields = ['first_name', 'last_name', 'phone', 'email'];
      for (let field in req.body) {
        if (!allowedFields.includes(field)) {
          throw new ExpressError(`Cannot update field: ${field}`, 401);
        }
      }

        // get fields to change; remove token and admin fields so we don't try to change it
        let fields = { ...req.body };
        delete fields._tokens;
        delete fields.admin;

        let user = await User.update(req.params.username, fields);
        if (!user) {
          throw new ExpressError("User not found", 404);
        }
        return res.json({ user });
    } catch (err) {
      return next(err);
    }
  }); // end

/** DELETE /[username]
 *
 * Delete a user. Only an admin user should be able to use this.
 *
 * It should return:
 *   {message: "deleted"}
 *
 * If user cannot be found, return a 404 err.
 */

router.delete('/:username', authUser, requireAdmin, async ( req, res, next ) => {
  try {
    await User.delete(req.params.username); // FIXED BUG #5 //
    return res.json({ message: 'deleted' });
  } catch (err) {
    return next(err);
  }
}); // end

module.exports = router;
