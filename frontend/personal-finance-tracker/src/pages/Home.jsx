import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TransactionForm from '../components/TransactionForm';
import TransactionList from '../components/TransactionList';
import Reports from '../components/Reports';
import Budget from '../components/Budget';
import ExportData from '../components/ExportData';
import RecurringTransactions from '../components/RecurringTransactions';

const Home = () => {
  const userId = 1; // Mock user
  const [transactions, setTransactions] = useState([]);

  // useEffect(() => {
  //   axios.get(`/transactions/${userId}`).then((res) => setTransactions(res.data));
  // }, [userId]);

  useEffect(() => {
    axios.get(`/transactions/${userId}`)
      .then((res) => {
        console.log('Fetched transactions:', res.data); // See what this actually is
        setTransactions(res.data);
      })
      .catch((err) => {
        console.error('Error fetching transactions:', err);
        setTransactions([]); // fallback
      });
  }, [userId]);

  return (
    <div>
      <h1>Personal Finance Tracker</h1>
      <TransactionForm onAdd={(t) => setTransactions([...transactions, t])} userId={userId} />
      <TransactionList transactions={transactions} />
      <Reports userId={userId} />
      <Budget userId={userId} />
      <RecurringTransactions userId={userId} />
      <ExportData userId={userId} />
    </div>
  );
};

export default Home;
