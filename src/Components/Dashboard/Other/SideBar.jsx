import React, { useState } from "react";
import { removeLoginUser } from "../../../utils/SessionStorage";
import { useNavigate } from "react-router-dom";

function Sidebar({ setActivePage, role }) {
  const navigate = useNavigate();
  const user = JSON.parse(sessionStorage.getItem("loginUser"));
  const [open, setOpen] = useState(false);

  const goDashboard = () => {
    if (role === "Admin") {
      navigate("/admin");
    } else {
      navigate(`/employee/${user.id}`);
    }

    if (setActivePage) {
      setActivePage("dashboard");
    }

    setOpen(false);
  };

  const goProfile = () => {
    if (role === "Admin") {
      navigate("/admin");
    } else {
      navigate(`/employee/${user.id}`);
    }

    setTimeout(() => {
      if (setActivePage) {
        setActivePage("profile");
      }
    }, 0);

    setOpen(false);
  };

  const goCreateTask = () => {
    navigate("/admin");

    setTimeout(() => {
      if (setActivePage) {
        setActivePage("createTask");
      }
    }, 0);

    setOpen(false);
  };

  const logoutHandler = () => {
    removeLoginUser("loginUser");
    navigate("/login");
    setOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50 bg-[#0D0B61] text-white w-11 h-11 rounded-xl shadow-lg"
      >
        ☰
      </button>

      {/* Mobile Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="md:hidden fixed inset-0 bg-black/40 z-40"
        ></div>
      )}

      <aside
        className={` group
          fixed md:static top-0 left-0 z-50
          h-screen bg-white border-r border-slate-200 p-4
          flex flex-col justify-between
          transition-all duration-300 overflow-hidden
          w-64 md:w-20 md:hover:w-64
          ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        <div>
          {/* Logo */}
          <div className="flex items-center gap-3 mb-10">
            <div className="w-11 h-11 rounded-xl bg-[#0D0B61] text-white flex items-center justify-center font-bold shrink-0">
              T
            </div>

            <h1 className="text-2xl font-extrabold text-[#0D0B61] md:opacity-0 md:group-hover:opacity-100 opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Task<span className="text-[#478B8D]">Flow</span>
            </h1>
          </div>

          {/* User */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-11 h-11 rounded-full bg-[#0D0B61] text-white flex items-center justify-center font-bold shrink-0">
              {user?.name?.charAt(0)}
            </div>

            <div className="md:opacity-0 md:group-hover:opacity-100 opacity-100 transition-opacity duration-300 whitespace-nowrap">
              <h2 className="text-sm font-bold text-slate-800">
                {user?.name}
              </h2>
              <p className="text-xs text-slate-400">{role}</p>
            </div>
          </div>

          {/* Menu */}
          <nav className="flex flex-col gap-2">
            <button
              onClick={goDashboard}
              className="flex items-center gap-4 px-3 py-3 rounded-lg bg-slate-100 text-[#0D0B61] hover:bg-slate-200 transition font-semibold"
            >
              <span className="text-xl shrink-0">📊</span>
              <span className="md:opacity-0 md:group-hover:opacity-100 opacity-100 transition-opacity duration-300 whitespace-nowrap">
                Dashboard
              </span>
            </button>

            {role === "Admin" && (
              <button
                onClick={goCreateTask}
                className="flex items-center gap-4 px-3 py-3 rounded-lg text-slate-500 hover:bg-slate-100 hover:text-[#0D0B61] transition font-semibold"
              >
                <span className="text-xl shrink-0">➕</span>
                <span className="md:opacity-0 md:group-hover:opacity-100 opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  Create Task
                </span>
              </button>
            )}

            <button
              onClick={goProfile}
              className="flex items-center gap-4 px-3 py-3 rounded-lg text-slate-500 hover:bg-slate-100 hover:text-[#0D0B61] transition font-semibold"
            >
              <span className="text-xl shrink-0">👤</span>
              <span className="md:opacity-0 md:group-hover:opacity-100 opacity-100 transition-opacity duration-300 whitespace-nowrap">
                Profile
              </span>
            </button>
          </nav>
        </div>

        <button
          onClick={logoutHandler}
          className="flex items-center gap-4 px-3 py-3 rounded-lg bg-red-50 text-red-500 hover:bg-red-100 transition font-semibold"
        >
          <span className="text-xl shrink-0">🚪</span>
          <span className="md:opacity-0 md:group-hover:opacity-100 opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Logout
          </span>
        </button>
      </aside>
    </>
  );
}

export default Sidebar;