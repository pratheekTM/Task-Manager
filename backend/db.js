// /backend/db.js - For connecting to MySql Database.
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'username',
  password: 'password',
  database: 'database_name',
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Database Connected');
});

module.exports = connection;
