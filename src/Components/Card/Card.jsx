import { Link } from "react-router-dom"
import { useTheme } from "./../../Hooks/useTheme"
import styles from "./Card.module.css"


const Card = (props) => {

  const {theme} = useTheme()


  return (
    <>
      <div className={theme === 'dark' ? `card ${styles.CardDark}` : `card`}>
        <img
          className="card-img-top"
          src="/images/doctor.jpg"
          alt="doctor placeholder"
        />
        <div className={`card-body ${styles.CardBody}`}>
          {/* Na linha seguinte o link deverá utilizar a matricula, nome e sobrenome do dentista
          que vem da API */}
          <Link to={`/dentist/${props.containerData.matricula}`}>
            <h5 className={`card-title ${styles.title}`}>{props.containerData.nome}{props.containerData.sobrenome}</h5>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Card