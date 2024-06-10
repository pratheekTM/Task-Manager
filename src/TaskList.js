// /src/api.js - Provides a view to list multiple Tasks.
import React, { useEffect, useState } from 'react';
import api from './api';
import TaskItem from './TaskItem';
import { Link } from 'react-router-dom';
import './TaskList.css';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    api.get('/tasks').then((response) => {
      setTasks(response.data);
    });
  }, []);

  const handleDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="task-list">
      <h2>Task List</h2>
      <Link to="/create" className="btn">Add New Task</Link>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default TaskList;
