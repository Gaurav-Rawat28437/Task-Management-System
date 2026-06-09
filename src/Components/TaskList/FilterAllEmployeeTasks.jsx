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

  const employees = useSelector(
    (store) => store.employeeTask.tasks
  );

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
    task.employeeName
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const title =
    status === "New"
      ? "Pending Tasks"
      : status === "Accepted"
      ? "In Progress Tasks"
      : `${status} Tasks`;

  return (
    <div className="h-screen bg-slate-950 text-white flex overflow-hidden">
      <Sidebar
        setActivePage={setActivePage}
        role={loginUser?.role}
      />

      <main
        onClick={() => setOpen(false)}
        className="flex-1 h-screen overflow-y-auto p-4 md:p-8"
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-emerald-400">
              {title}
            </h1>
          </div>
          
          <button
            onClick={() => navigate("/admin")}
            className="bg-slate-800 hover:bg-slate-700 border border-slate-600 px-5 py-2 rounded-xl transition w-fit"
          >
            ← Back
          </button>
        </div>

        <label className="text-slate-400 mt-3">
             Filter tasks by employee name.
        </label>

        <div className="max-w-md mb-8 mt-2">
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

        {finalTasks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {finalTasks.map((task) => (
              <div
                key={task.taskId}
                onClick={() =>
                  navigate(`/task/${task.employeeId}/${task.taskId}`)
                }
                className="bg-slate-900 border border-slate-700 p-5 rounded-2xl cursor-pointer hover:border-emerald-500 hover:-translate-y-1 transition shadow-lg"
              >
                <h2 className="text-xl font-bold">
                  {task.taskTitle}
                </h2>

                <p className="text-slate-400 mt-2">
                  Employee: {task.employeeName}
                </p>

                <p className="text-slate-400 mt-2">
                  Category: {task.category}
                </p>

                <p className="text-slate-400 mt-2">
                  Due Date: {task.taskDueDate}
                </p>

                <span
                  className={`inline-block mt-4 px-3 py-1 rounded-full text-sm font-medium
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
                  {task.status === "New"
                    ? "Pending"
                    : task.status === "Accepted"
                    ? "In Progress"
                    : task.status}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-slate-900 border border-slate-700 rounded-3xl p-10 text-center shadow-xl">
            <h2 className="text-2xl font-bold">
              No Tasks Found
            </h2>
            <p className="text-slate-400 mt-2">
              No tasks match this employee name.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}

export default FilterAllEmployeeTasks