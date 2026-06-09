import React from "react";

function Profile({ loginUser }) {
  return (
    <div className="mt-8 bg-slate-900 border border-slate-700 rounded-3xl p-8 shadow-xl">
      <h2 className="text-3xl font-bold text-emerald-400 mb-8">
        Profile
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="w-24 h-24 rounded-full bg-emerald-500 flex items-center justify-center text-4xl font-bold">
          {loginUser?.name?.charAt(0)}
        </div>

        <div>
          <h3 className="text-3xl font-bold">
            {loginUser?.name}
          </h3>

          <p className="text-slate-400 mt-2">
            {loginUser?.email}
          </p>

          <span
            className={`inline-block mt-3 px-4 py-1 rounded-full text-sm font-medium
            ${
              loginUser?.role === "Admin"
                ? "bg-purple-500/20 text-purple-400"
                : "bg-blue-500/20 text-blue-400"
            }`}
          >
            {loginUser?.role}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Profile;