import { createSlice } from "@reduxjs/toolkit";

const employees = [
  {
    id: 1,
    name: "Ram",
    email: "ram@example.com",
    role: "Employee",
  },
  {
    id: 2,
    name: "Shyam",
    email: "shyam@example.com",
    role: "Employee",
  },
  {
    id: 3,
    name: "Mohan",
    email: "mohan@example.com",
    role: "Employee",
  },
  {
    id: 4,
    name: "Ravi",
    email: "ravi@example.com",
    role: "Employee",
  },
  {
    id: 5,
    name: "Aman",
    email: "aman@example.com",
    role: "Employee",
  },
  {
    id: 6,
    name: "Rohit",
    email: "rohit@example.com",
    role: "Employee",
  },
  {
    id: 7,
    name: "Ankit",
    email: "ankit@example.com",
    role: "Employee",
  },
  {
    id: 8,
    name: "Deepak",
    email: "deepak@example.com",
    role: "Employee",
    
  },
  {
    id: 9,
    name: "Vikas",
    email: "vikas@example.com",
    role: "Employee",
    
  },
  {
    id: 10,
    name: "Suresh",
    email: "suresh@example.com",
    role: "Employee",
    
  }
];

const employeeSlice=createSlice({
  name:"employees",
  initialState:employees,
  reducers:{
    addEmployee:(state,action)=>{
      state.push(action.payload)
    }
  }
})

export default employeeSlice.reducer
export const {addEmployee}=employeeSlice.actions