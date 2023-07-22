import axios from 'axios';

const api = axios.create({
  baseURL: 'http://195.24.67.222:5000/api/',
  headers: {
    common: {
      'ngrok-skip-browser-warning': true,
      'Content-Type': 'application/json',
    },
  },
});

export default api;
