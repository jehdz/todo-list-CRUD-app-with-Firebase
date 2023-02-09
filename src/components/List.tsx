import iconCross from '../assets/todo-app-main/images/icon-cross.svg'
import iconCheck from '../assets/todo-app-main/images/icon-check.svg'

export default function List() {

     return (

        <div className="rounded-md bg-white my-4 shadow-lg">

         <div className='border-b'>
            <div className='py-4 px-4 flex justify-between items-center'>       
            <div className='flex space-x-3'>
            <img src={iconCheck} alt='checkbox' className='border object-contain'/>
            <p className='text-sm'>Complete online JavaScript course</p>
            </div>
            <img src={iconCross} alt='cancel' className='object-contain'/>
            </div>
         </div>

         <div className='border-b'>
            <div className='py-4 px-4 flex justify-between items-center'>       
            <div className='flex space-x-3'>
            <img src={iconCheck} alt='checkbox' className='border object-contain'/>
            <p className='text-sm'>Complete online JavaScript course</p>
            </div>
            <img src={iconCross} alt='cancel' className='object-contain'/>
            </div>
         </div>

         <div className='border-b'>
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
            <p className='text-sm'>Clear Completed</p>
         </footer>
        </div>
     )
}