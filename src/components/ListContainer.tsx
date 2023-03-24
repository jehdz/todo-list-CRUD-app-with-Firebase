import iconMoon from '../assets/todo-app-main/images/icon-moon.svg' 
import iconSun from '../assets/todo-app-main/images/icon-sun.svg'
import Input from './Input'
import List from './List'
import { useGlobalContext } from './Context'
import { useToggle } from './hooks/useToggle'

export default function ListContainer() {

    const { theme } = useGlobalContext();
    const handleToggle = useToggle()

    return (
        <div className='mt-10'>
            <header className='flex justify-between'>
                <h1 className='font-bold text-3xl tracking-widest text-white'>TODO</h1>
                <div onClick={handleToggle}>
                {
                   theme === 'light' ?
                   <img src={iconMoon} alt='moon' className='object-contain cursor-pointer'/>
                   :  <img src={iconSun} alt='moon' className='object-contain cursor-pointer'/>
                }
                </div>
            </header>
            <Input/>
            <List/>
        </div>
    )
}
