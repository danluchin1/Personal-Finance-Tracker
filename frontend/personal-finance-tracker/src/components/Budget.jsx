import React, { useState, useEffect } from 'react';
import api from '../api';

const Budget = ({ userId }) => {
  const [budgets, setBudgets] = useState([]);
  const [category, setCategory] = useState('');
  const [limit, setLimit] = useState('');

  useEffect(() => {
    api.get(`/budget/${userId}`).then((res) => setBudgets(res.data));
  }, [userId]);

  const setBudget = async () => {
    await api.post(`/budget/${userId}`, { category, limit });
    setBudgets([...budgets, { category, limit }]);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Set Monthly Budget</h3>
      <div className="space-y-4 mb-6">
        <input
          type="text"
          placeholder="Category"
          onChange={(e) => setCategory(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="number"
          placeholder="Limit"
          onChange={(e) => setLimit(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={setBudget}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
        >
          Set Budget
        </button>
      </div>
      <h4 className="text-lg font-semibold mb-3">Current Budgets</h4>
      <ul className="space-y-2">
        {budgets.map((b, index) => (
          <li
            key={index}
            className="flex justify-between items-center p-3 bg-gray-50 rounded-md"
          >
            <span className="font-medium">{b.category}</span>
            <span className="text-green-600 font-bold">${b.limit}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Budget;