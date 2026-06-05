import React from "react";

function TaskListNumbers({ tasks }) {
  const newTasks = tasks.filter(
    (task) => task.status === "New"
  ).length;

  const acceptedTasks = tasks.filter(
    (task) => task.status === "Accepted"
  ).length;

  const completedTasks = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const failedTasks = tasks.filter(
    (task) => task.status === "Failed"
  ).length;

  return (
    <div className="flex mt-10 justify-between gap-5">
      <div className="rounded-2xl w-[25%] py-6 px-6 bg-cyan-500">
        <h2 className="text-3xl font-bold">{newTasks}</h2>
        <h3 className="text-xl mt-1">New Tasks</h3>
      </div>

      <div className="rounded-2xl w-[25%] py-6 px-6 bg-green-500">
        <h2 className="text-3xl font-bold">{completedTasks}</h2>
        <h3 className="text-xl mt-1">Completed</h3>
      </div>

      <div className="rounded-2xl w-[25%] py-6 px-6 bg-yellow-500">
        <h2 className="text-3xl font-bold">{acceptedTasks}</h2>
        <h3 className="text-xl mt-1">Accepted</h3>
      </div>

      <div className="rounded-2xl w-[25%] py-6 px-6 bg-red-500">
        <h2 className="text-3xl font-bold">{failedTasks}</h2>
        <h3 className="text-xl mt-1">Failed</h3>
      </div>
    </div>
  );
}

export default TaskListNumbers;