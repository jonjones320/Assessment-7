const { Client } = require('pg');
const client = new Client();

module.exports = async () => {
  await client.end();
};