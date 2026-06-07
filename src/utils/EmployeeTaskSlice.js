import { createSlice } from "@reduxjs/toolkit";

const employeeTaskSlice = createSlice({
    name: "employeeTask",
    initialState: {
        tasks: [],
    },
    reducers: {
        createTask: (state, action) => {

            const data = action.payload

            const existingEmployee = state.tasks.find(item => item.employeeId == data.employeeId)

            if (existingEmployee) 
            {
                existingEmployee.taskDetail.push(data.taskDetail)
            } 
            else {
                state.tasks.push({
                    employeeId: data.employeeId,
                    employeeName: data.employeeName,
                    taskDetail: [data.taskDetail]
                });
            }

        },
        changeTaskStatus:(state,action)=>{
             const {employeeId,taskId,status}=action.payload

             const employee = state.tasks.find(item => item.employeeId == employeeId)

             if(employee)
             {
                const task = employee.taskDetail.find((task) => task.taskId == taskId)

                if(task)
                {
                    task.status=status
                }
             }

        }
    }

})

export default employeeTaskSlice.reducer
export const { createTask,changeTaskStatus } = employeeTaskSlice.actions