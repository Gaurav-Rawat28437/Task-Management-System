import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useSelector } from 'react-redux'
import { useNavigate} from 'react-router-dom'
import { loginUser } from '../../utils/SessionStorage'

function Login() {
    const userData = useSelector(store => store.employees)


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault()
        setLoading(true)
        setTimeout(() => {
            setLoading(false);

        }, 1000);

        const foundUser = userData.find(item => item.email === email && password === "123")


        if (foundUser) {
            loginUser(foundUser)

            navigate(`/employee/${foundUser.id}`)
            toast.success("Login Successful")
        }
        else if (email === "admin@example.com" && password === "123") {
            loginUser({ name: "Admin", email: "admin@example.com", role: "Admin" })
            navigate("/admin")
            toast.success("Login Successful")
        }
        else {
            toast.error("Wrong Credentials")
        }

        setEmail("")
        setPassword("")

    }
    return (




        <div className="min-h-screen flex items-center gap-20 justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 px-4">
            <div>
                <h1 className="text-5xl font-bold text-white">
                    TaskFlow
                </h1>

                <p className="text-slate-400 mt-4">
                    Manage employee tasks and monitor progress.
                </p>
            </div> 
            
            <div className="w-full max-w-md bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl p-8">
                <h1 className="text-3xl font-bold text-center mb-2">
                    Task Management
                </h1>
                <p className="text-center text-slate-400 mb-8">
                    Login to continue
                </p>

                <form onSubmit={submitHandler} className="flex flex-col gap-5">
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="px-4 py-3 bg-slate-800 border border-slate-600 rounded-xl outline-none focus:border-emerald-400"
                        type="email"
                        placeholder="Enter email"
                    />

                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="px-4 py-3 bg-slate-800 border border-slate-600 rounded-xl outline-none focus:border-emerald-400"
                        type="password"
                        placeholder="Enter password"
                    />

                    <button
                        disabled={loading}
                        className="bg-emerald-500 hover:bg-emerald-600 disabled:opacity-60 py-3 rounded-xl font-semibold transition"
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login
