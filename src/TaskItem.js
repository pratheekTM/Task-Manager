import React from 'react';
import { Link } from 'react-router-dom';
import api from './api';
import './TaskItem.css';

const TaskItem = ({ task, onDelete }) => {
  const handleDelete = async () => {
    try {
      await api.delete(`/tasks/${task.id}`);
      onDelete(task.id);
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div className="task-item">
      <h3>{task.title}</h3>
      <p><strong>Due Date:</strong> {new Date(task.due_date).toLocaleDateString()}</p>
      <span><Link to={`/tasks/${task.id}`} className="btn">View Details</Link></span>
      <span><button onClick={handleDelete} className="btn">Delete Task</button></span>
    </div>
  );
};

export default TaskItem;
