import React, { useState } from 'react';
import api from '../api';

const TransactionForm = ({ onAdd, userId }) => {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');

  const addTransaction = async () => {
    try {
      const transaction = { amount, category, date };
      await api.post('/transactions', transaction);
      onAdd({ ...transaction, userId });
    } catch (error) {
      console.error('Error adding transaction:', error);
    }
  };

  return (
    <div>
      <h3>Add Transaction</h3>
      <input type="number" placeholder="Amount" onChange={(e) => setAmount(e.target.value)} />
      <input type="text" placeholder="Category" onChange={(e) => setCategory(e.target.value)} />
      <input type="date" onChange={(e) => setDate(e.target.value)} />
      <button onClick={addTransaction}>Add</button>
    </div>
  );
};

export default TransactionForm;