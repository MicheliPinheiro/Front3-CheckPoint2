import { useContext, useEffect, useState } from "react"
import { useTheme } from "./../../Hooks/useTheme"
import styles from "./ScheduleForm.module.css"

const ScheduleForm = () => {
  useEffect(() => {
    }, [])

  const handleSubmit = (event) => {
    };

  const { theme } = useTheme()

  return (
    <>
      <div className={theme === 'dark' ? `text-center container ${styles.cardDark}` : `text-center container`}>
        <form onSubmit={handleSubmit}>
          <div className={`row ${styles.rowSpacing}`}>
            <div className="col-sm-12 col-lg-6">
              <label htmlFor="dentist" className="form-label">Dentista</label>
              <select className="form-select" name="dentist" id="dentist">
                <option key={'Matricula do dentista'} value={'Matricula do dentista'}>{`Nome Sobrenome`}</option>
              </select>
            </div>
            <div className="col-sm-12 col-lg-6">
              <label htmlFor="patient" className="form-label">Paciente</label>
              <select className="form-select" name="patient" id="patient">
                <option key={'Matricula do paciente'} value={'Matricula do paciente'}>{`Nome Sobrenome`}</option>
              </select>
            </div>
          </div>
          <div className={`row ${styles.rowSpacing}`}>
            <div className="col-12">
              <label htmlFor="appointmentDate" className="form-label">Data</label>
              <input className="form-control" id="appointmentDate" name="appointmentDate" type="datetime-local"/>
            </div>
          </div>
          <div className={`row ${styles.rowSpacing}`}>
            <button className={`btn btn-light ${styles.button}`} type="submit">Cronograma</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default ScheduleForm
