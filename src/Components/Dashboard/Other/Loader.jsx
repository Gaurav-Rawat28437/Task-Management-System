import React from 'react'

function Loader() {
  return (
    <div className="flex justify-center items-center h-40">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-blue-500"></div>
    </div>
  )
}

export default Loader
