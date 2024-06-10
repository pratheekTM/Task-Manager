const db = require('./db');

const Task = {
  getAllResults: (callback) => {
    return db.query('SELECT * FROM tasks', callback);
  },
  getResultById: (id, callback) => {
    return db.query('SELECT * FROM tasks WHERE id = ?', [id], callback);
  },
  createTask: (task, callback) => {
    return db.query('INSERT INTO tasks SET ?', task, callback);
  },
  updateTask: (id, task, callback) => {
    return db.query('UPDATE tasks SET ? WHERE id = ?', [task, id], callback);
  },
  deleteTask: (id, callback) => {
    return db.query('DELETE FROM tasks WHERE id = ?', [id], callback);
  },
};

module.exports = Task;
