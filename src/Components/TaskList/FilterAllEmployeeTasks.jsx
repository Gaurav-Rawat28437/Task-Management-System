import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Sidebar from "../Dashboard/Other/SideBar";
import SearchAccordionInput from "./SearchAccordionInput";

function FilterAllEmployeeTasks() {
  const { status } = useParams();
  const navigate = useNavigate();

  const loginUser = JSON.parse(sessionStorage.getItem("loginUser"));

  const [activePage, setActivePage] = useState("dashboard");
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);

  const employees = useSelector((store) => store.employeeTask.tasks);

  const allFilteredTasks = employees.flatMap((employee) =>
    employee.taskDetail
      .filter((task) => task.status === status)
      .map((task) => ({
        ...task,
        employeeName: employee.employeeName,
        employeeId: employee.employeeId,
      }))
  );

  const employeeList = employees.map((employee) => ({
    id: employee.employeeId,
    name: employee.employeeName,
  }));

  const filteredEmployees = employeeList.filter((emp) =>
    emp.name.toLowerCase().includes(search.toLowerCase())
  );

  const finalTasks = allFilteredTasks.filter((task) =>
    task.employeeName.toLowerCase().includes(search.toLowerCase())
  );

  const title =
    status === "New"
      ? "Pending Tasks"
      : status === "Accepted"
      ? "In Progress Tasks"
      : `${status} Tasks`;

  const statusLabel =
    status === "New"
      ? "Pending"
      : status === "Accepted"
      ? "In Progress"
      : status;

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

  const getPriorityDot = (status) => {
    if (status === "Completed") return "bg-green-500";
    if (status === "Accepted") return "bg-yellow-500";
    if (status === "Failed") return "bg-red-500";
    return "bg-blue-500";
  };

  return (
    <div className="h-screen bg-[#F5F6FA] text-slate-800 flex overflow-hidden">
      <Sidebar setActivePage={setActivePage} role={loginUser?.role} />

      <main
        onClick={() => setOpen(false)}
        className="flex-1 h-screen overflow-y-auto p-4 pt-20 md:p-8"
      >
        {/* Top Section */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm mb-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="w-10 h-10 rounded-xl bg-[#0D0B61] text-white flex items-center justify-center font-bold">
                  {finalTasks.length}
                </span>

                <div>
                  <h1 className="text-3xl font-bold text-slate-900">
                    {title}
                  </h1>
                  <p className="text-slate-500 mt-1">
                    View and filter tasks based on employee name.
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={() => navigate("/admin")}
              className="w-fit bg-[#0D0B61] hover:bg-[#294669] text-white px-5 py-3 rounded-xl transition font-semibold shadow-sm"
            >
              ← Back to Dashboard
            </button>
          </div>
        </div>

        {/* Filter Section */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm mb-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div className="w-full max-w-md">
              <label className="block text-sm font-semibold text-slate-600 mb-2">
                Filter by Employee
              </label>

              <SearchAccordionInput
                data={{
                  search,
                  open,
                  setOpen,
                  setSearch,
                  filteredEmployees,
                }}
              />
            </div>

            <div className="bg-[#F5F6FA] border border-slate-200 rounded-xl px-5 py-3">
              <p className="text-sm text-slate-500">Showing</p>
              <h3 className="text-xl font-bold text-[#0D0B61]">
                {finalTasks.length} {finalTasks.length === 1 ? "Task" : "Tasks"}
              </h3>
            </div>
          </div>
        </div>

        {/* Tasks Grid */}
        {finalTasks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {finalTasks.map((task) => (
              <div
                key={task.taskId}
                onClick={() =>
                  navigate(`/task/${task.employeeId}/${task.taskId}`)
                }
                className="bg-white border border-slate-200 p-5 rounded-2xl cursor-pointer hover:border-[#0D0B61]/30 hover:-translate-y-1 hover:shadow-md transition"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-start gap-3">
                    <span
                      className={`w-3 h-3 rounded-full mt-2 ${getPriorityDot(
                        task.status
                      )}`}
                    ></span>

                    <div>
                      <h2 className="text-lg font-bold text-slate-900 line-clamp-1">
                        {task.taskTitle}
                      </h2>

                      <p className="text-sm text-slate-500 mt-1">
                        {task.category}
                      </p>
                    </div>
                  </div>

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold border ${getStatusStyle(
                      task.status
                    )}`}
                  >
                    {statusLabel}
                  </span>
                </div>

                <div className="space-y-3 mt-5">
                  <div className="flex items-center justify-between bg-[#F5F6FA] rounded-xl px-4 py-3">
                    <p className="text-sm text-slate-500">Employee</p>
                    <p className="text-sm font-bold text-slate-800">
                      {task.employeeName}
                    </p>
                  </div>

                  <div className="flex items-center justify-between bg-[#F5F6FA] rounded-xl px-4 py-3">
                    <p className="text-sm text-slate-500">Due Date</p>
                    <p className="text-sm font-bold text-slate-800">
                      {task.taskDueDate}
                    </p>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100">
                  <p className="text-sm text-slate-500 line-clamp-2">
                    {task.taskDescription}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center shadow-sm">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-[#F5F6FA] flex items-center justify-center text-3xl mb-5">
              🔍
            </div>

            <h2 className="text-2xl font-bold text-slate-900">
              No Tasks Found
            </h2>

            <p className="text-slate-500 mt-2">
              No {statusLabel.toLowerCase()} tasks match this employee name.
            </p>

            <button
              onClick={() => setSearch("")}
              className="mt-6 bg-[#0D0B61] hover:bg-[#294669] text-white px-5 py-3 rounded-xl transition font-semibold"
            >
              Clear Search
            </button>
          </div>
        )}
      </main>
    </div>
  );
}

export default FilterAllEmployeeTasks;