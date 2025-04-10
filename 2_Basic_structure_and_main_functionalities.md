# **Personal Finance Tracker**  
*A full-stack budgeting application with authentication, transactions, and reporting*

---

## **📌 Table of Contents**  
1. [Features](#-features)  
2. [Tech Stack](#-tech-stack)  
3. [Setup](#-setup)  
4. [Database Schema](#-database-schema)  
5. [API Endpoints](#-api-endpoints)  
6. [UI Components](#-ui-components)  
7. [Error Handling](#-error-handling)  
8. [Future Improvements](#-future-improvements)  

---

## **✨ Features**  

### **🔐 Authentication**  
- **User Registration**  
  - Secure password hashing (bcrypt)  
  - Unique username validation  
- **Login/Logout**  
  - JWT-based authentication (1-hour expiry)  
  - Persistent sessions via `localStorage`  
  - Server-side token invalidation on logout  

### **💰 Transactions**  
- **Add Transactions**  
  - Amount, category, and date tracking  
- **View Transactions**  
  - List all transactions with filtering (future)  
- **Recurring Transactions**  
  - Set up weekly/monthly recurring expenses  
  - Automate future transactions (future)  

### **📊 Budgets & Reports**  
- **Set Budgets**  
  - Monthly spending limits per category  
  - Prevent duplicate budgets (unique `user_id + category`)  
- **Expense Reports**  
  - Monthly spending summaries  
  - Category-wise breakdowns  

### **📤 Data Export**  
- **Export Formats**  
  - CSV (for Excel/Google Sheets)  
  - JSON (for external processing)  

### **🖥️ UI/UX**  
- **Protected Routes**  
  - Redirects to login if unauthenticated  
- **Responsive Design**  
  - Works on desktop/mobile  
- **Form Validation**  
  - Error messages for invalid inputs  

---

## **🛠️ Tech Stack**  

### **Backend**  
- **Runtime**: Node.js  
- **Framework**: Express.js  
- **Database**: PostgreSQL (hosted on Render)  
- **Libraries**:  
  - `bcrypt` (password hashing)  
  - `jsonwebtoken` (JWT authentication)  
  - `pg` (PostgreSQL client)  
  - `cors` (cross-origin requests)  
- **[Backend](backend)**

### **Frontend**  
- **Framework**: React.js  
- **Routing**: React Router  
- **HTTP Client**: Axios (with interceptors)  
- **Styling**: CSS (inline + modular)
- **[Frontend](frontend)**  

---

## **⚙️ Setup**  

### **Backend**  
1. Install dependencies:  
   ```bash
   cd backend && npm install
   ```  
2. Configure `.env`:  
   ```env
   DB_USER=your_db_user
   DB_HOST=your_db_host
   DB_NAME=your_db_name
   DB_PASSWORD=your_db_password
   JWT_SECRET=your_jwt_secret
   ```  
3. Start the server:  
   ```bash
   npm run dev
   ```  

### **Frontend**  
1. Install dependencies:  
   ```bash
   cd frontend/personal-finance-tracker && npm install
   ```  
2. Start the app:  
   ```bash
   npm run dev
   ```  

---

## **🗃️ Database Schema**  

### **Tables**  
1. **`users`**  
   ```sql
   CREATE TABLE users (
     id SERIAL PRIMARY KEY,
     username VARCHAR(100) UNIQUE NOT NULL,
     password VARCHAR(255) NOT NULL
   );
   ```  

2. **`budgets`**  
   ```sql
   CREATE TABLE budgets (
     id SERIAL PRIMARY KEY,
     user_id INTEGER REFERENCES users(id),
     category VARCHAR(100) NOT NULL,
     budget_limit NUMERIC NOT NULL,
     UNIQUE(user_id, category)
   );
   ```  

3. **`transactions`**  
   ```sql
   CREATE TABLE transactions (
     id SERIAL PRIMARY KEY,
     user_id INTEGER REFERENCES users(id),
     amount NUMERIC NOT NULL,
     category VARCHAR(100),
     date DATE NOT NULL
   );
   ```  

4. **`recurring_transactions`**  
   ```sql
   CREATE TABLE recurring_transactions (
     id SERIAL PRIMARY KEY,
     user_id INTEGER REFERENCES users(id),
     amount NUMERIC NOT NULL,
     category VARCHAR(100),
     frequency VARCHAR(50)
   );
   ```  

---

## **🔌 API Endpoints**  

| Method | Endpoint | Description | Protected |
|--------|----------|-------------|-----------|
| `POST` | `/auth/register` | Register new user | ❌ |
| `POST` | `/auth/login` | Login user | ❌ |
| `POST` | `/auth/logout` | Invalidate JWT token | ✅ |
| `POST` | `/transactions` | Add a transaction | ✅ |
| `GET`  | `/transactions/:userId` | Get user transactions | ✅ |
| `POST` | `/budget/:userId` | Set budget | ✅ |
| `GET`  | `/budget/:userId` | Get budgets | ✅ |
| `GET`  | `/reports/:userId/last-month` | Monthly report | ✅ |
| `GET`  | `/export/:userId/export/:format` | Export data (CSV/JSON) | ✅ |

---

## **🎨 UI Components**  

### **Pages**  
- **Login/Register**  
  - Form validation  
  - Toggle between login/register modes  
- **Dashboard**  
  - Transaction list  
  - Budget summary  
  - Quick-add transaction form  

### **Components**  
- **`TransactionForm`**  
  - Inputs for amount, category, date  
- **`Budget`**  
  - Set/view spending limits  
- **`ExportData`**  
  - CSV/JSON export buttons  

---

## **⚠️ Error Handling**  

### **Frontend**  
- **Axios Interceptors**  
  - Auto-redirect to login on `401`  
  - Display user-friendly error messages  

### **Backend**  
- **Status Codes**  
  - `400` – Invalid input  
  - `401` – Unauthorized  
  - `500` – Server error  

---

## **🚀 Future Improvements**  
- **Dashboard Charts** (e.g., Pie charts for spending)  
- **Transaction Filtering** (by date/category)  
- **Email Notifications** (budget alerts)  
- **Dark Mode**  