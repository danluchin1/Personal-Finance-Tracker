const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const transactionRoutes = require('./routes/transactions');
const reportRoutes = require('./routes/reports');
const budgetRoutes = require('./routes/budget');
const exportRoutes = require('./routes/export');
const recurringRoutes = require('./routes/recurring');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/transactions', transactionRoutes);
app.use('/reports', reportRoutes);
app.use('/budget', budgetRoutes);
app.use('/export', exportRoutes);
app.use('/recurring', recurringRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));