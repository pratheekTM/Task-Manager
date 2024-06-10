// /src/TaskDetail.js - Provides detailed view of a Task.
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import api from './api';
import './TaskDetail.css';

const TaskDetail = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    api.get(`/tasks/${id}`).then((response) => {
      setTask(response.data[0]);
      console.log(response.data);
    });
  }, [id]);

  const handleDelete = async () => {
    try {
      await api.delete(`/tasks/${id}`);
      navigate('/');
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  if (!task) return <div>Loading...</div>;

  return (
    <div className="task-detail">
      <h2><strong>Title:</strong> {task.title}</h2>
      <p><strong>Description:</strong> {task.description}</p>
      <p><strong>Due Date:</strong> {new Date(task.due_date).toLocaleDateString()}</p>
      <Link to={`/edit/${task.id}`} className="btn">Edit Task</Link>
      <button onClick={handleDelete} className="btn">Delete Task</button>
      <Link to="/" className="btn">Back to Task List</Link>
    </div>
  );
};

export default TaskDetail;
