const express = require('express');
const pool = require('../db');
const router = express.Router();

// POST endpoint to create/update a budget
router.post('/:userId', async (req, res) => {
  const { userId } = req.params;
  const { category, limit } = req.body;
  
  await pool.query(
    `INSERT INTO budgets (user_id, category, "limit") 
     VALUES ($1, $2, $3) 
     ON CONFLICT (user_id, category) 
     DO UPDATE SET "limit" = $3`, 
    [userId, category, limit]
  );
  
  res.json({ message: 'Budget set' });
});

// GET endpoint to retrieve budgets for a user
router.get('/:userId', async (req, res) => {
  const { userId } = req.params;
  const budgets = await pool.query(
    'SELECT * FROM budgets WHERE user_id = $1', 
    [userId]
  );
  res.json(budgets.rows);
});

module.exports = router;