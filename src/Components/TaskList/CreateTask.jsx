import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import store from '../../utils/Store'
import { createTask } from '../../utils/EmployeeTaskSlice'
// import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

    // const [userData, setUserData] = useContext(AuthContext)
    const tasks = useSelector((store) => store.employeeTask.tasks);

    const [taskTitle, setTaskTitle] = useState("")
    const [taskDescription, setTaskDescription] = useState("")
    const [taskDate, setTaskDate] = useState("")
    const [asignTo, setAsignTo] = useState("")
    const [category, setCategory] = useState("")

    const [search, setSearch] = useState("");
    const [employeeID,setEmployeeID]=useState("")
    const [open, setOpen] = useState(false);

    
    const employees=useSelector(store=>store.employees)
    const dispatch=useDispatch()
    

    const submitHandler = (e) => {
        e.preventDefault()

        const newTask={
            
            
            employeeId: employeeID,
            employeeName: search,
            taskDetail:{
                taskId: Date.now(),
                taskTitle,
                taskDescription,
                taskDate,
                category,
                status: "New"
            }
            
        }
       
        dispatch(createTask(newTask))

        setTaskTitle("")
        setCategory("")
        setAsignTo("")
        setTaskDate("")
        setTaskDescription("")
        setEmployeeID("")
        setSearch("")
    }


    

   

   

        const filteredEmployees = [
            "none",
            ...employees.filter((emp) =>
                emp.name.toLowerCase().includes(search.toLowerCase())
        )
        
    ];
    
    return (
        <div 
          onClick={(e)=>{
            setOpen(false)
            
          }}
          className='p-6 bg-zinc-900 mt-6 rounded-xl shadow-lg'>
            <h2 className='text-2xl font-semibold text-white mb-6'>
                Create New Task
            </h2>

            <form
                onSubmit={(e)=>{
                    submitHandler(e)
                }}
                className='flex flex-wrap w-full items-start justify-between'
            >
                <div className='w-1/2'>
                    <div>
                        <h3 className='text-sm text-zinc-300 mb-1'>Task Title</h3>
                        <input
                            value={taskTitle}
                            onChange={(e) => setTaskTitle(e.target.value)}
                            className='w-4/5 px-3 py-2 rounded-lg border border-zinc-700 bg-zinc-800 text-white outline-none focus:border-emerald-500'
                            type="text"
                            placeholder='Make a UI Design'
                        />
                    </div>

                    <div className='mt-4'>
                        <h3 className='text-sm text-zinc-300 mb-1'>Date</h3>
                        <input
                            value={taskDate}
                            onChange={(e) => setTaskDate(e.target.value)}
                            className='w-4/5 px-3 py-2 rounded-lg border border-zinc-700 bg-zinc-800 text-white outline-none focus:border-emerald-500'
                            type="date"
                        />
                    </div>


                    <div>
                        <h3 className='text-sm text-zinc-300 mb-1'>Assign To</h3>

                        <div className="relative w-80">
                            <input
                                id='assignTaskId'
                                type="text"
                                value={search}
                                placeholder="Assign Employee"
                                onClick={(e) => {
                                    e.stopPropagation()
                                    setOpen(true)
                                    
                                }
                                }
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full px-3 py-2 rounded-lg border bg-zinc-800 text-white"
                            />

                            {open && (
                                <div className="absolute mt-1 w-full bg-zinc-800 border rounded-lg max-h-48 overflow-y-auto">
                                    {filteredEmployees.length>0 && filteredEmployees.map((emp, index) => (
                                        <div
                                            key={index}
                                            onClick={(e) => {
                                                e.stopPropagation()
                                                emp=="none"?setSearch(""):setSearch(emp.name)
                                                setEmployeeID(emp.id)
                                                setOpen(false);
                                                
                                            }}
                                            className="px-3 py-2 cursor-pointer hover:bg-zinc-700"
                                        >
                                            {emp.name}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>


                    <div className='mt-4'>
                        <h3 className='text-sm text-zinc-300 mb-1'>Category</h3>
                        <input
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className='w-4/5 px-3 py-2 rounded-lg border border-zinc-700 bg-zinc-800 text-white outline-none focus:border-emerald-500'
                            type="text"
                            placeholder='Design, Development, etc.'
                        />
                    </div>
                </div>

                <div className='w-2/5 flex flex-col'>
                    <h3 className='text-sm text-zinc-300 mb-1'>Description</h3>

                    <textarea
                        value={taskDescription}
                        onChange={(e) => setTaskDescription(e.target.value)}
                        className='w-full h-44 px-3 py-2 rounded-lg border border-zinc-700 bg-zinc-800 text-white outline-none focus:border-emerald-500 resize-none'
                        placeholder='Enter task description...'
                    ></textarea>

                    <button
                        type='submit'
                        className='bg-emerald-500 hover:bg-emerald-600 transition-all duration-300 text-white py-3 px-4 rounded-lg mt-4 w-full font-medium'
                    >
                        Create Task
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CreateTask