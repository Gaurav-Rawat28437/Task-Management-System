import React from 'react'

import Login from "./Components/Auth/Login"
import { Routes,Route } from 'react-router-dom'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'

function App() {
  return (
    <div className='bg-black text-white p-0 m-0'>

    

    

    {/* <Login /> */}
        {/* <EmployeeDashboard/> */}
        <AdminDashboard/>

/
    
    </div>
  )
}

export default App
