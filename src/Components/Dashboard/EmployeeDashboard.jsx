import React, { useEffect, useState } from "react";
import Header from "./Other/Header";
import TaskListNumbers from "./Other/TaskListNumber";
import TaskList from "../TaskList/TaskList";
import { useSelector } from "react-redux";
import Loader from "./Other/Loader";

function EmployeeDashboard() {


  const loginUser = JSON.parse(sessionStorage.getItem("loginUser"))


  const data = useSelector(store => store.employeeTask.tasks)
  const employee = data.find(item => item.employeeId == loginUser.id)

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-slate-950 p-4 md:p-8">
      <Header name={loginUser.name} />

      {employee ? (
        <>
          <TaskListNumbers id={employee.employeeId} tasks={employee.taskDetail} />
          <TaskList employeeId={employee.employeeId} tasks={employee.taskDetail} />
        </>
      ) : (
        <div className="mt-10 bg-slate-900 border border-slate-700 p-8 rounded-2xl text-center">
          <h2 className="text-2xl font-bold">No Tasks Assigned Yet</h2>
          <p className="text-slate-400 mt-2">
            Your assigned tasks will appear here.
          </p>
        </div>
      )}
    </div>
  )
}

export default EmployeeDashboard;