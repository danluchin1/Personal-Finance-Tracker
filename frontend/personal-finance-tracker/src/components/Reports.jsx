import React, { useEffect, useState } from 'react';
import api from '../api';

const Reports = ({ userId }) => {
  const [report, setReport] = useState([]);

  useEffect(() => {
    api.get(`/reports/${userId}/last-month`).then(res => setReport(res.data));
  }, [userId]);

  return (
    <div>
      <h2>Expense Report (Last Month)</h2>
      <ul>
        {Array.isArray(report) ? (
          report.map((r, i) => <li key={i}>{r.category}: ${r.total}</li>)
        ) : (
          <p>No report data available.</p>
        )}
      </ul>
    </div>
  );
};

export default Reports;