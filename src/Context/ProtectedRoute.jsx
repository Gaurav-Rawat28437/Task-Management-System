import React from 'react'
import Login from '../Components/Auth/Login'
import { Navigate } from 'react-router-dom'

function ProtectedRoute({children,role}) {

  const user=JSON.parse(sessionStorage.getItem("loginUser"))

  if(!user)
  {
    return <Navigate to={"/login"}/>
  }
  else if(!role.includes(user.role))
  {
    return <Navigate to={"/login"}/>
  }
  return children
}

export default ProtectedRoute
