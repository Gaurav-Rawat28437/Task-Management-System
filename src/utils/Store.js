import { configureStore } from "@reduxjs/toolkit";
import employeeTaskReducer from "./EmployeeTaskSlice"
import employeeReducer from "./Employee"
const store=configureStore({

    reducer:{
        employees:employeeReducer,
        employeeTask:employeeTaskReducer
    }
})

export default store