import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:6578',
});

export default api;
