import React from "react"
import { removeLoginUser } from "../../../utils/SessionStorage"
import { useNavigate } from "react-router-dom"

function Sidebar({ setActivePage, role }) {
  const navigate = useNavigate()
  const user = JSON.parse(sessionStorage.getItem("loginUser"))

  const goDashboard = () => {
    if (role === "Admin") {
      navigate("/admin")
    } else {
      
      navigate(`/employee/${user.id}`)
    }

    if (setActivePage) {
      setActivePage("dashboard")
    }
  }

  const goProfile = () => {
    if (role === "Admin") {
      navigate("/admin")
    } else {
      
      navigate(`/employee/${user.id}`)
    }

    setTimeout(() => {
      if (setActivePage) {
        setActivePage("profile")
      }
    }, 0)
  }

  return (
    <aside className="w-64 h-screen bg-slate-950 border-r border-slate-800 p-5">
      <h1 className="text-2xl font-bold text-emerald-400 mb-10">
        📋 TaskFlow
      </h1>

      <nav className="flex flex-col gap-3">
        <button
          onClick={goDashboard}
          className="text-left px-4 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 transition"
        >
          📊 Dashboard
        </button>

        {role === "Admin" && (
          <button
            onClick={() => {
              navigate("/admin")
              setTimeout(() => {
                if (setActivePage) {
                  setActivePage("createTask")
                }
              }, 0)
            }}
            className="text-left px-4 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 transition"
          >
            ➕ Create Task
          </button>
        )}

        <button
          onClick={goProfile}
          className="text-left px-4 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 transition"
        >
          👤 Profile
        </button>

        <button
          onClick={() => {
            removeLoginUser("loginUser")
            navigate("/login")
          }}
          className="text-left px-4 py-3 rounded-xl bg-red-500/20 text-red-400 hover:bg-red-500/30 transition mt-8"
        >
          🚪 Logout
        </button>
      </nav>
    </aside>
  )
}

export default Sidebar