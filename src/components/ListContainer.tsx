import iconMoon from '../assets/todo-app-main/images/icon-moon.svg' 
import iconSun from '../assets/todo-app-main/images/icon-sun.svg'
import Input from './Input'
import List from './List'

export default function ListContainer() {

    return (
        <div className='mt-10'>
            <header className='flex justify-between'>
                <h1 className='font-bold text-3xl tracking-widest text-white'>TODO</h1>
                <img src={iconMoon} alt='moon' className='object-contain cursor-pointer'/>
            </header>
            <Input/>
            <List/>
        </div>
    )
}