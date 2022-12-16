import { useState, createContext, useContext } from "react"

const DentistContext = createContext()

export function DentistInfoProvider(props) {

    const [infoDentist, setDentistInfo] = useState(() => {
        fetch('https://dhodonto.ctdprojetos.com.br/dentista').then(
            response => {
                response.json().then(
                data => {
                setDentistInfo(data)
                }
                )
            }
        )
    })

    return(
        <DentistContext.Provider value={{infoDentist}}>
            { props.children }
        </DentistContext.Provider>
    )
}

export function useDentistInfo() {
    const context = useContext(DentistContext)
    return context
}