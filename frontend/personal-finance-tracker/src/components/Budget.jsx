import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Budget = ({ userId }) => {
  const [budgets, setBudgets] = useState([]);
  const [category, setCategory] = useState('');
  const [limit, setLimit] = useState('');

  useEffect(() => {
    axios.get(`/budget/${userId}`).then((res) => setBudgets(res.data));
  }, [userId]);

  const setBudget = async () => {
    await axios.post(`/budget/${userId}`, { category, limit });
    setBudgets([...budgets, { category, limit }]);
  };

  return (
    <div>
      <h3>Set Monthly Budget</h3>
      <input type="text" placeholder="Category" onChange={(e) => setCategory(e.target.value)} />
      <input type="number" placeholder="Limit" onChange={(e) => setLimit(e.target.value)} />
      <button onClick={setBudget}>Set Budget</button>
      <h4>Current Budgets</h4>
      <ul>
        {budgets.map((b, index) => (
          <li key={index}>{b.category}: ${b.limit}</li>
        ))}
      </ul>
    </div>
  );
};

export default Budget;
