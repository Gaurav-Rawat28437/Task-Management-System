import React from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

function AllTask() {
    const taskAssignedEmployees = useSelector(
        (store) => store.employeeTask.tasks
    )

    const navigate=useNavigate()

    return (
        <div className="bg-slate-900 border border-slate-700 p-6 rounded-3xl mt-8 text-white shadow-xl">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Assigned Tasks</h2>

                <span className="px-4 py-2 bg-slate-800 rounded-xl text-sm text-slate-300">
                    {taskAssignedEmployees.length} Employees
                </span>
            </div>

            {taskAssignedEmployees.length === 0 ? (
                <div className="text-center py-10">
                    <h3 className="text-xl font-semibold text-slate-400">
                        No Tasks Assigned Yet
                    </h3>
                </div>
            ) : (
                taskAssignedEmployees.map(
                    (employee) =>
                        employee.taskDetail.length > 0 && (
                            <div
                                key={employee.employeeId}
                                className="mb-6 bg-slate-800 border border-slate-700 rounded-2xl p-5"
                            >
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-lg font-bold text-emerald-400">
                                        {employee.employeeName}
                                    </h3>

                                    <span className="text-sm text-slate-400">
                                        {employee.taskDetail.length} Tasks
                                    </span>
                                </div>

                                <div className="hidden md:grid grid-cols-4 gap-10  text-slate-400 text-sm font-medium border-b border-slate-700 pb-2 mb-3">
                                    <p>Task</p>
                                    <p>Status</p>
                                    <p>Assign Date</p>
                                    <p>Due Date</p>
                                </div>

                                {employee.taskDetail.map((task) => (
                                    <div
                                        onClick={()=>{
                                            const employeeId=employee.employeeId
                                            const taskId=task.taskId
                                            navigate(`/task/${employeeId}/${taskId}`)
                                        }}
                                        key={task.taskId}
                                        className="cursor-pointer grid md:grid-cols-4 gap-10 items-center py-3 border-b border-slate-700 last:border-none"
                                    >
                                        <p className="font-medium">
                                            {task.taskTitle}
                                        </p>

                                        <p
                                            className={`px-3 py-1 rounded-full text-sm font-medium w-fit
                                                    ${task.status === "Completed"
                                                    ? "bg-green-500/20 text-green-400"
                                                    : task.status === "Accepted"
                                                    ? "bg-yellow-500/20 text-yellow-400"
                                                    : task.status === "Failed"
                                                    ? "bg-red-500/20 text-red-400"
                                                    : "bg-blue-500/20 text-blue-400"
                                                }`}
                                        >
                                            {task.status === "New"
                                                ? "Pending"
                                                : task.status === "Accepted"
                                                    ? "In Progress"
                                                    : task.status}
                                        </p>

                                        <p className="text-slate-400">
                                            {task.taskAssignDate}
                                        </p>

                                        <p className="text-slate-400">
                                            {task.taskDueDate}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        )
                )
            )}
        </div>
    )
}

export default AllTask