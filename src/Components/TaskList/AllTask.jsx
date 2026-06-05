import React from "react";
import { useSelector } from "react-redux";
import Loader from "../Dashboard/Other/Loader";


function AllTask() {
    const TaskAssignedEmployees=useSelector(store=>store.employeeTask.tasks)

    

    return (
        <div className="bg-zinc-900 p-6 rounded-xl mt-6 text-white">
            <h2 className="text-2xl font-bold mb-5">Assigned Tasks</h2>

            {TaskAssignedEmployees.length>0 &&
            TaskAssignedEmployees.map((employee) =>
                employee.taskDetail.length > 0 && (
                    <div
                        key={employee.employeeId}
                        className="mb-4 bg-zinc-800 rounded-lg p-4"
                    >
                        <h3 className="text-lg font-semibold mb-3">
                            {employee.employeeName}
                        </h3>

                        {employee.taskDetail.map((task, index) => (
                            <div
                                key={task.taskId}
                                className="flex justify-between border-b border-zinc-700 py-2"
                            >
                                <p>{task.taskTitle}</p>
                                <p
                                    className={`px-3 py-1 rounded-full text-sm font-medium w-fit 
                                                ${task.status === "Completed"
                                                ? "bg-green-500/20 text-green-400"
                                                : task.status === "In Progress"
                                                ? "bg-yellow-500/20 text-yellow-400"
                                                : task.status === "Pending"
                                                ? "bg-red-500/20 text-red-400"
                                                : "bg-zinc-700 text-zinc-300"
                                        }
                                     `}
                                >
                                    {task.status}
                                </p>
                                <p>{task.taskDate}</p>
                            </div>
                        ))}
                    </div>
                )
            )}
        </div>
    );
}

export default AllTask;