import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { changeTaskStatus } from "../../utils/EmployeeTaskSlice";
import Task from "./Task";

function TaskList({ tasks, employeeId }) {
  const dispatch = useDispatch()

  return (
    <div className="flex gap-5 overflow-x-auto mt-10 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {tasks.map((item, index) => {
        return <Task key={index} employeeId={employeeId} item={item}/>
      })}
    </div>
  );
}

export default TaskList