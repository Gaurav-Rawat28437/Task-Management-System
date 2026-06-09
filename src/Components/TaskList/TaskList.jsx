import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { changeTaskStatus } from "../../utils/EmployeeTaskSlice";
import Task from "./Task";

function TaskList({ tasks, employeeId }) {
  const dispatch = useDispatch()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-10">
      {tasks.map((item, index) => {
        return <Task key={index} employeeId={employeeId} item={item}/>
      })}
    </div>
  );
}

export default TaskList