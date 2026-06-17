import React from "react";

function Loader() {
  return (
    <div className="min-h-screen bg-[#F5F6FA] flex flex-col items-center justify-center">
      <div className="relative">
        <div className="h-14 w-14 rounded-full border-4 border-slate-200"></div>

        <div className="absolute top-0 left-0 h-14 w-14 rounded-full border-4 border-[#0D0B61] border-t-transparent animate-spin"></div>
      </div>

      <h2 className="mt-5 text-xl font-bold text-[#0D0B61]">
        Task<span className="text-[#478B8D]">Flow</span>
      </h2>

      <p className="mt-1 text-sm text-slate-500">
        Loading your dashboard...
      </p>
    </div>
  );
}

export default Loader;