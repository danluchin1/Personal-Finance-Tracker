import React, { useState } from 'react';
import axios from 'axios';

const TransactionForm = ({ onAdd, userId }) => {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');

  const addTransaction = async () => {
    const transaction = { userId, amount, category, date };
    await axios.post('/transactions', transaction);
    onAdd(transaction);
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
