import React, { useState, useEffect } from 'react';
import api from '../api';

const RecurringTransactions = ({ userId }) => {
  const [recurring, setRecurring] = useState([]);
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [frequency, setFrequency] = useState('');

  useEffect(() => {
    api.get(`/recurring/${userId}`).then((res) => setRecurring(res.data));
  }, [userId]);

  const addRecurring = async () => {
    await api.post(`/recurring/${userId}`, { amount, category, frequency });
    setRecurring([...recurring, { amount, category, frequency }]);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Recurring Transactions</h3>
      <div className="space-y-4 mb-6">
        <input
          type="number"
          placeholder="Amount"
          onChange={(e) => setAmount(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Category"
          onChange={(e) => setCategory(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          onChange={(e) => setFrequency(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="monthly">Monthly</option>
          <option value="weekly">Weekly</option>
        </select>
        <button
          onClick={addRecurring}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
        >
          Add Recurring Transaction
        </button>
      </div>
      <h4 className="text-lg font-semibold mb-3">Current Recurring Transactions</h4>
      <ul className="space-y-2">
        {recurring.map((r, index) => (
          <li
            key={index}
            className="flex justify-between items-center p-3 bg-gray-50 rounded-md"
          >
            <span className="font-medium">{r.category}</span>
            <span className="text-gray-600">${r.amount}</span>
            <span className="text-blue-600 font-medium">({r.frequency})</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecurringTransactions;