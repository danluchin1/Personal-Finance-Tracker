import React from 'react';

const TransactionList = ({ transactions }) => {
  if (!Array.isArray(transactions)) {
    return <div className="text-gray-500">No transactions found.</div>;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Transactions</h3>
      <ul className="space-y-2">
        {transactions.map((t, index) => (
          <li 
            key={index}
            className="flex justify-between items-center p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors duration-200"
          >
            <span className="text-gray-600">{t.date ? new Date(t.date).toLocaleDateString() : ''}</span>
            <span className="font-medium">{t.category}</span>
            <span className={`font-bold ${t.amount >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              ${Math.abs(t.amount).toFixed(2)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;