// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token'));

  return (
    <Router>
      {token && <Navbar setToken={setToken} />}
      <div style={{ padding: '20px' }}>
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