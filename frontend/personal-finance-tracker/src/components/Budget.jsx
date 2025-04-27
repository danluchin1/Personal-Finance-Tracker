import React, { useState, useEffect } from 'react';
import api from '../api';

const Budget = ({ userId, transactions = [] }) => {
  const [budgets, setBudgets] = useState([]);
  const [category, setCategory] = useState('');
  const [limit, setLimit] = useState('');

  useEffect(() => {
    api.get(`/budget/${userId}`).then((res) => setBudgets(res.data));
  }, [userId]);

  const setBudget = async () => {
    await api.post(`/budget/${userId}`, { category, limit });
    setBudgets([...budgets, { category, limit }]);
    setCategory('');
    setLimit('');
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Set Monthly Budget</h3>
      <div className="space-y-4 mb-6">
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="number"
          placeholder="Limit"
          value={limit}
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
        {budgets.map((b, index) => {
          const categoryTransactions = transactions.filter(
            (t) => t.category === b.category
          );
          const totalSpent = categoryTransactions.reduce(
            (sum, t) => sum + Number(t.amount),
            0
          );
          const remaining = Number(b.limit) - totalSpent;
          const overBudget = remaining < 0;
          return (
            <li
              key={index}
              className="flex flex-col p-3 bg-gray-50 rounded-md"
            >
              <div className="flex justify-between items-center">
                <span className="font-medium">{b.category}</span>
                <span className="text-green-600 font-bold">${Number(b.limit).toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center text-sm mt-1">
                <span>Total spent: ${totalSpent.toFixed(2)}</span>
                <span className={overBudget ? "text-red-600 font-bold" : "text-gray-700 font-bold"}>
                  Remaining: ${remaining.toFixed(2)}
                </span>
              </div>
              {overBudget && (
                <div className="text-red-600 font-semibold mt-1">Warning: Over budget!</div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Budget;