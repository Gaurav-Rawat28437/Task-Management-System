import React from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { changeTaskStatus } from "../../utils/EmployeeTaskSlice"
import toast from "react-hot-toast"

function Task({ item, employeeId }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const updateStatus = (e, status) => {
    e.stopPropagation()

    dispatch(
      changeTaskStatus({
        employeeId,
        taskId: item.taskId,
        status,
      })
    )

    toast.success(`Task marked as ${status}`)
  }

  return (
    <div
      onClick={() => navigate(`/task/${employeeId}/${item.taskId}`)}
      className="mt-2 min-w-[320px] bg-slate-900 border border-slate-700 p-5 rounded-2xl text-white cursor-pointer shadow-lg hover:border-emerald-500 hover:-translate-y-1 transition-all duration-300"
    >
      <div className="flex justify-between items-start gap-4">
        <h3 className="text-xl font-bold text-white">
          {item.taskTitle}
        </h3>

        <span
          className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap
            ${
              item.status === "Completed"
                ? "bg-green-500/20 text-green-400"
                : item.status === "Accepted"
                ? "bg-yellow-500/20 text-yellow-400"
                : item.status === "Failed"
                ? "bg-red-500/20 text-red-400"
                : "bg-blue-500/20 text-blue-400"
            }`}
        >
          {item.status}
        </span>
      </div>

      <p className="text-slate-400 mt-4 text-sm leading-relaxed line-clamp-2">
        {item.taskDescription}
      </p>

      <div className="mt-5 flex items-center justify-between text-sm text-slate-400">
        <p>{item.category}</p>
        <p>{item.taskDueDate}</p>
      </div>

      <div className="flex gap-3 mt-6">
        {item.status === "New" && (
          <button
            onClick={(e) => updateStatus(e, "Accepted")}
            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-xl font-medium transition"
          >
            Accept
          </button>
        )}

        {item.status === "Accepted" && (
          <>
            <button
              onClick={(e) => updateStatus(e, "Completed")}
              className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-xl font-medium transition"
            >
              Complete
            </button>

            <button
              onClick={(e) => updateStatus(e, "Failed")}
              className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-xl font-medium transition"
            >
              Failed
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default Task