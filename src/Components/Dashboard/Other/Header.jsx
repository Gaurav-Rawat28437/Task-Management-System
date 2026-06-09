import React from "react";

function Header({ name,role }) {
  const today = new Date().toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="flex items-center justify-between bg-slate-900 border border-slate-700 rounded-2xl p-5 shadow-lg">
      
      <div>
        <h1 className="text-3xl font-bold text-white">
          Welcome Back,{" "}
          <span className="text-emerald-400">
            {name}
          </span>
        </h1>

        {role==="Admin"?
         (<p className="text-slate-400 mt-1">
          Manage tasks and track progress efficiently.
        </p>
        ):(
          <p className="text-slate-400 mt-2">
          Manage your assigned tasks and track your progress.
        </p>
        ) }
        
      </div>

      <div className="text-right">
        <p className="text-slate-400 text-sm">
          Today's Date
        </p>

        <h3 className="text-lg font-semibold text-white">
          {today}
        </h3>
      </div>

    </header>
  );
}

export default Header;