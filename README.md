# 📋 TaskFlow - Task Management System

🔗 **Live Demo:** https://task-management-system-amber-one.vercel.app/

## Overview

TaskFlow is a modern task management system built with React, Redux Toolkit, Tailwind CSS, and React Router. It helps administrators assign tasks to employees and allows employees to manage and track their assigned work efficiently.

## Features

### Admin Panel

* Admin Login
* Create and assign tasks
* View all assigned tasks
* Monitor task status:

  * Pending
  * In Progress
  * Completed
  * Failed
* Filter tasks by status
* Search tasks by employee name
* View task details
* Profile management

### Employee Panel

* Employee Login
* View assigned tasks
* Accept tasks
* Mark tasks as completed
* Mark tasks as failed
* Filter tasks by status
* View task details
* Profile page

### General Features

* Protected Routes
* Redux State Management
* Local Storage Persistence
* Responsive UI
* Reusable Components
* Sidebar Navigation
* Task Statistics Dashboard
* Loading Screen
* Toast Notifications

## Tech Stack

### Frontend

* React.js
* Redux Toolkit
* React Router DOM
* Tailwind CSS
* React Hot Toast

### State Management

* Redux Toolkit

### Storage

* Local Storage
* Session Storage

## Project Structure

```bash
src/
│
├── Components/
│   ├── Auth/
│   ├── Dashboard/
│   ├── TaskList/
│
├── Context/
│
├── Utils/
│   ├── Employee.js
│   ├── EmployeeTaskSlice.js
│   ├── LocalStorage.js
│   ├── SessionStorage.js
│   └── Store.js
│
├── App.jsx
└── main.jsx
```

## Demo Credentials

### Admin

```text
Email: admin@example.com
Password: 123
```

### Employee

```text
Email: ram@example.com
Password: 123
```

## Installation

Clone the repository:

```bash
git clone https://github.com/Gaurav-Rawat28437/Task-Management-System.git
```

Move into the project:

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

## Future Improvements

* Backend Integration
* JWT Authentication
* User Registration
* Employee Management
* Dark/Light Theme
* Task Comments
* Task Priority Levels
* Email Notifications
* Analytics Dashboard

## Author

**Gaurav Singh Rawat**

BCA Student | MERN Stack Developer

GitHub: https://github.com/Gaurav-Rawat28437

---

⭐ If you like this project, consider giving it a star on GitHub.
