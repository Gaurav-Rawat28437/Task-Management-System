import React from 'react'
import { useNavigate } from 'react-router-dom';
import { removeLoginUser } from '../../../utils/SessionStorage';

function Header({ name }) {
  const navigate = useNavigate()

  return (
    <div className="flex items-center justify-between bg-slate-900 border border-slate-700 px-6 py-5 rounded-2xl shadow-lg">
      <div>
        <p className="text-slate-400 text-sm">Welcome back 👋</p>
        <h1 className="text-3xl font-bold text-emerald-400">
          {name}
        </h1>
      </div>

      <button
        onClick={() => {
          removeLoginUser("loginUser");
          navigate("/login");
        }}
        className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-xl font-medium transition cursor-pointer"
      >
        Logout
      </button>
    </div>
  )
}

export default Header
