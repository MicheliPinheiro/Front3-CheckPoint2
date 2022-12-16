import Card from "./../Components/Card/Card.jsx"
import { useDentistInfo } from "./../Hooks/useDentistInfo"

const Home = () => {
  const { dentistInfo } = useDentistInfo()

  return (
    <>
      <h1>Página Inicial</h1>
      <div className="card-grid container">
        {dentistInfo && dentistInfo.map(container => {
            return (
              <Card key={container.matricula} containerData={container} />
            )
        })
        }
      </div>
    </>
  )
}

export default Home