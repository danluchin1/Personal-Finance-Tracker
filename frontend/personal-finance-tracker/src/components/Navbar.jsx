// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import LogoutButton from './LogoutButton';

const Navbar = ({ setToken, username }) => {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center text-white">
      <Link to="/" className="text-white no-underline text-xl hover:text-gray-300">
        Finance Tracker
      </Link>
      <div className="flex items-center space-x-4">
        {username && (
          <span className="font-semibold text-white">{username}</span>
        )}
        <LogoutButton setToken={setToken} />
      </div>
    </nav>
  );
};

export default Navbar;