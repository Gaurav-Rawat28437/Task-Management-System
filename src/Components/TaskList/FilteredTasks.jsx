import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import TaskList from "./TaskList";
import Sidebar from "../Dashboard/Other/SideBar";

function FilteredTasks() {
  const { id, status } = useParams();
  const navigate = useNavigate();

  const loginUser = JSON.parse(sessionStorage.getItem("loginUser"));
  const [activePage, setActivePage] = useState("dashboard");

  const data = useSelector((store) => store.employeeTask.tasks);

  const employee = data.find((item) => item.employeeId == id);

  const filteredTasks = employee?.taskDetail.filter(
    (task) => task.status === status
  );

  return (
    <div className="min-h-screen bg-slate-950 text-white flex">
      <Sidebar setActivePage={setActivePage} role={loginUser?.role} />

      <main className="flex-1 p-4 md:p-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-emerald-400">
            {status} Tasks
          </h1>

          <button
            onClick={() => navigate(`/employee/${id}`)}
            className="bg-slate-800 hover:bg-slate-700 border border-slate-600 px-5 py-2 rounded-xl transition"
          >
            Back
          </button>
        </div>

        {filteredTasks?.length > 0 ? (
          <TaskList employeeId={id} tasks={filteredTasks} />
        ) : (
          <div className="bg-slate-900 border border-slate-700 rounded-3xl p-10 text-center shadow-xl">
            <h2 className="text-2xl font-bold">
              No {status} Tasks Found
            </h2>
            <p className="text-slate-400 mt-2">
              Tasks with this status will appear here.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}

export default FilteredTasks