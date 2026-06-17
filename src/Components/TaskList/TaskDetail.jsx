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

  const getStatusLabel = (status) => {
    if (status === "New") return "Pending";
    if (status === "Accepted") return "In Progress";
    return status;
  };

  const getStatusStyle = (status) => {
    if (status === "Completed") {
      return "bg-green-50 text-green-600 border-green-100";
    }

    if (status === "Accepted") {
      return "bg-yellow-50 text-yellow-700 border-yellow-100";
    }

    if (status === "Failed") {
      return "bg-red-50 text-red-600 border-red-100";
    }

    return "bg-blue-50 text-blue-600 border-blue-100";
  };

  const getStatusDot = (status) => {
    if (status === "Completed") return "bg-green-500";
    if (status === "Accepted") return "bg-yellow-500";
    if (status === "Failed") return "bg-red-500";
    return "bg-blue-500";
  };

  if (!task) {
    return (
      <div className="min-h-screen bg-[#F5F6FA] text-slate-800 flex">
        <Sidebar setActivePage={setActivePage} role={loginUser?.role} />

        <main className="flex-1 p-4 md:p-10">
          <div className="max-w-2xl mx-auto bg-white border border-slate-200 rounded-2xl p-10 text-center shadow-sm">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-red-50 text-red-500 flex items-center justify-center text-3xl mb-5">
              !
            </div>

            <h1 className="text-2xl font-bold text-slate-900">
              Task Not Found
            </h1>

            <p className="text-slate-500 mt-2">
              This task may have been deleted or does not exist.
            </p>

            <button
              onClick={() => navigate(-1)}
              className="mt-6 bg-[#0D0B61] hover:bg-[#294669] text-white px-5 py-3 rounded-xl font-semibold transition"
            >
              ← Back
            </button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F6FA] text-slate-800 flex">
      <Sidebar setActivePage={setActivePage} role={loginUser?.role} />

      <main className="flex-1 h-screen overflow-y-auto p-4 md:p-10">
        <div className="max-w-4xl mx-auto">
          {/* Top Bar */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">
                Task Details
              </h1>
              <p className="text-slate-500 mt-1">
                View task information and current status.
              </p>
            </div>

            <button
              onClick={() => navigate(-1)}
              className="w-fit bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 px-5 py-3 rounded-xl transition font-semibold shadow-sm"
            >
              ← Back
            </button>
          </div>

          {/* Main Card */}
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
            {/* Header */}
            <div className="p-6 md:p-8 border-b border-slate-100">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5">
                <div className="flex gap-4">
                  <span
                    className={`w-3 h-3 rounded-full mt-3 ${getStatusDot(
                      task.status
                    )}`}
                  ></span>

                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                      {task.taskTitle}
                    </h2>

                    <p className="text-slate-500 mt-2">
                      Assigned to{" "}
                      <span className="font-semibold text-[#0D0B61]">
                        {employee?.employeeName}
                      </span>
                    </p>
                  </div>
                </div>

                <span
                  className={`w-fit px-4 py-2 rounded-full text-sm font-bold border ${getStatusStyle(
                    task.status
                  )}`}
                >
                  {getStatusLabel(task.status)}
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="p-6 md:p-8">
              <div className="mb-8">
                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-3">
                  Description
                </h3>

                <p className="text-slate-700 leading-relaxed bg-[#F5F6FA] border border-slate-200 rounded-2xl p-5">
                  {task.taskDescription}
                </p>
              </div>

              {/* Info Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="bg-[#F5F6FA] border border-slate-200 rounded-2xl p-5">
                  <p className="text-sm text-slate-500 mb-2">Assigned Date</p>
                  <h4 className="text-lg font-bold text-slate-900">
                    {task.taskAssignDate}
                  </h4>
                </div>

                <div className="bg-[#F5F6FA] border border-slate-200 rounded-2xl p-5">
                  <p className="text-sm text-slate-500 mb-2">Due Date</p>
                  <h4 className="text-lg font-bold text-slate-900">
                    {task.taskDueDate}
                  </h4>
                </div>

                <div className="bg-[#F5F6FA] border border-slate-200 rounded-2xl p-5">
                  <p className="text-sm text-slate-500 mb-2">Category</p>
                  <h4 className="text-lg font-bold text-slate-900">
                    {task.category}
                  </h4>
                </div>

                <div className="bg-[#F5F6FA] border border-slate-200 rounded-2xl p-5">
                  <p className="text-sm text-slate-500 mb-2">Current Status</p>

                  <span
                    className={`inline-block px-4 py-2 rounded-full text-sm font-bold border ${getStatusStyle(
                      task.status
                    )}`}
                  >
                    {getStatusLabel(task.status)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default TaskDetail;