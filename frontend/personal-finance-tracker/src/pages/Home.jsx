import React, { useState, useEffect } from 'react';
import api, { getUserInfoFromToken } from '../api';
import TransactionForm from '../components/TransactionForm';
import TransactionList from '../components/TransactionList';
import Reports from '../components/Reports';
import Budget from '../components/Budget';
import ExportData from '../components/ExportData';
import RecurringTransactions from '../components/RecurringTransactions';

const Home = () => {
  const userId = getUserInfoFromToken().userId;
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const res = await api.get(`/transactions/${userId}`);
        setTransactions(res.data);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };
    fetchTransactions();
  }, [userId]);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Personal Finance Tracker</h1>
      <div className="space-y-8">
        <TransactionForm 
          onAdd={(t) => setTransactions([...transactions, t])} 
          userId={userId} 
        />
        <TransactionList transactions={transactions} />
        <Reports userId={userId} />
        <Budget userId={userId} />
        <RecurringTransactions userId={userId} />
        <ExportData userId={userId} />
      </div>
    </div>
  );
};

export default Home;