const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'pratheektm',
  password: '741547',
  database: 'task_manager',
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Database Connected');
});

module.exports = connection;
