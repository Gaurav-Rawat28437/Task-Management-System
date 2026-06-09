import React from 'react'

import Login from "./Components/Auth/Login"
import { Routes, Route } from 'react-router-dom'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { Toaster } from 'react-hot-toast'
import ProtectedRoute from './Context/ProtectedRoute'
import FilteredTasks from './Components/TaskList/FilteredTasks'
import TaskDetail from './Components/TaskList/TaskDetail'
import FilterAllEmployeeTasks from './Components/TaskList/FilterAllEmployeeTasks'



function App() {
  return (
    <div className='bg-black text-white p-0 m-0'>
      <Toaster />


      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />




        <Route path="/admin" element={<ProtectedRoute role={["Admin"]}><AdminDashboard /></ProtectedRoute>} />


        <Route path="/employee/:id" element={<ProtectedRoute role={["Employee"]}><EmployeeDashboard /></ProtectedRoute>} />
        <Route path="/admin/status/:status" element={<ProtectedRoute role={["Admin"]}><FilterAllEmployeeTasks /></ProtectedRoute>}/>
        <Route path="/employee/:id/:status" element={<ProtectedRoute role={["Employee"]}><FilteredTasks /></ProtectedRoute>} />
        <Route path="/task/:employeeId/:taskId" element={<ProtectedRoute role={["Employee", "Admin"]}><TaskDetail /></ProtectedRoute>} />


        <Route path="/*" element={<Login />} />
      </Routes>

    </div>
  )
}

export default App
