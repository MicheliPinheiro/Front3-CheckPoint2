import { useContext, useState,  createContext } from "react"

const LoginContext = createContext()

export function LoginProvider(props) {
  const loginLocalStorage = localStorage.getItem('authToken')
  const [authToken, setAuthToken] = useState(loginLocalStorage)

  function deleteToken() {
    localStorage.removeItem('authToken')
    setAuthToken(localStorage.getItem('authToken'))
  }

  function handleSetAuthToken(token) {
    localStorage.setItem('authToken', token)
    setAuthToken(token)
  }

  return (
    <LoginContext.Provider value={{ authToken, handleSetAuthToken, deleteToken }}>
      {props.children}
    </LoginContext.Provider>
  )
}

export function useLogin() {
  const context = useContext(LoginContext)
  return context
}