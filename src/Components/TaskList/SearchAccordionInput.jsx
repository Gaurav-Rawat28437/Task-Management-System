import React from "react";

function SearchAccordionInput({ data }) {
  const {
    search,
    open,
    setOpen,
    setSearch,
    setEmployeeID,
    filteredEmployees,
  } = data;

  const clearSearch = (e) => {
    e.stopPropagation();
    setSearch("");

    if (setEmployeeID) {
      setEmployeeID("");
    }

    setOpen(false);
  };

  return (
    <div className="relative">
      <input
        required
        type="text"
        value={search}
        placeholder="Search employee"
        onClick={(e) => {
          e.stopPropagation();
          setOpen(true);
        }}
        onChange={(e) => {
          setSearch(e.target.value);
          setOpen(true);
        }}
        className="w-full px-4 py-3 pr-12 rounded-lg border border-slate-200 bg-white text-slate-700 outline-none focus:border-[#0D0B61] focus:ring-4 focus:ring-[#0D0B61]/10"
      />

      {search && (
        <button
          type="button"
          onClick={clearSearch}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-red-500 text-lg"
        >
          ✕
        </button>
      )}

      {open && (
        <div className="absolute z-20 mt-2 w-full bg-white border border-slate-200 rounded-lg max-h-48 overflow-y-auto shadow-xl">
          {filteredEmployees.length > 0 ? (
            filteredEmployees.map((emp) => (
              <div
                key={emp.id}
                onClick={(e) => {
                  e.stopPropagation();
                  setSearch(emp.name);

                  if (setEmployeeID) {
                    setEmployeeID(emp.id);
                  }

                  setOpen(false);
                }}
                className="px-4 py-3 cursor-pointer hover:bg-slate-50 transition"
              >
                <p className="font-semibold text-slate-700">
                  {emp.name}
                </p>

                {emp.email && (
                  <p className="text-xs text-slate-400">
                    {emp.email}
                  </p>
                )}
              </div>
            ))
          ) : (
            <p className="px-4 py-3 text-slate-400">
              No employee found
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default SearchAccordionInput;