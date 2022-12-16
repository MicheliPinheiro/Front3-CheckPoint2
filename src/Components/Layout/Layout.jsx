import { Outlet } from "react-router-dom"
import { useTheme } from "./../../Hooks/useTheme"
import Footer from "./../Footer/Footer"
import Navbar from "./../Navbar/Navbar"

export function Layout() {
  const { theme } = useTheme()

  return (
    <div className={`${theme}`}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}