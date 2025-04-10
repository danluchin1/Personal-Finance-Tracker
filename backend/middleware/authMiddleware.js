// backend/middleware/authMiddleware.js
const jwt = require('jsonwebtoken');

// In-memory token blacklist (for production, use Redis or database)
const tokenBlacklist = new Set();

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ error: 'Access denied' });

  // Check if token is blacklisted
  if (tokenBlacklist.has(token)) {
    return res.status(401).json({ error: 'Token invalidated' });
  }

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).json({ error: 'Invalid token' });
  }
};

// Add function to invalidate tokens
authMiddleware.invalidateToken = (token) => {
  tokenBlacklist.add(token);
};

module.exports = authMiddleware;