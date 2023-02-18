import React, { useContext, useState, useReducer } from "react";
import { reducer } from "./reducer";
import { State } from "./types";
import { HandleSubmitType } from "./types";
import { ValueProp } from "./types";
import { ContextProp } from "./types";

const initialState : State = []
 
export const AppContext = React.createContext({} as ValueProp)

export default function Context({ children }: ContextProp) {
    
    const [state, dispatch] = useReducer(reducer, initialState);
    const [ elementWidth , setElementWidth ] = useState<number | null>(null);

    const handleSubmit: HandleSubmitType = (id, title, status) =>
    dispatch({type: 'CREATE_NEW_TODO' , payload:{id, title, status}})  
    
    return (
        <AppContext.Provider value={{ elementWidth, setElementWidth, state, handleSubmit}}>
            {children}
         </AppContext.Provider>
    )
}

export const useGlobalContext = ():ValueProp => {
    return useContext(AppContext);
}
