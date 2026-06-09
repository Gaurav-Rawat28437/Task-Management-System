import React, { useEffect, useState } from "react"
import Header from "./Other/Header"
import TaskListNumbers from "./Other/TaskListNumber"
import TaskList from "../TaskList/TaskList"
import { useSelector } from "react-redux"
import Loader from "./Other/Loader"
import Sidebar from "./Other/SideBar"
import Profile from "./Other/Profile"

function EmployeeDashboard() {
  const loginUser = JSON.parse(sessionStorage.getItem("loginUser"))

  const [loading, setLoading] = useState(true)
  const [activePage, setActivePage] = useState("dashboard")

  const data = useSelector((store) => store.employeeTask.tasks)

  const employee = data.find(
    (item) => item.employeeId == loginUser?.id
  )

  const tasks = employee?.taskDetail || []

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Loader />
  }

  return (
    <div className="h-screen bg-slate-950 text-white flex overflow-hidden">
      <Sidebar setActivePage={setActivePage} role={loginUser?.role} />

      <main className="flex-1 h-screen overflow-y-auto p-4 md:p-8">
        <Header name={loginUser?.name} />

        {activePage === "dashboard" && (
          <>
            {employee ? (
              <>
                <TaskListNumbers
                  id={employee.employeeId}
                  tasks={tasks}
                />

                <TaskList
                  employeeId={employee.employeeId}
                  tasks={tasks}
                />
              </>
            ) : (
              <div className="mt-10 bg-slate-900 border border-slate-700 p-8 rounded-2xl text-center">
                <h2 className="text-2xl font-bold">
                  No Tasks Assigned Yet
                </h2>

                <p className="text-slate-400 mt-2">
                  Your assigned tasks will appear here.
                </p>
              </div>
            )}
          </>
        )}

        {activePage === "profile" && <Profile loginUser={loginUser} />}
      </main>
    </div>
  )
}

export default EmployeeDashboard