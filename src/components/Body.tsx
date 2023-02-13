import bglm from '../assets/todo-app-main/images/bg-mobile-light.jpg'
import bgld from '../assets/todo-app-main/images/bg-desktop-light.jpg'
import ListContainer from './ListContainer'
import { useGlobalContext } from './Context'
import { useEffect, useRef } from 'react'

export default function Body() {
 
    const elementRef = useRef<HTMLParagraphElement>(null!); 
    const { elementWidth } = useGlobalContext()

    useEffect(() => {
        console.log(elementRef.current.getBoundingClientRect().width)
        console.log(elementWidth)
    }, )
  

    return (
        <main className="min-h-screen relative bg-vlight-grey">
            <div className='h-60'>
            <img src={bglm} alt='hero background' className='lg:hidden w-full h-full object-cover'/>
            <img src={bgld} alt='hero background' className='hidden lg:block w-full h-full object-cover'/>
            </div>
            <div className='absolute md:flex md:justify-center w-full top-0 left-0 px-6'>
            <div className='w-full md:w-[500px] lg:w-1/3'>
             <ListContainer/>
             <footer>
                <div className='flex justify-center items-center md:hidden space-x-3 bg-white py-4 rounded-md shadow-lg'>
                  <p>All</p>  
                  <p>Active</p>  
                  <p>Completed</p>  
                </div>
                <p ref={elementRef} className={`${elementWidth ? `w-[${elementWidth}px]` : ''} border mt-8 text-center text-sm`}>
                    Drag and drop to reorder list
                </p>
             </footer>
                </div>
            </div>
        </main>
    )
}