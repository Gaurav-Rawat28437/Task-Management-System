import React from 'react'
import Header from './Other/Header'
import CreateTask from '../TaskList/CreateTask'
import AllTask from '../TaskList/AllTask'


const AdminDashboard = (props) => {
    return (
        <div className='min-h-screen w-full p-7 bg-black'>
    <Header changeUser={props.changeUser} />
    <CreateTask />
    <AllTask/>
</div>
    )
}

export default AdminDashboard