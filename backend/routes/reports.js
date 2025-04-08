const express = require('express');
const pool = require('../db');
const router = express.Router();

router.get('/:userId/last-month', async (req, res) => {
  const { userId } = req.params;
  const transactions = await pool.query(
    "SELECT category, SUM(amount) as total FROM transactions WHERE user_id = $1 AND date >= date_trunc('month', CURRENT_DATE - INTERVAL '1 month') AND date < date_trunc('month', CURRENT_DATE) GROUP BY category",
    [userId]
  );
  res.json(transactions.rows);
});

module.exports = router;