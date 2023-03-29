import iconCross from '../assets/todo-app-main/images/icon-cross.svg'
import { useEffect, useRef, useState } from 'react'
import { useGlobalContext } from './Context';
import { motion, AnimatePresence } from "framer-motion"
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from './Input';

type Task = {
   title: string,
   completed: boolean,
   id:string,  
}[];

export default function List() {
   
   const { setElementWidth, state, handleStateFilter, handleComplete, handleClearCompleted, userId } = useGlobalContext();
   
     const elementOneRef = useRef<HTMLParagraphElement>(null!);  
     const elementTwoRef = useRef<HTMLDivElement>(null!);  
     const elementThreeRef = useRef<HTMLParagraphElement>(null!);  
     const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
     // tasks   
     const [ tasks, setTasks ] = useState<Task | null>(null);
 
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

   useEffect(() => {(async () => {
   try {
       const querySnapshot = await getDocs(collection(db, `users/${userId}/tasks`));
       const mappedData = querySnapshot.docs.map((doc) => {
         const data = doc.data();
         return {  //return data compatible with data types specified in the tasks variable 
            title: data.title,
            completed: data.completed,
            id: doc.id,
          }
       });
       setTasks(mappedData)
      }
      catch(e) {
         console.log(e)     
      }
   })() //IIFE
    }, [userId])

   const handleDelete = async (id: string): Promise<void> => {
      await deleteDoc(doc(db, `users/${userId}/tasks/${id}`));
   }

     return (
      <div className='relative my-4'>
        <div className="list rounded-md bg-white shadow-lg w-full">
         {
            tasks ? ( //since tasks might be undefined 
               tasks.map(task => {
               const { id, title, completed } = task;
   
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
                 onClick={() => handleDelete(id)} //non-null example to prevent: "Argument of type 'string | undefined' is not assignable to parameter of type 'string'.
                // Type 'undefined' is not assignable to type 'string'.ts(2345)" erorr
                 className='object-contain cursor-pointer'/>
                 </div> 
                 </motion.div>
                 </AnimatePresence>
               )
               })
            ) : <p className='text-center text-sm'>Loading Todos</p>
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