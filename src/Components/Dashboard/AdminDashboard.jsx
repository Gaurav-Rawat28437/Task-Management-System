import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Header from "./Other/Header";
import CreateTask from "../TaskList/CreateTask";
import AllTask from "../TaskList/AllTask";
import Loader from "./Other/Loader";
import Sidebar from "./Other/SideBar";
import Profile from "./Other/Profile";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const loginUser = JSON.parse(sessionStorage.getItem("loginUser"));
  const [activePage, setActivePage] = useState("dashboard");
  const [loading, setLoading] = useState(true);


  const navigate = useNavigate();

 
  const allEmployeesTasks = useSelector((store) => store.employeeTask.tasks);

  const allTasks = allEmployeesTasks.flatMap(
    (employee) => employee.taskDetail
  );

  const pending = allTasks.filter((task) => task.status === "New").length;
  const inProgress = allTasks.filter((task) => task.status === "Accepted").length;
  const completed = allTasks.filter((task) => task.status === "Completed").length;
  const failed = allTasks.filter((task) => task.status === "Failed").length;

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  const cards = [
    {
      title: "Pending Tasks",
      count: pending,
      status: "New",
      bg: "bg-blue-50",
      text: "text-blue-600",
      dot: "bg-blue-500",
      desc: "Tasks waiting to be accepted",
    },
    {
      title: "In Progress",
      count: inProgress,
      status: "Accepted",
      bg: "bg-yellow-50",
      text: "text-yellow-700",
      dot: "bg-yellow-500",
      desc: "Tasks currently being worked on",
    },
    {
      title: "Completed",
      count: completed,
      status: "Completed",
      bg: "bg-green-50",
      text: "text-green-600",
      dot: "bg-green-500",
      desc: "Tasks successfully completed",
    },
    {
      title: "Failed",
      count: failed,
      status: "Failed",
      bg: "bg-red-50",
      text: "text-red-600",
      dot: "bg-red-500",
      desc: "Tasks that need review",
    },
  ];

  return (
    <div className="h-screen bg-[#F5F6FA] text-slate-800 flex overflow-hidden">
      <Sidebar role={loginUser?.role} setActivePage={setActivePage} />

      <main className="flex-1 h-screen overflow-y-auto p-4 pt-20 md:p-8">
        <Header name={loginUser?.name} role={loginUser?.role} />

        {activePage === "dashboard" && (
          <>
            <div className="mt-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-5">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    Dashboard Overview
                  </h2>
                  <p className="text-slate-500 mt-1">
                    Track task status and employee progress in one place.
                  </p>
                </div>

                <button
                  onClick={() => setActivePage("createTask")}
                  className="bg-[#0D0B61] hover:bg-[#294669] text-white px-5 py-3 rounded-xl font-semibold transition w-fit"
                >
                  + Create Task
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                {cards.map((card) => (
                  <div
                    key={card.status}
                    onClick={() => navigate(`/admin/status/${card.status}`)}
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
            </div>

            <AllTask />
          </>
        )}

        {activePage === "createTask" && <CreateTask />}

        {activePage === "profile" && <Profile loginUser={loginUser} />}
      </main>
    </div>
  );
};

export default AdminDashboard;