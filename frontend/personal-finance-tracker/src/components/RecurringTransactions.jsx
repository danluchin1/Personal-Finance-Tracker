import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RecurringTransactions = ({ userId }) => {
  const [recurring, setRecurring] = useState([]);
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [frequency, setFrequency] = useState('');

  useEffect(() => {
    axios.get(`/recurring/${userId}`).then((res) => setRecurring(res.data));
  }, [userId]);

  const addRecurring = async () => {
    await axios.post(`/recurring/${userId}`, { amount, category, frequency });
    setRecurring([...recurring, { amount, category, frequency }]);
  };

  return (
    <div>
      <h3>Recurring Transactions</h3>
      <input type="number" placeholder="Amount" onChange={(e) => setAmount(e.target.value)} />
      <input type="text" placeholder="Category" onChange={(e) => setCategory(e.target.value)} />
      <select onChange={(e) => setFrequency(e.target.value)}>
        <option value="monthly">Monthly</option>
        <option value="weekly">Weekly</option>
      </select>
      <button onClick={addRecurring}>Add</button>
      <h4>Current Recurring Transactions</h4>
      <ul>
        {recurring.map((r, index) => (
          <li key={index}>{r.category}: ${r.amount} ({r.frequency})</li>
        ))}
      </ul>
    </div>
  );
};

export default RecurringTransactions;
