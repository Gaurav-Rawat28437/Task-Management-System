import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeTaskStatus } from "../../utils/EmployeeTaskSlice";
import toast from "react-hot-toast";

function Task({ item, employeeId }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const updateStatus = (e, status) => {
    e.stopPropagation();

    dispatch(
      changeTaskStatus({
        employeeId,
        taskId: item.taskId,
        status,
      })
    );

    toast.success(`Task marked as ${status}`);
  };

  const statusLabel =
    item.status === "New"
      ? "Pending"
      : item.status === "Accepted"
      ? "In Progress"
      : item.status;

  const statusStyle =
    item.status === "Completed"
      ? "bg-green-50 text-green-600 border-green-100"
      : item.status === "Accepted"
      ? "bg-yellow-50 text-yellow-700 border-yellow-100"
      : item.status === "Failed"
      ? "bg-red-50 text-red-600 border-red-100"
      : "bg-blue-50 text-blue-600 border-blue-100";

  const dotStyle =
    item.status === "Completed"
      ? "bg-green-500"
      : item.status === "Accepted"
      ? "bg-yellow-500"
      : item.status === "Failed"
      ? "bg-red-500"
      : "bg-blue-500";

  return (
    <div
      onClick={() => navigate(`/task/${employeeId}/${item.taskId}`)}
      className="min-w-[320px] bg-white border border-slate-200 p-5 rounded-2xl text-slate-800 cursor-pointer shadow-sm hover:-translate-y-1 hover:shadow-md hover:border-[#0D0B61]/30 transition-all duration-300"
    >
      <div className="flex justify-between items-start gap-4">
        <div className="flex gap-3">
          <span className={`w-3 h-3 rounded-full mt-2 ${dotStyle}`}></span>

          <div>
            <h3 className="text-lg font-bold text-slate-900 line-clamp-1">
              {item.taskTitle}
            </h3>

            <p className="text-sm text-slate-500 mt-1">
              {item.category}
            </p>
          </div>
        </div>

        <span
          className={`px-3 py-1 rounded-full text-xs font-bold border whitespace-nowrap ${statusStyle}`}
        >
          {statusLabel}
        </span>
      </div>

      <p className="text-slate-500 mt-5 text-sm leading-relaxed line-clamp-2">
        {item.taskDescription}
      </p>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="bg-[#F5F6FA] border border-slate-100 rounded-xl px-4 py-3">
          <p className="text-xs text-slate-400">Assigned</p>
          <p className="text-sm font-bold text-slate-700 mt-1">
            {item.taskAssignDate}
          </p>
        </div>

        <div className="bg-[#F5F6FA] border border-slate-100 rounded-xl px-4 py-3">
          <p className="text-xs text-slate-400">Due Date</p>
          <p className="text-sm font-bold text-slate-700 mt-1">
            {item.taskDueDate}
          </p>
        </div>
      </div>

      <div className="flex gap-3 mt-6">
        {item.status === "New" && (
          <button
            onClick={(e) => updateStatus(e, "Accepted")}
            className="bg-[#0D0B61] hover:bg-[#294669] text-white px-4 py-2 rounded-lg text-sm font-semibold transition"
          >
            Accept Task
          </button>
        )}

        {item.status === "Accepted" && (
          <>
            <button
              onClick={(e) => updateStatus(e, "Completed")}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition"
            >
              Complete
            </button>

            <button
              onClick={(e) => updateStatus(e, "Failed")}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition"
            >
              Failed
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Task;