import React from "react";
import { useNavigate } from "react-router-dom";

function TaskListNumbers({ id, tasks }) {
  const navigate = useNavigate();

  const newTasks = tasks.filter((task) => task.status === "New").length;
  const acceptedTasks = tasks.filter((task) => task.status === "Accepted").length;
  const completedTasks = tasks.filter((task) => task.status === "Completed").length;
  const failedTasks = tasks.filter((task) => task.status === "Failed").length;

  const cards = [
    {
      title: "New Tasks",
      count: newTasks,
      status: "New",
      bg: "bg-blue-50",
      text: "text-blue-600",
      dot: "bg-blue-500",
      desc: "Tasks waiting for action",
    },
    {
      title: "In Progress",
      count: acceptedTasks,
      status: "Accepted",
      bg: "bg-yellow-50",
      text: "text-yellow-700",
      dot: "bg-yellow-500",
      desc: "Tasks currently active",
    },
    {
      title: "Completed",
      count: completedTasks,
      status: "Completed",
      bg: "bg-green-50",
      text: "text-green-600",
      dot: "bg-green-500",
      desc: "Tasks finished successfully",
    },
    {
      title: "Failed",
      count: failedTasks,
      status: "Failed",
      bg: "bg-red-50",
      text: "text-red-600",
      dot: "bg-red-500",
      desc: "Tasks marked as failed",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mt-8">
      {cards.map((card) => (
        <div
          key={card.status}
          onClick={() => navigate(`/employee/${id}/${card.status}`)}
          className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm cursor-pointer hover:-translate-y-1 hover:shadow-md transition"
        >
          <div className="flex items-center justify-between mb-5">
            <div
              className={`w-12 h-12 rounded-xl ${card.bg} flex items-center justify-center`}
            >
              <span className={`w-3 h-3 rounded-full ${card.dot}`}></span>
            </div>

            <span
              className={`px-3 py-1 rounded-full text-xs font-bold ${card.bg} ${card.text}`}
            >
              View
            </span>
          </div>

          <h2 className="text-3xl font-extrabold text-slate-900">
            {card.count}
          </h2>

          <p className="text-base font-bold text-slate-800 mt-2">
            {card.title}
          </p>

          <p className="text-sm text-slate-500 mt-1">
            {card.desc}
          </p>
        </div>
      ))}
    </div>
  );
}

export default TaskListNumbers;