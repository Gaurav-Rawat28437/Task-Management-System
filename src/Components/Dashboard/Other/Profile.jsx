import React from "react";

function Profile({ loginUser }) {
  return (
    <div className="mt-8 bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
      <h2 className="text-2xl font-bold text-slate-800 mb-8">
        Profile
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="w-24 h-24 rounded-full bg-[#0D0B61] text-white flex items-center justify-center text-4xl font-bold shadow-md">
          {loginUser?.name?.charAt(0)}
        </div>

        <div className="text-center md:text-left">
          <h3 className="text-3xl font-bold text-slate-800">
            {loginUser?.name}
          </h3>

          <p className="text-slate-500 mt-2">
            {loginUser?.email}
          </p>

          <span
            className={`inline-block mt-4 px-4 py-1 rounded-full text-sm font-semibold
            ${
              loginUser?.role === "Admin"
                ? "bg-purple-50 text-purple-600"
                : "bg-blue-50 text-blue-600"
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