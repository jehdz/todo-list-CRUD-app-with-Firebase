import iconMoon from '../assets/todo-app-main/images/icon-moon.svg' 
import iconSun from '../assets/todo-app-main/images/icon-sun.svg'
import Input from './Input'
import List from './List'
import { useGlobalContext } from './Context'

export default function ListContainer() {

    const { theme, setTheme } = useGlobalContext();
    
    const handleThemeChange = () => {
      const isCurrentDark = theme === 'dark';
      setTheme(isCurrentDark ? 'light' : 'dark');
      localStorage.setItem('default-theme', isCurrentDark ? 'light' : 'dark');
    };

    return (
        <div className='mt-10'>
            <header className='flex justify-between'>
                <h1 className='font-bold text-3xl tracking-widest text-white'>TODO</h1>
                <div onClick={handleThemeChange}>
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