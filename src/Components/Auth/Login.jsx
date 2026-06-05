import React, { useState } from 'react'

function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const submitHandler = (e) => {
        e.preventDefault()
        console.log("login form submit")
        
        setEmail("")
        setPassword("")

    }
    return (
        <div className=' w-screen h-screen flex justify-center items-center bg-black'>
            <div className='border-2 border-emerald-600 p-15'>
                <form
                    onSubmit={(e) => {
                        submitHandler(e)
                    }}
                    action="" className='flex flex-col gap-4'>
                    <input
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        value={email}
                        required className='p-2 bg-tranparent text-white border-2 border-emerald-600 rounded-2xl placeholder:text-gray-00' type="email" placeholder='Enter email' />
                    <input
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        value={password}
                        required className='p-2 bg-tranparent text-white border-2 border-emerald-600 rounded-2xl placeholder:text-gray-00' type="password" placeholder='Enter password' />
                    <button className='p-3 w-fit h-fit border-2 border-white text-white rounded-full bg-emerald-600 mx-auto'>Login</button>
                </form>
            </div>

        </div>
    )
}

export default Login
