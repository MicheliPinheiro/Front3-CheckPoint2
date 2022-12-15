import DetailCard from "../Components/DetailCard";
import { useEffect , useState } from "react";

const Detail = () => {
  
  const [detail, setDetail] = useState([])

  //Isso ainda não está bom.
  useEffect(() => {
    fetch('https://dhodonto.ctdprojetos.com.br/dentista').then(
      response => {
        response.json().then(
          data => {
            setDetail(data);
          }
        )
      }
    )
  }, [])

  return (
    <>
      <DetailCard />
    {
      detail.map(detail => {
          return (
            <DetailCard 
              containerData={detail}
            />
          )
        }
      )
    }
    </>
  )
}

export default Detail