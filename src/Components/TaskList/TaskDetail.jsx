import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "../Dashboard/Other/Loader";

function TaskDetail() {
    const { employeeId, taskId } = useParams();

    const data = useSelector((store) => store.employeeTask.tasks)

    const [loading, setLoading] = useState(true)
    const navigate=useNavigate()

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    if (loading) {
        return <Loader />;
    }

    const employee = data.find(
        (item) => item.employeeId == employeeId
    );

    const task = employee?.taskDetail.find(
        (item) => item.taskId == taskId
    );

    if (!task) {
        return <h1 className="text-white p-10">Task not found</h1>;
    }
    
        return (

            <div className="min-h-screen bg-slate-950 text-white p-4 md:p-10">
                <div className="max-w-3xl mx-auto">

                    <div className="mb-6">
                        <button
                            onClick={() => navigate(-1)}
                            className="bg-slate-800 hover:bg-slate-700 border border-slate-600 px-5 py-2 rounded-xl transition"
                        >
                            ← Back
                        </button>
                    </div>

                    <div className="bg-slate-900 border border-slate-700 p-8 rounded-3xl shadow-xl">
                        <h1 className="text-3xl font-bold text-emerald-400 mb-6">
                            Task Details
                        </h1>

                        <h2 className="text-2xl font-bold">
                            {task.taskTitle}
                        </h2>

                        <p className="mt-4 text-slate-300 leading-relaxed">
                            {task.taskDescription}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                            <p className="bg-slate-800 p-4 rounded-xl">
                                Date: {task.taskDate}
                            </p>

                            <p className="bg-slate-800 p-4 rounded-xl">
                                Category: {task.category}
                            </p>

                            <p className="bg-slate-800 p-4 rounded-xl">
                                Status: {task.status}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    export default TaskDetail;