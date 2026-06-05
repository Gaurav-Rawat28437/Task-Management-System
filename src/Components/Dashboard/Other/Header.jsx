import React from 'react'

function Header() {
  return (
    <div className='flex items-center justify-between px-6 py-4 bg-zinc-900 rounded-xl shadow-lg'>
      
      <h1 className='text-white text-2xl font-medium'>
        Hello 👋 <br />
        <span className='text-3xl font-bold text-emerald-400'>
          Gaurav
        </span>
      </h1>

      <button className='bg-red-500 hover:bg-red-600 transition-all duration-300 text-white font-medium px-5 py-2 rounded-lg shadow-md'>
        Logout
      </button>

    </div>
  )
}

export default Header
