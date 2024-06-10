// /src/api.js - For providing a proxy between user interface and the application logic.
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:6578',
});

export default api;
