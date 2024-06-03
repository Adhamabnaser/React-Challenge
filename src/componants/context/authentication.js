import { createContext, useEffect, useState } from "react";

export const authContext = createContext()
export function AuthProvider({children}) 
{
    const [token , setToken] = useState(null)
    useEffect(function () 
    {
        if (localStorage.getItem("tkn") != null) 
        {
           let x =  localStorage.getItem("tkn")
           setToken(x);
        }
    }, [])

    const [theme , setTheme]= useState('dark')
   
    const handleSwitchTheme = ()=>
    {
      setTheme(theme==='dark'?'light':'dark')
      console.log(theme);
    }

    return <authContext.Provider value={{token , setToken , theme, handleSwitchTheme}}>
                 {children}   
           </authContext.Provider>   
}