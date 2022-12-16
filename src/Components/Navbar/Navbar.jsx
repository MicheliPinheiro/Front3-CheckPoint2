import { useEffect, useState } from "react"
import { useLogin } from "./../../Hooks/useLogin"
import { useTheme } from "./../../Hooks/useTheme"
import styles from "./Navbar.module.css"

const Navbar = () => {
  const { theme, changeTheme } = useTheme()
  
  const { authToken, deleteToken } = useLogin()

  return (
    <header className={`sticky-top `}>
      <nav className={`navbar navbar-expand-sm navbar-${theme} bg-${theme}`} aria-label="Third navbar example">
        <div className={`container `}>
          <a className={`navbar-brand ${styles.navbarBrand}`} href="/home">DH Odonto</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample03"
            aria-controls="navbarsExample03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarsExample03">
            <ul className="navbar-nav mb-2 mb-sm-0">
              <li className={`nav-item ${styles.navBarLink}`}>
                <a className="nav-link" href="/home">Home</a>
              </li>
              <li className={`nav-item ${styles.navBarLink}`}>
                {authToken !== null ? (
                  <button className="btn btn-light" onClick={deleteToken}>Sair</button>
                ) : (
                  <a className="nav-link" href="/login">Acessar</a>
                )}
              </li>
              <li className={`nav-item`}>
                <button className={`btn btn-${theme} ${styles.btnStyle}`}  onClick={() => changeTheme(theme === 'dark' ? 'light' : 'dark')}>
                  {theme === 'dark' ? '☀' : '🌙'}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar