import bglm from '../assets/todo-app-main/images/bg-mobile-light.jpg'
import ListContainer from './ListContainer'


export default function Body() {

    return (
        <main className="min-h-screen relative bg-vlight-grey">
            <div className='h-60'>
            <img src={bglm} alt='hero background' className='w-full h-full object-cover'/>
            </div>
            <div className='absolute w-full top-0 left-0 px-6'>
             <ListContainer/>
             <footer>
                <div className='flex justify-center items-center space-x-3 bg-white py-4 rounded-md shadow-lg'>
                  <p>All</p>  
                  <p>Active</p>  
                  <p>Completed</p>  
                </div>
                <p className='mt-8 text-center'>Drag and drop to reorder list</p>
             </footer>
            </div>
        </main>
    )
}