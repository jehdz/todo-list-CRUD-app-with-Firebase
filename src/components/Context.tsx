import React, { useContext, useState, useReducer } from "react";
import { ValueProp } from "./types";
import { ContextProp } from "./types";
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
 
export const AppContext = React.createContext({} as ValueProp);

export default function Context({ children }: ContextProp) {
    
    const [ elementWidth , setElementWidth ] = useState<number | null>(null);
    const [ theme, setTheme ] = useState<string>('light')
    const [ userId, setUserId ] = useState<string>('')

    return (
        <AppContext.Provider value={{ theme, setTheme, 
            elementWidth, setElementWidth, userId, setUserId}}>
            {children}
         </AppContext.Provider>
    )
}

export const useGlobalContext = ():ValueProp => {
    return useContext(AppContext);
}
