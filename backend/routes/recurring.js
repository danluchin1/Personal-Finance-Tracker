const express = require('express');
const pool = require('../db');
const router = express.Router();

router.post('/:userId', async (req, res) => {
  const { userId } = req.params;
  const { amount, category, frequency } = req.body;
  await pool.query('INSERT INTO recurring_transactions (user_id, amount, category, frequency) VALUES ($1, $2, $3, $4)', [userId, amount, category, frequency]);
  res.json({ message: 'Recurring transaction set' });
});

router.get('/:userId', async (req, res) => {
  const { userId } = req.params;
  const recurring = await pool.query('SELECT * FROM recurring_transactions WHERE user_id = $1', [userId]);
  res.json(recurring.rows);
});

module.exports = router;