import React, { useState } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';

const Login = ({ setToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const endpoint = isRegistering ? '/auth/register' : '/auth/login';
      const response = await api.post(endpoint, { username, password });
      
      if (isRegistering) {
        // After successful registration, automatically log in
        const loginResponse = await api.post('/auth/login', { username, password });
        localStorage.setItem('token', loginResponse.data.token);
        setToken(loginResponse.data.token);
      } else {
        localStorage.setItem('token', response.data.token);
        setToken(response.data.token);
      }
      
      navigate('/');
    } catch (err) {
      setError(isRegistering ? 'Registration failed' : 'Invalid credentials');
      console.error('Error:', err);
    }
  };

  return (
    <div className="max-w-md mx-auto p-5">
      <h2 className="text-2xl font-bold mb-4">{isRegistering ? 'Register' : 'Login'}</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button 
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
        >
          {isRegistering ? 'Register' : 'Login'}
        </button>
      </form>
      <p className="mt-4 text-center">
        {isRegistering ? (
          <>Already have an account? <button 
            onClick={() => setIsRegistering(false)}
            className="text-blue-600 hover:text-blue-800 underline bg-transparent border-none cursor-pointer"
          >
            Login here
          </button></>
        ) : (
          <>Need an account? <button 
            onClick={() => setIsRegistering(true)}
            className="text-blue-600 hover:text-blue-800 underline bg-transparent border-none cursor-pointer"
          >
            Register here
          </button></>
        )}
      </p>
    </div>
  );
};

export default Login;