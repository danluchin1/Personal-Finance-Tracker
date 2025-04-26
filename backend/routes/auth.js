const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const pool = require('../db');

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET;

// User Registration
router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    
    // Check if user already exists
    const userExists = await pool.query(
      'SELECT * FROM users WHERE username = $1', 
      [username]
    );
    
    if (userExists.rows.length > 0) {
      return res.status(400).json({ error: 'Username already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await pool.query(
      'INSERT INTO users (username, password) VALUES ($1, $2)',
      [username, hashedPassword]
    );
    
    res.json({ message: 'User registered successfully' });
  } catch (err) {
    console.error('Registration error:', err);
    res.status(500).json({ error: 'Registration failed' });
  }
});

// User Login
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await pool.query(
      'SELECT * FROM users WHERE username = $1', 
      [username]
    );

    if (user.rows.length === 0) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const validPassword = await bcrypt.compare(password, user.rows[0].password);
    if (!validPassword) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Include username in the JWT payload
    const token = jwt.sign({ userId: user.rows[0].id, username: user.rows[0].username }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ error: 'Login failed' });
  }
});

// Add to backend/routes/auth.js
const authMiddleware = require('../middleware/authMiddleware');

// User Logout
router.post('/logout', authMiddleware, (req, res) => {
  const token = req.header('Authorization');
  authMiddleware.invalidateToken(token);
  res.json({ message: 'Logged out successfully' });
});

module.exports = router;