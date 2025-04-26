import axios from 'axios';
import { Navigate } from 'react-router-dom';

const api = axios.create({
  baseURL: 'http://localhost:5000',
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

// Utility to decode JWT and extract userId and username
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