import { configureStore } from "@reduxjs/toolkit";
import employeeTaskReducer from "./EmployeeTaskSlice"
import employeeReducer from "./Employee"
import { loadState, saveState } from "./LocalStorage";
const store=configureStore({

    reducer:{
        employees:employeeReducer,
        employeeTask:employeeTaskReducer
    },
    preloadedState:loadState()
})

store.subscribe(()=>{
    console.log("Saving...");
    
    saveState(store.getState())
})




export default store