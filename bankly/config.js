/** Shared config for application; can be req'd many places. */

require('dotenv').config();


const PORT = +process.env.PORT || 3000;

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const dbname = process.env.DB_NAME;


const BCRYPT_WORK_FACTOR = 12;

const SECRET_KEY = process.env.SECRET_KEY || 'development-secret-key';

const DB_URI =
  process.env.NODE_ENV === 'test'
    ? `postgresql://${username}:${password}@localhost:5432/${dbname}_test`
    : `postgresql://${username}:${password}@localhost:5432/${dbname}`;


module.exports = {
  BCRYPT_WORK_FACTOR,
  SECRET_KEY,
  PORT,
  DB_URI
};
