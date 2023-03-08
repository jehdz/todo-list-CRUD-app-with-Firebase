import React, { useState } from 'react' 
import { Link } from 'react-router-dom'
import { app } from './components/Context'


export default function LoginAuth() {

    const [ email, setEmail ] = useState<string>('')
    const [ password, setPassword ] = useState<string>('')
     
    return (
        <div className='h-screen flex justify-center items-center'>
        <div className='shadow-lg p-8'>
           <p className='text-center text-3xl'>Welcome</p> 
           <form className='mt-4'>
            <div className='w-72'>
            <label htmlFor='eMailField'>
                eMail
            </label>
            <input type='text' 
            id='eMailField'
            value={email} 
            className='rounded-lg h-8 w-full'
            onChange={(e) => setEmail(e.target.value)}
            placeholder='johndoe@example.com'/>
           </div>
           <div className='mt-4 w-72'>
           <label htmlFor='passwordField'>
                Password
            </label>
            <input type='text' 
            id='passwordField'
            value={password} 
            className='rounded-lg w-full h-8'
            placeholder='******'
            onChange={(e) => setPassword(e.target.value)}/>
           </div>
           <Link to='/my-todo'>
           <button className='border py-1 rounded-lg mt-4 w-full'>
             Sign In
           </button>
           </Link>
           <p className='mt-4'>Don't have an account? Sign Up</p>
           </form>
        </div>
        </div>
    )
}