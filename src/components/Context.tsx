import React, { useContext, useState } from "react";

type ValueProp = {
    elementWidth: number | null
    setElementWidth: React.Dispatch<React.SetStateAction<number | null>>
}

type ContextProp = {
    children: React.ReactNode
} 

export const AppContext = React.createContext({} as ValueProp)

export default function Context({ children }: ContextProp) {

    const [ elementWidth , setElementWidth ] = useState<number | null>(null)

    return (
        <AppContext.Provider value={{ elementWidth, setElementWidth}}>
            {children}
         </AppContext.Provider>
    )
}

export const useGlobalContext = ():ValueProp => {
    return useContext(AppContext);
}