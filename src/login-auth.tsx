import React, { useState } from 'react' 
import { Link, useNavigate } from 'react-router-dom'
import { app, useGlobalContext } from './components/Context'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import iconMoon from './assets/todo-app-main/images/icon-moon.svg' 
import iconSun from './assets/todo-app-main/images/icon-sun.svg'
import { useToggle } from './components/hooks/useToggle';

export const auth = getAuth()

export default function LoginAuth() {

    const navigate = useNavigate();
    const { theme } = useGlobalContext();
    const [ email, setEmail ] = useState<string>('')
    const [ password, setPassword ] = useState<string>('')
    const [ signUp, setSignUp ] = useState<boolean>(false)

    const handleSignUp = (e: React.FormEvent<HTMLButtonElement> ) => {
        e.preventDefault()
        // sign up
        createUserWithEmailAndPassword(auth, email, password)
         .then((userCredential) => {
         const user = userCredential.user;
         console.log(user)
         navigate('/my-todo')
        })
       .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
       });
    }

    const handleSignIn = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
        // sign in
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
        navigate('/my-todo')
      })
      .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage)
  });
    }

    const handleToggle = useToggle()

    return (
        <div className={`theme-${theme}`}>
        <div className='list-body relative h-screen flex justify-center items-center'>
        <div 
        onClick={handleToggle}
        className='bg-black absolute top-4 right-8'>
          {
        theme === 'light' ?
        <img src={iconMoon} alt='moon' className='object-contain cursor-pointer'/>
        : <img src={iconSun} alt='moon' className='object-contain cursor-pointer'/>
         }
            </div>
        <div className='list list-text rounded-md shadow-2xl p-8'>
           <p className='text-center text-3xl list-text'>Welcome</p> 
           <form className='mt-4'>
            <div className='w-72'>
            <label
            htmlFor='eMailField'>
                eMail
            </label>
            <input type='text' 
            id='eMailField'
            value={email} 
            className='mt-1 rounded-lg h-8 w-full list'
            onChange={(e) => setEmail(e.target.value)}
            placeholder='johndoe@example.com'/>
           </div>
           <div className='mt-4 w-72'>
           <label 
           htmlFor='passwordField'>
                Password
            </label>
            <input type='text' 
            id='passwordField'
            value={password} 
            className='mt-1 rounded-lg w-full h-8 list'
            placeholder='******'
            onChange={(e) => setPassword(e.target.value)}/>
           </div>
           <button
           type='submit'
           onClick={!signUp ? handleSignIn : handleSignUp}
           className='border py-1 rounded-lg mt-4 w-full'>
             { !signUp ? 'Sign In' : 'Sign Up'}
           </button>
           <p className='mt-4'>{!signUp ? "Don't have an account?": 'Already have an account?'}
           <span 
           onClick={() => setSignUp(!signUp)}
           className='font-bold cursor-pointer'>{signUp ? ' Sign In' : ' Sign Up'}</span></p>
           </form>
        </div>
        </div>
        </div>
    )
}