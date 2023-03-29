import TodoMain from './components/Todo'
import Context, { useGlobalContext } from './components/Context'
import { auth } from './login-auth'
import { Navigate } from 'react-router-dom'
import { collection } from "firebase/firestore";

export default function Todo() {

  const { theme } = useGlobalContext()

    return (
     (auth.currentUser !== null) ? ( 
      <div className={`theme-${theme}`}>
      <TodoMain/>
      </div>
     ):
    <Navigate to='/' replace={true}/>
    )
}