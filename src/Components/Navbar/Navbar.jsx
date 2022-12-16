import { Link } from 'react-router-dom'
import { useLocalStorageToken } from "./../../Hooks/useLocalStorageToken"
import { useTheme } from "./../../Hooks/useTheme"
import styles from "./Navbar.module.css"

const Navbar = () => {


  const {theme, changeTheme} = useTheme()
  const {localStorageToken, changeLocalStorageToken} = useLocalStorageToken()

  return (
    <header className={`sticky-top`}>
      <nav className={`navbar navbar-expand-sm navbar-${theme} bg-${theme}`} aria-label="Third navbar example">
        <div className={`container`}>
          <Link className={`navbar-brand ${styles.navbarBrand}`} to="home">DH Odonto</Link>
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
                <Link className="nav-link" to="home">Home</Link>
              </li>
              <li className={`nav-item ${styles.navBarLink}`}>
                <Link className="nav-link" to="login" onClick={(event)=>{if(event.target.innerHTML === 'Logout'){changeLocalStorageToken('')}}} >{localStorageToken ? 'Logout': 'Login'}</Link>
              </li>
              <li className={`nav-item`}>
                <button
                  className={`btn btn-${theme}`}
                  onClick={() => changeTheme(localStorage.getItem('theme') === 'dark' ? 'light' : 'dark')}
                >
                  {theme === 'dark' ? '🌙':'☀' }
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