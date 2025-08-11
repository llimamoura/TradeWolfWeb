import React from 'react'

const LoginForm: React.FC = () => {
    return(
        <form className='flex flex-col w-full max-w-sm'>
            <h2 className='text-2xl font-bold mb-2'>Sign in with password</h2>
            <p className='text-sm mb-4'>Dont have an account? <a href='#' className='text-blue-600 hover:underline'>Sign up</a></p>

            <input type='email' placeholder='Email' className='border border-gray-300 rounded px-3 py-2 mb-3 focus:outline-none focus:ring-blue-500' />
            <input type='password' placeholder='Password' className='border border-gray-300 rounded px-3 py-2 mb-3 focus:outline-none focus:ring-blue-500' />
            <a href='#' className='text-sm text-blue-600 hover:underline mb-4'>Reset Password</a>
            <button type='submit' className='bg-[#001838] cursor-pointer text-white py-2 rounded hover:bg-blue-900 transition'>SIGN IN</button>
        </form>
    )
}

export default LoginForm;