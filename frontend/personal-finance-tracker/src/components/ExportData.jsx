import React from 'react';
import api from '../api';

const ExportData = ({ userId }) => {
  const exportFile = async (format) => {
    const response = await api.get(`/export/${userId}/export/${format}`, {
      responseType: 'blob',
    });

    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `transactions.${format}`);
    document.body.appendChild(link);
    link.click();
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Export Data</h3>
      <div className="space-x-4">
        <button
          onClick={() => exportFile('csv')}
          className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
        >
          Export as CSV
        </button>
        <button
          onClick={() => exportFile('json')}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
        >
          Export as JSON
        </button>
      </div>
    </div>
  );
};

export default ExportData;