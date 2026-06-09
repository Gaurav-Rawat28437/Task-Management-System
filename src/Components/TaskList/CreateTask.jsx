import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { createTask } from "../../utils/EmployeeTaskSlice"
import toast from "react-hot-toast"
import SearchAccordionInput from "./SearchAccordionInput"

const CreateTask = () => {
    const [taskTitle, setTaskTitle] = useState("")
    const [taskDescription, setTaskDescription] = useState("")
    const [taskDueDate, setTaskDueDate] = useState("")
    const [category, setCategory] = useState("")

    const [search, setSearch] = useState("")
    const [employeeID, setEmployeeID] = useState("")
    const [open, setOpen] = useState(false)

    const employees = useSelector((store) => store.employees)
    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()

        if (!employeeID) {
            toast.error("Please select an employee")
            return
        }

        const newTask = {
            employeeId: employeeID,
            employeeName: search,
            taskDetail: {
                taskId: Date.now(),
                taskTitle,
                taskDescription,
                taskAssignDate:new Date().toISOString().split("T")[0],
                taskDueDate,
                category,
                status: "New",
            },
        }

        dispatch(createTask(newTask))
        toast.success("Task created successfully")

        setTaskTitle("")
        setCategory("")
        setTaskDueDate("")
        setTaskDescription("")
        setEmployeeID("")
        setSearch("")
    }

    const filteredEmployees = employees.filter((emp) =>
        emp.name.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div
            onClick={() => setOpen(false)}
            className="mt-8 bg-slate-900 border border-slate-700 rounded-3xl shadow-xl p-6 md:p-8"
        >
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-white">
                    Create New Task
                </h2>
                <p className="text-slate-400 mt-1">
                    Assign a task to an employee and track progress.
                </p>
            </div>

            <form
                onSubmit={submitHandler}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
                <div className="flex flex-col gap-5">
                    <div>
                        <label className="block text-sm text-slate-300 mb-2">
                            Task Title
                        </label>
                        <input
                            required
                            value={taskTitle}
                            onChange={(e) => setTaskTitle(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-slate-600 bg-slate-800 text-white outline-none focus:border-emerald-400"
                            type="text"
                            placeholder="Make a UI Design"
                        />
                    </div>

                    <div>
                        <label className="block text-sm text-slate-300 mb-2">
                            Due Date
                        </label>
                        <input
                            required
                            value={taskDueDate}
                            onChange={(e) => setTaskDueDate(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-slate-600 bg-slate-800 text-white outline-none cursor-text focus:border-emerald-400 [&::-webkit-calendar-picker-indicator]:cursor-pointer"
                            type="date"
                        />
                    </div>

                    <div>
                        <label className="block text-sm text-slate-300 mb-2">
                            Assign To
                        </label>

                        <SearchAccordionInput data={{ search, open, setOpen, setSearch, setEmployeeID, filteredEmployees,}}/>
                    </div>

                    <div>
                        <label className="block text-sm text-slate-300 mb-2">
                            Category
                        </label>
                        <input
                            required
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-slate-600 bg-slate-800 text-white outline-none focus:border-emerald-400"
                            type="text"
                            placeholder="Design, Development, Testing"
                        />
                    </div>
                </div>

                <div className="flex flex-col">
                    <label className="block text-sm text-slate-300 mb-2">
                        Description
                    </label>

                    <textarea
                        required
                        value={taskDescription}
                        onChange={(e) => setTaskDescription(e.target.value)}
                        className="w-full flex-1 min-h-[220px] px-4 py-3 rounded-xl border border-slate-600 bg-slate-800 text-white outline-none focus:border-emerald-400 resize-none"
                        placeholder="Enter task description..."
                    />

                    <button
                        type="submit"
                        className="bg-emerald-500 hover:bg-emerald-600 transition text-white py-3 px-4 rounded-xl mt-5 w-full font-semibold shadow-lg"
                    >
                        Create Task
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CreateTask