import axios from 'axios';
import { Navigate } from 'react-router-dom';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000',
});

api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
});

api.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export function getUserInfoFromToken() {
  const token = localStorage.getItem('token');
  if (!token) return {};
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    return { userId: payload.userId, username: payload.username };
  } catch {
    return {};
  }
}

export default api;
