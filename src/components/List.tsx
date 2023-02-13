import iconCross from '../assets/todo-app-main/images/icon-cross.svg'
import iconCheck from '../assets/todo-app-main/images/icon-check.svg'
import { useEffect, useRef, useState } from 'react'
import { useGlobalContext } from './Context';

export default function List() {

   const { elementWidth, setElementWidth } = useGlobalContext();
   
   const elementRef = useRef<HTMLDivElement>(null!);  

   const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
   

   useEffect(() => {
     const handleResize = ():void => {
      setWindowWidth(window.innerWidth);
     }
     window.addEventListener('resize', handleResize);
     return () => window.removeEventListener('resize', handleResize);
   }, []);

   useEffect(() => {
    setElementWidth(elementRef.current.getBoundingClientRect().width)
   }, [windowWidth]);

    
     return (
        <div className="rounded-md bg-white my-4 shadow-lg w-full">
         <div className='border-b cursor-pointer'>
            <div className='py-4 px-4 flex justify-between items-center'>       
            <div className='flex space-x-3'>
            <img src={iconCheck} alt='checkbox' className='border object-contain'/>
            <p className='text-sm'>Complete online JavaScript course</p>
            </div>
            <img src={iconCross} alt='cancel' className='object-contain'/>
            </div>
         </div>

         <div className='border-b cursor-pointer'>
            <div className='py-4 px-4 flex justify-between items-center'>       
            <div className='flex space-x-3'>
            <img src={iconCheck} alt='checkbox' className='border object-contain'/>
            <p className='text-sm'>Complete online JavaScript course</p>
            </div>
            <img src={iconCross} alt='cancel' className='object-contain'/>
            </div>
         </div>

         <div className='border-b cursor-pointer'>
            <div className='py-4 px-4 flex justify-between items-center'>       
            <div className='flex space-x-3'>
            <img src={iconCheck} alt='checkbox' className='border object-contain '/>
            <p className='text-sm'>Complete online JavaScript course</p>
            </div>
            <img src={iconCross} alt='cancel' className='object-contain'/>
            </div>
         </div>

         <footer className='py-4 px-4 flex justify-between'>
            <p className='text-sm'>5 items left</p>
            <div ref={elementRef} 
            className='flex-1 hidden md:flex justify-center items-center space-x-3 text-sm'>
                  <p>All</p>  
                  <p>Active</p>  
                  <p>Completed</p>  
                </div>
            <p className='text-sm'>Clear Completed</p>
         </footer>
        </div>
     )
}