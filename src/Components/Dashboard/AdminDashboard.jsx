import React, { useEffect, useState } from 'react'
import Header from './Other/Header'
import CreateTask from '../TaskList/CreateTask'
import AllTask from '../TaskList/AllTask'
import Loader from './Other/Loader'


const AdminDashboard = () => {

    const loginUserName = JSON.parse(sessionStorage.getItem("loginUser")).name
    console.log(loginUserName)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    if (loading) {
        return <Loader />;
    }
    return (
        <div className="min-h-screen bg-slate-950 p-4 md:p-8">
            <Header name={loginUserName} />
            <CreateTask />
            <AllTask />
        </div>
    )
}

export default AdminDashboard