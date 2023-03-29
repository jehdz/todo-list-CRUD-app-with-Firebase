import { useState } from "react"
import { useGlobalContext } from "./Context";
import { collection, getFirestore } from "firebase/firestore";
import { app } from './Context'
import { addDoc } from "firebase/firestore"; 

export const db = getFirestore(app);

export default function Input() {
    
    const { handleSubmit, userId } = useGlobalContext()
    const [ title, setTitle ] = useState<string>('');

    const formSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();
            try {
                await addDoc(collection(db, 'users', userId, 'tasks'), {
                     title,
                     completed: false,
                 })
                console.log('successfully added')
            }
            catch(e) {
                console.log(e, 'unsuccessful')
        }
        handleSubmit(title, false)
        setTitle('')
    }

    return (
        <form onSubmit={formSubmit}>
            <input value={title} 
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Create a new todo...'
            className="input pl-6 w-full h-12 rounded-lg font-bold mt-10 outline-none"/>
        </form>
    )
}