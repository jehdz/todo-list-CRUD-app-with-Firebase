import React, { useContext, useState, useReducer } from "react";
import { reducer } from "./reducer";
import { HandleDisplayAll, HandleFilter, HandleDelete, State, HandleComplete, HandleClearCompleted } from "./types";
import { HandleSubmitType } from "./types";
import { ValueProp } from "./types";
import { ContextProp } from "./types";
import { v4 as uuid } from 'uuid';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyB2Mnz669pSezmF3owUwL_BPSm9RMFf2OA",
    authDomain: "todo-list-app-2a8be.firebaseapp.com",
    projectId: "todo-list-app-2a8be",
    storageBucket: "todo-list-app-2a8be.appspot.com",
    messagingSenderId: "517189314629",
    appId: "1:517189314629:web:206b83c96f6371789c1b2c",
    measurementId: "G-QMG7FW0DN1"
  };

export const app = initializeApp(firebaseConfig);

const initialState : State = []
 
export const AppContext = React.createContext({} as ValueProp);

export default function Context({ children }: ContextProp) {
    
    const [state, dispatch] = useReducer(reducer, initialState);
    const [ elementWidth , setElementWidth ] = useState<number | null>(null);
    const [ theme, setTheme ] = useState<string>('light')

    const handleSubmit: HandleSubmitType = ( title, completed ) => {
        const id = uuid()
        dispatch({type: 'CREATE_NEW_TODO' , payload:{ id, title, completed}})       
    }

    const handleStateFilter: HandleFilter = ( completed ) => {
        dispatch({ type: 'HANDLE_STATE_FILTER', payload:{ completed }})
    }
    
    const handleDisplayAll: HandleDisplayAll = () => {
        dispatch({ type: 'HANDLE_DISPLAY_ALL'})
    }

    const handleDelete: HandleDelete = (id) => {
        dispatch({ type: 'HANDLE_DELETE', payload: { id }})
    } 

    const handleComplete: HandleComplete = (id) => {
        dispatch({ type: 'HANDLE_COMPLETE', payload: { id }})
    }

    const handleClearCompleted: HandleClearCompleted = () => {
        dispatch({ type: 'HANDLE_CLEAR_COMPLETED'})
    } 

    return (
        <AppContext.Provider value={{ theme, setTheme, elementWidth, setElementWidth, state, 
        handleSubmit, handleStateFilter, handleDelete, handleComplete, handleClearCompleted}}>
            {children}
         </AppContext.Provider>
    )
}

export const useGlobalContext = ():ValueProp => {
    return useContext(AppContext);
}
