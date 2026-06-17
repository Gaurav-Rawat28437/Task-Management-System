import React from "react";

function Header({ name, role }) {
  const today = new Date().toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="bg-white border border-slate-200 rounded-xl px-6 py-5 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800">
          Welcome Back,{" "}
          <span className="text-[#0D0B61]">
            {name}
          </span>
        </h1>

        {role === "Admin" ? (
          <p className="text-slate-500 mt-1">
            Manage tasks and track progress efficiently.
          </p>
        ) : (
          <p className="text-slate-500 mt-1">
            Manage your assigned tasks and track your progress.
          </p>
        )}
      </div>

      <div className="bg-[#F5F6FA] border border-slate-200 rounded-xl px-5 py-3">
        <p className="text-slate-400 text-sm">Today&apos;s Date</p>
        <h3 className="text-base font-semibold text-slate-800">
          {today}
        </h3>
      </div>
    </header>
  );
}

export default Header;