// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import { getUserInfoFromToken } from './api';

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const { username } = getUserInfoFromToken();

  return (
    <Router>
      {token && <Navbar setToken={setToken} username={username} />}
      <div className="min-h-screen bg-gray-100 p-6">
        <Routes>
          <Route 
            path="/" 
            element={token ? <Home /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/login" 
            element={<Login setToken={setToken} />} 
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;