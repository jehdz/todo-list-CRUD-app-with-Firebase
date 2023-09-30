import TodoMain from './components/Todo'
import  { useGlobalContext } from './components/Context'
import { Navigate } from 'react-router-dom'

export default function Todo() {

  const { theme } = useGlobalContext()
  const authFromSessionStorage = sessionStorage.getItem('auth')
  
    return (
     (authFromSessionStorage) ? ( 
      <div className={`theme-${theme}`}>
      <TodoMain/>
      </div>
     ):
    <Navigate to='/' replace={true}/>
    )
}