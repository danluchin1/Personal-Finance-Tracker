const express = require('express');
const pool = require('../db');
const { Parser } = require('json2csv');
const router = express.Router();

router.get('/:userId/export/:format', async (req, res) => {
  const { userId, format } = req.params;
  const transactions = await pool.query('SELECT * FROM transactions WHERE user_id = $1', [userId]);
  if (format === 'csv') {
    const parser = new Parser();
    const csv = parser.parse(transactions.rows);
    res.attachment('transactions.csv').send(csv);
  } else {
    res.json(transactions.rows);
  }
});

module.exports = router;