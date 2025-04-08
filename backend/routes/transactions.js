const express = require('express');
const pool = require('../db');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Add Transaction
router.post('/', authMiddleware, async (req, res) => {
  const { amount, category, date } = req.body;
  await pool.query(
    'INSERT INTO transactions (user_id, amount, category, date) VALUES ($1, $2, $3, $4)',
    [req.user.userId, amount, category, date]
  );
  res.json({ message: 'Transaction added' });
});

// Get User Transactions
router.get('/:userId', authMiddleware, async (req, res) => {
  const { userId } = req.params;
  const transactions = await pool.query('SELECT * FROM transactions WHERE user_id = $1', [userId]);
  res.json(transactions.rows);
});

module.exports = router;
