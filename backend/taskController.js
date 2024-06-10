// /backend/taskController.js - For defining functions of different API routes.
const Task = require('./taskModel');

exports.getAllTasks = (req, res) => {
  Task.getAllResults((err, tasks) => {
    if (err) res.status(500).send(err);
    res.status(200).json(tasks);
  });
};

exports.getTaskById = (req, res) => {
  Task.getResultById(req.params.id, (err, task) => {
    if (err) res.status(500).send(err);
    res.status(200).json(task);
  });
};

exports.createTask = (req, res) => {
  const resultTask = req.body;
  Task.createTask(resultTask, (err, task) => {
    if (err) res.status(500).send(err);
    res.status(201).json(task);
  });
};

exports.updateTask = (req, res) => {
  const resultTask = req.body;
  Task.updateTask(req.params.id, resultTask, (err, task) => {
    if (err) res.status(500).send(err);
    res.status(200).json(task);
  });
};

exports.deleteTask = (req, res) => {
  Task.deleteTask(req.params.id, (err, result) => {
    if (err) res.status(500).send(err);
    res.status(200).json({ message: 'Deleted!' });
  });
};
