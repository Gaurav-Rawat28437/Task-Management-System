# 🚀 Task Management System

A modern Task Management System built with React, Redux Toolkit, React Router, and Tailwind CSS.

This application allows administrators to assign tasks to employees and track their progress while employees can manage their assigned tasks through an intuitive dashboard.

---

## 📌 Features

### Authentication

* Admin Login
* Employee Login
* Role-Based Access Control
* Protected Routes
* Logout Functionality

### Admin Dashboard

* Create New Tasks
* Assign Tasks to Employees
* View All Assigned Tasks
* Track Employee Progress
* Monitor Task Status

### Employee Dashboard

* View Assigned Tasks
* Accept Tasks
* Complete Tasks
* Mark Tasks as Failed
* View Task Details
* Filter Tasks by Status

### Task Management

* Create Tasks
* Update Task Status
* View Task Details
* Due Date Tracking
* Task Categories
* Assignment Date Tracking

---

## 📊 Task Workflow

```text
New
 ↓
Accepted
 ↙      ↘
Failed  Completed
```

### Admin View

```text
New       → Pending
Accepted  → In Progress
Completed → Completed
Failed    → Failed
```

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* JavaScript (ES6+)

### State Management

* Redux Toolkit
* React Redux

### Routing

* React Router DOM

### Styling

* Tailwind CSS

### Notifications

* React Hot Toast

### Storage

* Local Storage
* Session Storage

### Development Tools

* Git
* GitHub
* VS Code

---

## 📁 Folder Structure

```bash
src
│
├── Components
│   ├── Auth
│   │   └── Login.jsx
│   │
│   ├── Dashboard
│   │   ├── AdminDashboard.jsx
│   │   ├── EmployeeDashboard.jsx
│   │   └── Other
│   │       ├── Header.jsx
│   │       ├── Loader.jsx
│   │       └── TaskListNumbers.jsx
│   │
│   ├── TaskList
│   │   ├── CreateTask.jsx
│   │   ├── AllTask.jsx
│   │   ├── Task.jsx
│   │   ├── TaskList.jsx
│   │   ├── FilteredTasks.jsx
│   │   └── TaskDetail.jsx
│
├── Context
│   └── ProtectedRoute.jsx
│
├── Utils
│   ├── Store.js
│   ├── Employee.js
│   ├── EmployeeTaskSlice.js
│   └── LocalStorage.js
│
├── App.jsx
└── main.jsx
```

---

## 🔒 Route Protection

### Admin Routes

```text
/admin
```

### Employee Routes

```text
/employee/:id
/employee/:id/:status
/task/:employeeId/:taskId
```

---

## 💾 Data Persistence

The application uses Redux Toolkit and Local Storage to persist data.

```javascript
localStorage.setItem("reduxState", state);
```

This ensures task data remains available after page refresh.

---

## 🎨 UI Features

* Modern Dark Theme
* Responsive Design
* Dashboard Cards
* Task Status Badges
* Loading Spinner
* Toast Notifications
* Hover Animations
* Mobile Friendly Layout

---

## 📈 Future Improvements

* Backend Integration (Node.js + Express)
* MongoDB Database
* JWT Authentication
* Employee Registration
* Search & Filtering
* Task Priority Levels
* File Upload Support
* Analytics Dashboard
* Email Notifications

---

## ⚠️ Important Note

This is a frontend-only project.

* No backend server is currently used.
* Data is stored in the browser.
* Authentication is simulated.
* Data is available only on the user's device.

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/Gaurav-Rawat28437/Task-Management-System.git
```

Move into the project directory:

```bash
cd Task-Management-System
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

---

## 👨‍💻 Author

**Gaurav Singh Rawat**

* BCA Student
* React Developer
* MERN Stack Learner

---

## ⭐ Support

If you like this project, please give it a star on GitHub.
