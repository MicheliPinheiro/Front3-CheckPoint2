import DetailCard from "../Components/DetailCard/DetailCard"
import { useParams } from "react-router-dom";
import { useDentistInfo } from "./../Hooks/useDentistInfo.jsx"

const Detail = () => {
  
  const { dentistInfo } = useDentistInfo()
  const { id } = useParams()

  return (
    <>
      {dentistInfo && <DetailCard 
        dentistInfoDetail={dentistInfo.find(dentista => dentista.matricula === id)}
      />}      
    </>
  )
}

export default Detail