import { useState } from "react"
import { useGlobalContext } from "./Context";
import { collection } from "firebase/firestore";
import { addDoc } from "firebase/firestore"; 
import { db } from "./firebaseConfig";

export default function Input() {
    
    const { userId } = useGlobalContext()
    const [ title, setTitle ] = useState<string>('');

    const formSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();
            try {
                await addDoc(collection(db, 'users', userId, 'tasks'), {
                     title,
                     completed: false,
                 })
                setTitle('')
                console.log('successfully added')
            }
            catch(e) {
                console.log(e, 'unsuccessful')
        }
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