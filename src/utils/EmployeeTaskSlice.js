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

        }
    }
})

export default employeeTaskSlice.reducer
export const { createTask } = employeeTaskSlice.actions