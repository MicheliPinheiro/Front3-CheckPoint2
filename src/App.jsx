import { Link, Outlet } from 'react-router-dom'
import Footer from "../src/Components/Footer/Footer"
import Navbar from "../src/Components/Navbar/Navbar"
import { useTheme } from "./Hooks/useTheme"

function App() {
  const { theme } = useTheme()

  return (
    <>
      <div className={`${theme}`}>
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  )

}
export default App