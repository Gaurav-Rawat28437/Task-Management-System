import React from "react";
import Header from "./Other/Header";
import TaskListNumbers from "./Other/TaskListNumber";
import TaskList from "../TaskList/TaskList";
import { useSelector } from "react-redux";

function EmployeeDashboard() {

  const data=useSelector(store=>store.employeeTask.tasks)
  console.log(data)

  const employee = {
    name: "Gaurav",
    tasks: [
      {
        taskName: "UI Design",
        description: "Create landing page UI",
        status: "New",
      },
      {
        taskName: "API Development",
        description: "Build login and signup APIs",
        status: "Accepted",
      },
      {
        taskName: "Testing",
        description: "Test all modules",
        status: "Completed",
      },
      {
        taskName: "Database Setup",
        description: "Create MongoDB collections",
        status: "Failed",
      },
    ],
  };

  return (
    <div className="p-10 bg-[#1C1C1C] h-screen">
      <Header name={employee.name} />
      <TaskListNumbers tasks={employee.tasks} />
      <TaskList tasks={employee.tasks} />
      
    </div>
  );
}

export default EmployeeDashboard;