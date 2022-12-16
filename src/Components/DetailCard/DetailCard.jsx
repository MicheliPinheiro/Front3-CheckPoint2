import { useEffect, useState } from "react"
import { useTheme } from "./../../Hooks/useTheme"
import styles from "./../DetailCard/DetailCard.module.css"
import ScheduleFormModal from "./../ScheduleFormModal/ScheduleFormModal"

const DetailCard = (props) => {
  const {theme} = useTheme()

  useEffect(() => {
  }, [])

  return (
    <>
      <h1>Detalhes sobre Dr(a).: {props.dentistInfoDetail.nome} </h1>
      <section className="card col-sm-12 col-lg-6 container">
        <div className={theme === 'dark' ? `card-body row card-${theme} ${styles.cardDark}` : `card-body row`}>
          <div className="col-sm-12 col-lg-6">
            <img className="card-img-top" src="/images/doctor.jpg" alt="doctor placeholder" />
          </div>
          <div className="col-sm-12 col-lg-6">
            <ul className="list-group">
              <li className="list-group-item">Nome: {props.dentistInfoDetail.nome}</li>
              <li className="list-group-item">Sobrenome: {props.dentistInfoDetail.sobrenome}
              </li>
              <li className="list-group-item"> Usuário: {props.dentistInfoDetail.usuario.username}
              </li>
            </ul>
            <div className="text-center">
              <button data-bs-toggle="modal" data-bs-target="#exampleModal" className={`btn btn-${theme} ${styles.button}`}>Agendar consulta</button>
            </div>
          </div>
        </div>
      </section>
      <ScheduleFormModal />
    </>
  )
}

export default DetailCard