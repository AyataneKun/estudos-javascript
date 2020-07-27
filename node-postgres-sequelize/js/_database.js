const pg = require('pg')

const client = new pg.Client({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: '174xzwk3cl',
  port: 5432,
})

module.exports = client
