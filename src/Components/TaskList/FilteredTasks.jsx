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

  const filteredTasks =
    employee?.taskDetail.filter((task) => task.status === status) || [];

  const statusLabel =
    status === "New"
      ? "Pending"
      : status === "Accepted"
      ? "In Progress"
      : status;

  const getStatusStyle = () => {
    if (status === "Completed") {
      return {
        bg: "bg-green-50",
        text: "text-green-600",
        dot: "bg-green-500",
        border: "border-green-100",
      };
    }

    if (status === "Accepted") {
      return {
        bg: "bg-yellow-50",
        text: "text-yellow-700",
        dot: "bg-[#E4D329]",
        border: "border-yellow-100",
      };
    }

    if (status === "Failed") {
      return {
        bg: "bg-red-50",
        text: "text-red-600",
        dot: "bg-red-500",
        border: "border-red-100",
      };
    }

    return {
      bg: "bg-blue-50",
      text: "text-[#294669]",
      dot: "bg-[#294669]",
      border: "border-blue-100",
    };
  };

  const statusStyle = getStatusStyle();

  return (
    <div className="h-screen bg-[#F5F6FA] text-slate-800 flex overflow-hidden">
      <Sidebar setActivePage={setActivePage} role={loginUser?.role} />

      <main className="flex-1 h-screen overflow-y-auto p-4 md:p-8">
        {/* Header Section */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div className="flex items-start gap-4">
              <div
                className={`w-12 h-12 rounded-xl ${statusStyle.bg} flex items-center justify-center border ${statusStyle.border}`}
              >
                <span className={`w-3 h-3 rounded-full ${statusStyle.dot}`}></span>
              </div>

              <div>
                <h1 className="text-3xl font-bold text-slate-900">
                  {statusLabel} Tasks
                </h1>

                <p className="text-slate-500 mt-1">
                  View all your tasks with this status.
                </p>
              </div>
            </div>

            <button
              onClick={() => navigate(`/employee/${id}`)}
              className="w-fit bg-[#0D0B61] hover:bg-[#294669] text-white px-5 py-3 rounded-xl transition font-semibold shadow-sm"
            >
              ← Back to Dashboard
            </button>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <span
              className={`px-4 py-2 rounded-full text-sm font-bold border ${statusStyle.bg} ${statusStyle.text} ${statusStyle.border}`}
            >
              {filteredTasks.length}{" "}
              {filteredTasks.length === 1 ? "Task" : "Tasks"}
            </span>

            <span className="px-4 py-2 rounded-full text-sm font-semibold bg-[#F5F6FA] text-slate-500 border border-slate-200">
              Employee: {employee?.employeeName || loginUser?.name}
            </span>
          </div>
        </div>

        {/* Task List */}
        {filteredTasks.length > 0 ? (
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-5 md:p-6">
            <div className="mb-5">
              <h2 className="text-xl font-bold text-slate-900">
                Task List
              </h2>

              <p className="text-sm text-slate-500 mt-1">
                Click on any task to view full details.
              </p>
            </div>

            <TaskList employeeId={id} tasks={filteredTasks} />
          </div>
        ) : (
          <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center shadow-sm">
            <div
              className={`w-16 h-16 mx-auto rounded-2xl ${statusStyle.bg} flex items-center justify-center mb-5 border ${statusStyle.border}`}
            >
              <span className={`w-4 h-4 rounded-full ${statusStyle.dot}`}></span>
            </div>

            <h2 className="text-2xl font-bold text-slate-900">
              No {statusLabel} Tasks Found
            </h2>

            <p className="text-slate-500 mt-2">
              Tasks with this status will appear here.
            </p>

            <button
              onClick={() => navigate(`/employee/${id}`)}
              className="mt-6 bg-[#0D0B61] hover:bg-[#294669] text-white px-5 py-3 rounded-xl transition font-semibold"
            >
              Go Back
            </button>
          </div>
        )}
      </main>
    </div>
  );
}

export default FilteredTasks;