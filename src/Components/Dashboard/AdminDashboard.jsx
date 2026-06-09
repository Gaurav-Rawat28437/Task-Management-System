import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import Header from "./Other/Header"
import CreateTask from "../TaskList/CreateTask"
import AllTask from "../TaskList/AllTask"
import Loader from "./Other/Loader"
import Sidebar from "./Other/SideBar"
import Profile from "./Other/Profile"
import { useNavigate } from "react-router-dom"

const AdminDashboard = () => {
  const loginUser = JSON.parse(sessionStorage.getItem("loginUser"))

  const [loading, setLoading] = useState(true)
  const [activePage, setActivePage] = useState("dashboard")
 
  const navigate=useNavigate()

  const allEmployeesTasks = useSelector(
    (store) => store.employeeTask.tasks
  )

  const allTasks = allEmployeesTasks.flatMap(
    (employee) => employee.taskDetail
  )

  const pending = allTasks.filter(
    (task) => task.status === "New"
  ).length

  const inProgress = allTasks.filter(
    (task) => task.status === "Accepted"
  ).length

  const completed = allTasks.filter(
    (task) => task.status === "Completed"
  ).length

  const failed = allTasks.filter(
    (task) => task.status === "Failed"
  ).length

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Loader />
  }

  return (
    <div className="h-screen bg-slate-950 text-white flex overflow-hidden">
      <Sidebar role={loginUser.role} setActivePage={setActivePage} />

      <main className="flex-1 h-screen overflow-y-auto p-4 md:p-8">
        <Header name={loginUser.name} role={loginUser.role} />

        {activePage === "dashboard" && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
              <div
                onClick={() => navigate("/admin/status/New")}
                className="bg-blue-500 p-6 rounded-2xl shadow-lg">
                <h2 className="text-3xl font-bold">{pending}</h2>
                <p className="text-lg mt-1">Pending Tasks</p>
              </div>

              <div 
                onClick={() => navigate("/admin/status/Accepted")}
                className="bg-yellow-500 p-6 rounded-2xl shadow-lg">
                <h2 className="text-3xl font-bold">{inProgress}</h2>
                <p className="text-lg mt-1">In Progress</p>
              </div>

              <div 
                onClick={() => navigate("/admin/status/Completed")}
                className="bg-green-500 p-6 rounded-2xl shadow-lg">
                <h2 className="text-3xl font-bold">{completed}</h2>
                <p className="text-lg mt-1">Completed</p>
              </div>

              <div 
                onClick={() => navigate("/admin/status/Failed")}
                className="bg-red-500 p-6 rounded-2xl shadow-lg">
                <h2 className="text-3xl font-bold">{failed}</h2>
                <p className="text-lg mt-1">Failed</p>
              </div>
            </div>

            <AllTask />
          </>
        )}

        {activePage === "createTask" && <CreateTask />}

        {activePage === "profile" && <Profile loginUser={loginUser} />}
      </main>
    </div>
  )
}

export default AdminDashboard