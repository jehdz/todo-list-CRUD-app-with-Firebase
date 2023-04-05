import React, { useContext, useState, useReducer } from "react";
import { ValueProp } from "./types";
import { ContextProp } from "./types";
 
export const AppContext = React.createContext({} as ValueProp);

export default function Context({ children }: ContextProp) {

    const isBrowserDefaultDark = ():boolean => window.matchMedia('(prefers-color-scheme: dark)').matches;

    const getDefaultTheme = (): string => {
        const localStorageTheme = localStorage.getItem('default-theme');
        const browserDefault = isBrowserDefaultDark() ? 'dark' : 'light';
        return localStorageTheme || browserDefault;
      };

    const [ elementWidth , setElementWidth ] = useState<number | null>(null);
    const [ theme, setTheme ] = useState<string>(getDefaultTheme())
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
