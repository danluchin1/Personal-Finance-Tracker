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
    <div>
      <h3>Export Data</h3>
      <button onClick={() => exportFile('csv')}>Export as CSV</button>
      <button onClick={() => exportFile('json')}>Export as JSON</button>
    </div>
  );
};

export default ExportData;