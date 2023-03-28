import { useState } from "react"
import { useGlobalContext } from "./Context";
import { collection, getFirestore } from "firebase/firestore";
import { app } from './Context'
import { addDoc, doc } from "firebase/firestore"; 
import { auth } from "../login-auth";


export default function Input() {
    
    const db = getFirestore(app);
    const { handleSubmit } = useGlobalContext()
    const [title, setTitle ] = useState<string>('');

    const userId = auth.currentUser?.uid

    const formSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(userId) {
            try {
                await addDoc(collection(db, 'users', userId, 'tasks'), {
                     title
                 })
                console.log('successfully added')
            }
            catch(e) {
                console.log(e)
            }
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