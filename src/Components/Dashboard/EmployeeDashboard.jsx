import React, { useEffect, useState } from "react";
import Header from "./Other/Header";
import TaskListNumbers from "./Other/TaskListNumber";
import TaskList from "../TaskList/TaskList";
import { useSelector } from "react-redux";
import Loader from "./Other/Loader";
import Sidebar from "./Other/SideBar";
import Profile from "./Other/Profile";

function EmployeeDashboard() {
  const loginUser = JSON.parse(sessionStorage.getItem("loginUser"));

  const [loading, setLoading] = useState(true);
  const [activePage, setActivePage] = useState("dashboard");

  const data = useSelector((store) => store.employeeTask.tasks);

  const employee = data.find((item) => item.employeeId == loginUser?.id);

  const tasks = employee?.taskDetail || [];

  const pending = tasks.filter((task) => task.status === "New").length;
  const active = tasks.filter((task) => task.status === "Accepted").length;
  const completed = tasks.filter((task) => task.status === "Completed").length;
  const failed = tasks.filter((task) => task.status === "Failed").length;

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="h-screen bg-[#F5F6FA] text-slate-800 flex overflow-hidden">
      <Sidebar setActivePage={setActivePage} role={loginUser?.role} />

      <main className="flex-1 h-screen overflow-y-auto p-4 pt-20 md:p-8">
        <Header name={loginUser?.name} role={loginUser?.role} />

        {activePage === "dashboard" && (
          <>
            {employee ? (
              <>
                {/* Overview Section */}
                <section className="mt-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-6">
                    <div>
                      <h2 className="text-2xl font-bold text-slate-900">
                        My Task Overview
                      </h2>

                      <p className="text-slate-500 mt-1">
                        Track your assigned tasks and daily work progress.
                      </p>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-2xl px-6 py-4 shadow-sm">
                      <p className="text-sm text-slate-500">
                        Total Assigned Tasks
                      </p>

                      <h3 className="text-3xl font-extrabold text-[#0D0B61]">
                        {tasks.length}
                      </h3>
                    </div>
                  </div>

                  <TaskListNumbers id={employee.employeeId} tasks={tasks} />
                </section>

                {/* Task List Section */}
                <section className="mt-8 bg-white border border-slate-200 rounded-2xl shadow-sm p-5 md:p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
                    <div>
                      <h2 className="text-xl font-bold text-slate-900">
                        Assigned Tasks
                      </h2>

                      <p className="text-sm text-slate-500 mt-1">
                        Open a task to view details or update task status.
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold">
                        Pending {pending}
                      </span>

                      <span className="px-3 py-1 rounded-full bg-yellow-50 text-yellow-700 text-xs font-bold">
                        Active {active}
                      </span>

                      <span className="px-3 py-1 rounded-full bg-green-50 text-green-600 text-xs font-bold">
                        Completed {completed}
                      </span>

                      <span className="px-3 py-1 rounded-full bg-red-50 text-red-600 text-xs font-bold">
                        Failed {failed}
                      </span>
                    </div>
                  </div>

                  <TaskList employeeId={employee.employeeId} tasks={tasks} />
                </section>
              </>
            ) : (
              <div className="mt-10 bg-white border border-slate-200 p-10 rounded-2xl text-center shadow-sm">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-[#F5F6FA] flex items-center justify-center text-3xl mb-5">
                  📋
                </div>

                <h2 className="text-2xl font-bold text-slate-900">
                  No Tasks Assigned Yet
                </h2>

                <p className="text-slate-500 mt-2">
                  Your assigned tasks will appear here once admin creates them.
                </p>
              </div>
            )}
          </>
        )}

        {activePage === "profile" && <Profile loginUser={loginUser} />}
      </main>
    </div>
  );
}

export default EmployeeDashboard;