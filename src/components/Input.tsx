import { useState, useEffect } from "react"
import { useGlobalContext } from "./Context";

export default function Input() {
    const { handleSubmit, state } = useGlobalContext()
    const [title, setTitle ] = useState<string>('');

    useEffect(() => {
        console.log(state)
    }, [state])

    const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        handleSubmit(title, 'active')
        setTitle('')
    }

    return (
        <form onSubmit={formSubmit}>
            <input value={title} 
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Create a new todo...'
            className="bg-white pl-6 w-full h-12 rounded-lg mt-10 outline-none"/>
        </form>
    )
}