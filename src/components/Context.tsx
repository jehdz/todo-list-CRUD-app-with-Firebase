import React, { useContext, useState, useReducer } from "react";
import { reducer } from "./reducer";
import { HandleDisplayAll, HandleFilter, HandleDelete, State } from "./types";
import { HandleSubmitType } from "./types";
import { ValueProp } from "./types";
import { ContextProp } from "./types";
import { v4 as uuid } from 'uuid';

const initialState : State = []
 
export const AppContext = React.createContext({} as ValueProp)

export default function Context({ children }: ContextProp) {
    
    const [state, dispatch] = useReducer(reducer, initialState);
    const [ elementWidth , setElementWidth ] = useState<number | null>(null);

    const handleSubmit: HandleSubmitType = ( title, status ) => {
        const id = uuid()
        dispatch({type: 'CREATE_NEW_TODO' , payload:{ id, title, status}})       
    }

    const handleStateFilter: HandleFilter = ( title ) => {
        dispatch({ type: 'HANDLE_STATE_FILTER', payload:{ title }})
    }
    
    const handleDisplayAll: HandleDisplayAll = () => {
        dispatch({ type: 'HANDLE_DISPLAY_ALL'})
    }

    const handleDelete: HandleDelete = (id) => {
        dispatch({ type: 'HANDLE_DELETE', payload: { id }})
    } 

    return (
        <AppContext.Provider value={{ elementWidth, setElementWidth, state, handleSubmit, handleStateFilter, handleDelete}}>
            {children}
         </AppContext.Provider>
    )
}

export const useGlobalContext = ():ValueProp => {
    return useContext(AppContext);
}
