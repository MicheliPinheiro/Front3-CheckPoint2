import { useState, createContext, useContext } from "react"

const PatientContext = createContext()

export function PatientInfoProvider(props) {
    const [infoPatient, setPatientInfo] = useState(() => {
        fetch('https://dhodonto.ctdprojetos.com.br/paciente').then(
          response => {
            response.json().then(
              data => {
                setPatientInfo(data.body)
              }
            )
          }
        )
    })

    return(
        <PatientContext.Provider value={{infoPatient}}>
            {props.children}
        </PatientContext.Provider>
    )
}

export function usePatientInfo() {
    const context = useContext(PatientContext)
    return context
}