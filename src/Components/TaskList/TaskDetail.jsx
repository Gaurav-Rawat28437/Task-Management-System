import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "../Dashboard/Other/Loader";
import Sidebar from "../Dashboard/Other/SideBar";

function TaskDetail() {
  const { employeeId, taskId } = useParams();

  const data = useSelector((store) => store.employeeTask.tasks);

  const loginUser = JSON.parse(sessionStorage.getItem("loginUser"));
  const [activePage, setActivePage] = useState("dashboard");

  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  const employee = data.find((item) => item.employeeId == employeeId);

  const task = employee?.taskDetail.find((item) => item.taskId == taskId);

  if (!task) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex">
        <Sidebar setActivePage={setActivePage} role={loginUser?.role} />

        <main className="flex-1 p-10">
          <h1 className="text-2xl font-bold">Task not found</h1>
          <button
            onClick={() => navigate(-1)}
            className="mt-4 bg-slate-800 hover:bg-slate-700 border border-slate-600 px-5 py-2 rounded-xl"
          >
            ← Back
          </button>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white flex">
      <Sidebar setActivePage={setActivePage} role={loginUser?.role} />

      <main className="flex-1 p-4 md:p-10">
        <div className="max-w-3xl mx-auto">
          <div className="mb-6">
            <button
              onClick={() => navigate(-1)}
              className="bg-slate-800 hover:bg-slate-700 border border-slate-600 px-5 py-2 rounded-xl transition"
            >
              ← Back
            </button>
          </div>

          <div className="bg-slate-900 border border-slate-700 p-8 rounded-3xl shadow-xl">
            <h1 className="text-3xl font-bold text-emerald-400 mb-6">
              Task Details
            </h1>

            <h2 className="text-2xl font-bold">{task.taskTitle}</h2>

            <p className="mt-4 text-slate-300 leading-relaxed">
              {task.taskDescription}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <p className="bg-slate-800 p-4 rounded-xl">
                Assigned: {task.taskAssignDate}
              </p>

              <p className="bg-slate-800 p-4 rounded-xl">
                Due Date: {task.taskDueDate}
              </p>

              <p className="bg-slate-800 p-4 rounded-xl">
                Category: {task.category}
              </p>

              <p className="bg-slate-800 p-4 rounded-xl">
                <span
                  className={`px-4 py-2 rounded-xl font-semibold
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
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default TaskDetail