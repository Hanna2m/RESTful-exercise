const Pool = require('pg').Pool;

 const pool = new Pool({
     user: 'anna',
     password: '111111',
     database: 'todo_db',
     host: 'localhost',
     port: 5432
 });

 module.exports = pool;