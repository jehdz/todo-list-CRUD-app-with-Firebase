import { useState } from "react"
import { useGlobalContext } from "./Context";

export default function Input() {
    const { handleSubmit } = useGlobalContext()
    const [title, setTitle ] = useState<string>('');

    const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        handleSubmit(title, false)
        setTitle('')
    }

    return (
        <form onSubmit={formSubmit}>
            <input value={title} 
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Create a new todo...'
            className="list pl-6 w-full h-12 rounded-lg mt-10 outline-none"/>
        </form>
    )
}