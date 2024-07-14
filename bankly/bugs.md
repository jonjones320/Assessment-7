# Bugs Found in Banksly #

----------

### Bug 1:  `routes/users` - `GET /`
- The route to get a list of users was returning all of the details from every user (except for password). It is fixed by "mapping" through the results of all of the users and creating a new array which only includes basic information.
- The test for this now verifies that information like email and telephone number is not retrieved.


### Bug 2: `routes/users` - `GET /[username]`
- The route to get a specific user did not explicitly return a 404: Not Found error if that user was not found.
- This was fixed with a check for the user's existence and a new ExpressError if the user doesn't exist.
- A test was added to verify what happens when a user is not found.


### Bug 3: `routes/users` - `PATCH /[username]`
- The route should allow an admin and the user to update their own profile, however, the function was using the middleware `requireLogin` and `requireAdmin` which means the function would refuse the current user to edit their profile, if they were not also an admin.
- Testing added to make sure a user can edit their own profile without being an admin.


### Bug 4: `routes/users` - `PATCH /[username]`
- The route should disallow a user changing themselves to be an admin. The route now declares the four basic fields which can be edited and then gives an error if any attempt is made to change the forbidden or nonexistent fields.
- For extra certainty, the token and admin fields are also deleted before the update proceeds any further.
- The test "should disallowing patching not-allowed-fields" already caught this bug.


### Bug 5: `routes/users` - `DELETE /[username]`
- This route was missing an `await` before `User.delete()`. It potentially could have sent the "deleted" message before the user was actually deleted.



### Bug 6: `/middleware/auth.js` -Line 47- `authUser()` 
- The token is decoded instead of verified. Decoding it has no security value, so `jwt.decode(token)` is changed to `jwt.verify(token, SECRET_KEY)`. This uses JWT's method to authenticate the token against the server's `SECRET_KEY`. 
- This is now tested in the "Get /users" test. The route, which requests all users, authenticates the user making the request by using the middleware `authUser()` function. So the test creates a fake user with a real JWT that has a different key than our server's `SECRET_KEY`. This user requests all users and the test checks that a "401: Forbidden" response is sent. 
- The retrieval of a token is now from `req.headers.authorization`. This is more secure and also widely accepted across most platforms. 
- Using `req.body._token` is somewhat secure but the body of a request is more likely to be stored in a place that a JWT does not need to be, which is an unnecessary risk. And `req.query._token` puts the token in much more visibility and CSRF risk. 


### Bug 7:
- Created `.env` file to store environmental settings. This was needed to secretly store the username and password for PostgreSQL which PG needed in order to connect to the database.
- I also copied the `SECRET_KEY` to `.env` just as a practice, but I left the original `SECRET_KEY` in `.config.js` as well.   


### Bug 8:
- Changed Bcrypt's work factor to 12. It was at 10 which seemed simplistic for a banking app.
	