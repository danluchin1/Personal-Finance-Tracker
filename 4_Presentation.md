# 📈 Personal Finance Tracker
## Phase 4 – Project Presentation

---

### 🎯 Project Title

**Personal Finance Tracker** — A simple, effective tool for managing personal and freelance finances.<br>
**[Personal Finance Tracker](https://personal-finance-tracker-inky-gamma.vercel.app/)**

---

### 📝 Project Overview

**Personal Finance Tracker** is a web application designed to help individuals easily track their income and expenses, set monthly budgets, and generate financial reports.  
The primary target users are:

- **Young professionals** who want to organize their spending and save for goals.
- **Freelancers** who need to manage irregular incomes and distinguish between business and personal expenses.

The application aims to provide a user-friendly and flexible solution to common financial tracking challenges, offering features like transaction logging, reporting, budgeting, and data export.

---

### 📌 Use Case Summary

[Use cases](https://github.com/danluchin1/Personal-Finance-Tracker/blob/main/1_Definition_and_Planning.md#2-use-cases-and-user-flows)
| Use Case                                | Implemented (Yes/No) | Demonstration / Notes |
|-----------------------------------------|----------------------|--------------------------------------------------------------------------------------------|
| Adding a Transaction                    | Yes                  | User can add transactions with amount, category, and date.                                 |
| Viewing Expense Reports                 | Yes                  | User can view categorized expense reports for custom periods.                              |
| Setting a Monthly Budget                | Yes                  | Users can define budget limits per category and get notifications when approaching limits. |
| Exporting Financial Data                | Yes                  | Users can export transaction data in CSV format.                                           |
| Setting Up Recurring Transactions       | Yes                  | Users can set up recurring transactions (monthly or weekly).                               |

---

### ✍️ Technical Implementation

- **Frontend**: Developed using **React** with **Tailwind CSS** for responsive and modern styling.
- **Backend**: Built with **Node.js** and **Express**, managing API endpoints for transactions and reports.
- **Database**: **PostgreSQL** stores users' transactions, budgets, and reporting data.
- **Authentication**: Secure login system implemented using **JWT (JSON Web Tokens)**.
- **Build Tool**: **Vite** used for efficient development and fast build processes.
- **Hosting**: Deployed on **Vercel** for frontend and **Render** for backend services.

**Key Features Implementation:**

- Modular, component-based architecture for easy scalability.
- Tailwind CSS for rapid UI development and consistent styling.
- RESTful API architecture for clean separation between frontend and backend.
- Secure authentication flow to protect user data.

---

### 🚂 Development Process

- **Phase 1 - Planning**: Defined user personas, use cases, UI wireframes, and technical stack.
- **Phase 2 - Basic Functionality**: Implemented core features — transaction logging, reporting, and budgeting.
- **Phase 3 - Improvements**: Integrated Tailwind CSS for design, configured Vite for better developer experience.
- **Phase 4 - Presentation**: Final review, testing, documentation, and preparation of demonstration materials.

Key decisions included focusing on simplicity and usability, choosing modern technologies (React, Tailwind, Vite), and prioritizing core features based on user personas' needs.

---

### ☀️ Reflection and Future Work

**What worked well:**

- Clear definition of requirements helped stay focused.
- Using Tailwind CSS and Vite significantly sped up the development process.
- Modular component structure made the app easy to scale and maintain.

**Challenges faced:**

- Balancing feature scope with limited development time.
- Configuring the PostgreSQL database, connecting to it and creating the desired tables.
- Integrating Vite and Tailwind initially required troubleshooting due to configuration differences.

**Future Improvements:**

- Add **automatic transaction creation** based on recurring settings (e.g., auto-log rent every month without user input).
- Add **Data Visualization** with charts (e.g., pie charts for spending categories).
- Introduce **Multi-user support** and **cloud syncing**.

---

### 📊 Work Hours Log

| Date       | Used Hours | Subject                                  | Outcome |
|------------|------------|------------------------------------------|---------|
| 20.3.2025  | 4        | Planning the phase 1                     | Defined User Personas, Use Cases and User Flows |
| 21.3.2025  | 3          | Planning the phase 1                     | Defined UI Prototypes, Information Architecture and Technical Design, Project Management and User Testing. |
| 01.4.2025  | 6          | Introducing the basic functionalities    | Defined the backend with the database using cloud PostgreSQL from Render. |
| 03.4.2025  | 5          | Continued the basic functionalities      | Created the necessary tables in PostgreSQL and connected to the backend. |
| 05.4.2025  | 5          | Continued the basic functionalities      | Defined the frontend, built the UI using ReactJS with Vite. |
| 08.4.2025  | 5          | Fixed errors from previous implementations | Fixed some errors in the frontend, added a proxy to vite.config.js file, and tried to fix errors with the database (fixed some, still have issue with the database hostname). |
| 10.4.2025  | 3.5          | Fixed errors from previous implementations | Created all the tables in PostgreSQL needed for the application. Added login/logout functionality. All the errors from 08.4.2025 have been corrected.  |
| 10.4.2025  | 3          | Finished the second phase | Added the report of the second phase of the project. |
| 21.4.2025  | 6          | Started the third phase | Added Tailwind CSS style to the frontend. |
| 22.4.2025  | 4.5        | Continued the third phase | Added more style. |
| 23.4.2025  | 4          | Finished the third phase | Finished with the style. |
| 25.4.2025  | 4          | Fixed bugs | Modified Tailwind and Vite configuration in order for the style to be applied. |
| 26.4.2025  | 2          | Third phase report | Cretated and finished the report of the third phase. |
| 26.4.2025  | 3          | Fourth phase report | Cretated and finished the report of the fourth phase. |
| 26.4.2025  | 1          | Database modifications and backend deployment | Modified db.js so it's using full database URL in a single environment variable for avoiding breaking SSl connections. Deployed the backend on Render and changed the port in server.js. |
| 26.4.2025  | 2          | Fourth phase presentation | Prepared for the presentation. |
| **Total**   | **61** | |

---