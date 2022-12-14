import { useState } from "react";
import { createContext, useContext } from "react";


const ThemeContext = createContext()

export function ThemeProvider(props){
    //Controle do tema aplicado
    const themeLocalStorage = localStorage.getItem('theme')
    const [theme, setTheme] = useState(themeLocalStorage || "")

    function changeTheme(themeReceived){
        if(themeReceived !== 'dark'){
            setTheme('dark')
            localStorage.setItem("theme", 'dark')
        }
        else{
            setTheme('')
            localStorage.setItem("theme", '')
        }
    }

    return (
        <ThemeContext.Provider value={{theme, changeTheme}}>
            { props.children }
        </ThemeContext.Provider>
    )
}

export function useTheme() {

    const context = useContext(ThemeContext)
    return context

}