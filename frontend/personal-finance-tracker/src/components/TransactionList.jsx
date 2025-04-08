import React from 'react';

const TransactionList = ({ transactions }) => {
  if (!Array.isArray(transactions)) {
    return <div>No transactions found.</div>;
  }

  return (
    <div>
      <h3>Transactions</h3>
      <ul>
        {transactions.map((t, index) => (
          <li key={index}>
            {t.date} - {t.category}: ${t.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;