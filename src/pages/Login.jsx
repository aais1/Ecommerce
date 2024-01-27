import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
<div className='h-[85vh] md:h-[75vh] bg-gradient-to-r from-yellow-500 to-amber-400 grid place-items-center'>
        <div className='bg-white h-[62%] rounded-sm md:rounded-lg px-10 pb-16 grid place-items-center'>
        <p className='text-center pt-4 pb-10 text-2xl font-bold text-yellow-500 '>Login</p>
          <div className='grid grid-cols-2'>
          <div className='flex flex-col gap-y-3'>
            <label className='p-1 border border-transparent' htmlFor="email">Email : </label>
            <label className='p-1 border border-transparent' htmlFor="password">Password : </label>
          </div>
          <div className='flex flex-col gap-y-3'>
            <input className='border border-black p-1' name='email' type="text" />
            <input className='border border-black p-1' name='password' type="password" />
            <Link to="/register"><span className='text-xs underline mt-4 text-gray-400 hover:text-gray-800'>Create a New Account</span></Link>
          </div>
          </div>
          <button className='w-[100%] mt-5 border py-2 border-yellow-400 text-yellow-400 hover:text-white hover:bg-yellow-400 duration-150 font-bold text-lg rounded'>Sign In</button>
        </div>
    </div>
  )
}

export default Login