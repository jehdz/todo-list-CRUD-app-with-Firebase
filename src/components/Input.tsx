import { useState } from "react"

export default function Input() {

    const [value, setValue ] = useState<string>('');

    return (
        <input value={value} 
        onChange={(e) => setValue(e.target.value)}
        placeholder='Create a new todo...'
        className="bg-white pl-6 w-full h-12 rounded-lg mt-10"/>
    )
}