// /src/TaskForm.js - Provides a form for user inputs.
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from './api';
import './TaskForm.css';

function TaskForm() {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      api.get(`/tasks/${id}`).then((response) => {
        const task = response.data[0];
        setTitle(task.title);
        setDescription(task.description);
        setDueDate(new Date(task.due_date).toISOString().substr(0, 10));
      });
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const taskData = { title, description, due_date: dueDate };

    try {
      if (id) {
        await api.put(`/tasks/${id}`, taskData);
      } else {
        await api.post('/tasks', taskData);
      }
      navigate('/');
    } catch (error) {
      console.error('Error saving task: ', error);
    }
  };

  return (
    <div className="task-form">
      <h2>{id ? 'Edit Task' : 'Create Task'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <div>
          <label>Due Date:</label>
          <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} required />
        </div>
        <button type="submit">{id ? 'Update Task' : 'Create Task'}</button>
      </form>
    </div>
  );
}

export default TaskForm;
