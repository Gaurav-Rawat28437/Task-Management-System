import React from "react";
import { useNavigate } from "react-router-dom";

function TaskListNumbers({ id, tasks }) {
  const navigate = useNavigate()

  const newTasks = tasks.filter(
    (task) => task.status === "New"
  ).length

  const acceptedTasks = tasks.filter(
    (task) => task.status === "Accepted"
  ).length

  const completedTasks = tasks.filter(
    (task) => task.status === "Completed"
  ).length

  const failedTasks = tasks.filter(
    (task) => task.status === "Failed"
  ).length

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
      <div 
        onClick={() => navigate(`/employee/${id}/New`)} 
        className="rounded-2xl p-6 bg-cyan-500 cursor-pointer hover:scale-105 transition shadow-lg">
        <h2 className="text-3xl font-bold">{newTasks}</h2>
        <h3 className="text-xl mt-1">New Tasks</h3>
      </div>

      <div 
        onClick={() => navigate(`/employee/${id}/Completed`)} 
        className="rounded-2xl p-6 bg-green-500 cursor-pointer hover:scale-105 transition shadow-lg">
        <h2 className="text-3xl font-bold">{completedTasks}</h2>
        <h3 className="text-xl mt-1">Completed</h3>
      </div>

      <div 
        onClick={() => navigate(`/employee/${id}/Accepted`)} 
        className="rounded-2xl p-6 bg-yellow-500 cursor-pointer hover:scale-105 transition shadow-lg">
        <h2 className="text-3xl font-bold">{acceptedTasks}</h2>
        <h3 className="text-xl mt-1">Accepted</h3>
      </div>

      <div 
        onClick={() => navigate(`/employee/${id}/Failed`)} 
        className="rounded-2xl p-6 bg-red-500 cursor-pointer hover:scale-105 transition shadow-lg">
        <h2 className="text-3xl font-bold">{failedTasks}</h2>
        <h3 className="text-xl mt-1">Failed</h3>
      </div>
    </div>
  )
}

export default TaskListNumbers;