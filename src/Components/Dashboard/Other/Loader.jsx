import React from 'react'

function Loader() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#0f172a]">
      <div className="h-12 w-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  )
}

export default Loader
