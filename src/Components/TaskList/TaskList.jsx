import React from "react";

function TaskList({ tasks }) {
  return (
    <div className="flex gap-5 overflow-x-auto mt-10 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {tasks.map((task, index) => (
        <div
          key={index}
          className="min-w-[320px] bg-zinc-800 p-5 rounded-xl text-white"
        >
          <h3 className="text-2xl font-bold">
            {task.taskName}
          </h3>

          <p className="text-zinc-400 mt-3">
            {task.description}
          </p>

          <div className="mt-4">
            <span
              className={`px-3 py-1 rounded-full text-sm
                ${
                  task.status === "Completed"
                    ? "bg-green-500/20 text-green-400"
                    : task.status === "Accepted"
                    ? "bg-yellow-500/20 text-yellow-400"
                    : task.status === "Failed"
                    ? "bg-red-500/20 text-red-400"
                    : "bg-blue-500/20 text-blue-400"
                }`}
            >
              {task.status}
            </span>
          </div>

          <div className="flex gap-3 mt-5">
            <button className="bg-blue-500 px-4 py-2 rounded-lg">
              Accept
            </button>

            <button className="bg-green-500 px-4 py-2 rounded-lg">
              Complete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskList;