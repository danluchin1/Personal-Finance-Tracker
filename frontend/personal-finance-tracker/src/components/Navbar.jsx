// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import LogoutButton from './LogoutButton';

const Navbar = ({ setToken }) => {
  return (
    <nav style={{
      backgroundColor: '#333',
      padding: '15px 20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: 'white'
    }}>
      <Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '1.2rem' }}>
        Finance Tracker
      </Link>
      <LogoutButton setToken={setToken} />
    </nav>
  );
};

export default Navbar;