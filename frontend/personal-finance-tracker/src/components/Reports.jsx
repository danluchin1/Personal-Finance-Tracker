import React, { useEffect, useState } from 'react';
import api from '../api';

const Reports = ({ userId }) => {
  const [report, setReport] = useState([]);

  useEffect(() => {
    api.get(`/reports/${userId}/last-month`).then(res => setReport(res.data));
  }, [userId]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Expense Report (Last Month)</h2>
      <ul className="space-y-3">
        {Array.isArray(report) && report.length > 0 ? (
          report.map((r, i) => (
            <li
              key={i}
              className="flex justify-between items-center p-3 bg-gray-50 rounded-md"
            >
              <span className="font-medium">{r.category}</span>
              <span className="text-red-600 font-bold">${r.total.toFixed(2)}</span>
            </li>
          ))
        ) : (
          <p className="text-gray-500">No report data available.</p>
        )}
      </ul>
    </div>
  );
};

export default Reports;