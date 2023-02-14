import iconCross from '../assets/todo-app-main/images/icon-cross.svg'
import iconCheck from '../assets/todo-app-main/images/icon-check.svg'
import { useEffect, useRef, useState } from 'react'
import { useGlobalContext } from './Context';

export default function List() {

   const { setElementWidth } = useGlobalContext();
   
   const elementOneRef = useRef<HTMLParagraphElement>(null!);  
   const elementTwoRef = useRef<HTMLDivElement>(null!);  
   const elementThreeRef = useRef<HTMLParagraphElement>(null!);  

   const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
   

   useEffect(() => {
     const handleResize = ():void => {
      setWindowWidth(window.innerWidth);
     }
     window.addEventListener('resize', handleResize);
     return () => window.removeEventListener('resize', handleResize);
   }, []);

   useEffect(() => {
   //  console.log(elementOneRef.current.getBoundingClientRect().width,
   //  elementThreeRef.current.getBoundingClientRect().width)
    setElementWidth(elementTwoRef.current.getBoundingClientRect().width)
   }, [windowWidth]);

    
     return (
        <div className="rounded-md bg-white my-4 shadow-lg w-full">
         <div className='border-b'>
            <div className='py-4 px-4 flex justify-between items-center'>       
            <div className='flex space-x-3'>
            <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100
             border-gray-300 rounded focus:ring-blue-500
             dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
            <label htmlFor='default-checkbox' className='text-sm'>Complete online JavaScript course</label>
            </div>
            <img src={iconCross} alt='cancel' className='object-contain cursor-pointer'/>
            </div>
         </div>

         <div className='border-b'>
            <div className='py-4 px-4 flex justify-between items-center'>       
            <div className='flex space-x-3'>
            <img src={iconCheck} alt='checkbox' className='border object-contain'/>
            <p className='text-sm'>Complete online JavaScript course</p>
            </div>
            <img src={iconCross} alt='cancel' className='object-contain cursor-pointer'/>
            </div>
         </div>

         <div className='border-b'>
            <div className='py-4 px-4 flex justify-between items-center'>       
            <div className='flex space-x-3'>
            <img src={iconCheck} alt='checkbox' className='border object-contain'/>
            <p className='text-sm'>Complete online JavaScript course</p>
            </div>
            <img src={iconCross} alt='cancel' className='object-contain cursor-pointer'/>
            </div>
         </div>

         <footer className='py-4 px-4 flex justify-between'>
            <p ref={elementOneRef} className='text-xs'>5 items left</p>
            <div ref={elementTwoRef} 
            className='flex-1 hidden md:flex justify-center items-center space-x-3 text-sm'>
                  <p>All</p>  
                  <p>Active</p>  
                  <p>Completed</p>  
            </div>
            <p ref={elementThreeRef} className='text-xs'>Clear Completed</p>
         </footer>
        </div>
     )
}