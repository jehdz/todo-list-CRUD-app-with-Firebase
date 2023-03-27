import iconCross from '../assets/todo-app-main/images/icon-cross.svg'
import { useEffect, useRef, useState } from 'react'
import { useGlobalContext } from './Context';
import { motion, AnimatePresence } from "framer-motion"

export default function List() {

   const { setElementWidth, state, handleStateFilter, handleDelete, handleComplete, handleClearCompleted } = useGlobalContext();
   
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
    setElementWidth(elementTwoRef.current.getBoundingClientRect().width)
   }, [windowWidth]);

    
     return (
      <div className='relative my-4'>
        <div className="list rounded-md bg-white shadow-lg w-full">
         {
            state.map(item => {
            const { id, title, completed } = item;

            return (
              <AnimatePresence key={id}>
              <motion.div 
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 30, opacity: 0 }}
                transition={{ type:'spring', ease: 'easeOut', duration: .5, stiffness:'70'}}
                className='single-item'>
              <div className='py-4 px-4 flex justify-between items-center'>       
              <div className='flex space-x-3'>

              <label className='text-sm flex font-bold list-text'>
              <input type="checkbox"
              checked={completed} 
              onChange={() => handleComplete(id!)}
              className="w-4 h-4 mr-3
              focus:ring-0 rounded-full checked:bg-gradient-to-r
              checked:from-pblue checked:to-ppurple 
              checked:text-white"/>          
               {
                 completed ? 
                 <s className='completed'>{title}</s> 
                 : <span>{title}</span>
               }          
              </label>
              </div>
              <img src={iconCross} alt='cancel' 
              onClick={() => handleDelete(id!)} //non-null example to prevent: "Argument of type 'string | undefined' is not assignable to parameter of type 'string'.
             // Type 'undefined' is not assignable to type 'string'.ts(2345)" erorr
              className='object-contain cursor-pointer'/>
              </div> 
              </motion.div>
              </AnimatePresence>
            )
            })
         }

        </div>
         <footer className=' w-full drag-color font-bold py-4 px-4 flex justify-between'>
         <p ref={elementOneRef} className='text-xs'>{state.filter(item => item.completed === false).length} items left</p>
         <div ref={elementTwoRef} 
            className='flex-1 hidden md:flex justify-center items-center space-x-3 text-sm'>
               <p className='cursor-pointer'>All</p>  
               <p className='cursor-pointer'
                  onClick={() => handleStateFilter(false)}>Active
               </p>  
               <p className='cursor-pointer'
                  onClick={() => handleStateFilter(true)}>Completed
               </p>  
            </div>
            <p ref={elementThreeRef} className='cursor-pointer text-xs'
             onClick={handleClearCompleted}>Clear Completed</p>
         </footer>
         </div>
     )
}