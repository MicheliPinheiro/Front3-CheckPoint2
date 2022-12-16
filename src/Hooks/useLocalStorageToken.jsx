import { useState, createContext, useContext } from "react"

const LocalStorageTokenContext = createContext()

export function LocalStorageTokenProvider(props) {

    const [localStorageToken, setLocalStorageToken] = useState(localStorage.getItem('token') || "")

    function changeLocalStorageToken(localStorageTokenReceived) {
        localStorage.setItem('token', localStorageTokenReceived)
        setLocalStorageToken(localStorageTokenReceived)
    }

    return(
        <LocalStorageTokenContext.Provider value={{localStorageToken, changeLocalStorageToken}}>
            {props.children}
        </LocalStorageTokenContext.Provider>
    )
}

export function useLocalStorageToken() {
    const context = useContext(LocalStorageTokenContext)
    return context
}