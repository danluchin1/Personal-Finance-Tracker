// src/components/LogoutButton.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';

const LogoutButton = ({ setToken }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await api.post('/auth/logout');
    } catch (err) {
      console.error('Logout error:', err);
    } finally {
      localStorage.removeItem('token');
      setToken(null);
      navigate('/login');
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
    >
      Logout
    </button>
  );
};

export default LogoutButton;