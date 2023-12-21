"use client";

import { createContext, useState } from "react";

export const ThemeContext = createContext();

//Getting the theme value from local storage so that it remains consistent even after refreshing the browser
const getFromLocalStorage = () =>{

    //To ensure the func runs only as a client component func and not as a server component (Nextjs default: server component)
    if(typeof window !== 'undefined'){
        const value = localStorage.getItem("theme");
        return value || "light";
    }
};

export const ThemeContextProvider = ({children}) => {
    const [theme, setTheme] = useState(() => {
        return getFromLocalStorage();
    });

    //Context can be used throughout the application
    return <ThemeContext.Provider value={{theme}}>{children}</ThemeContext.Provider>
}