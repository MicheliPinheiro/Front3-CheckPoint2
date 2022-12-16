import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useTheme } from "./../../Hooks/useTheme"
import styles from "./Form.module.css"

const LoginForm = () => {

  const [password, setPassword] = useState('')
  const [login, setLogin] = useState('')
  const [checkInputs, setCheckInputs] = useState(false)
  const [token, setToken] = useState('')
  const navigate = useNavigate()
  const {theme} = useTheme()

  function passValidation(password) {
    setPassword(password)
    console.log(password)
  }

  function loginValidation(login) {
    setLogin(login)
    console.log(login)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  const dados = {"username": login, "password": password}

  let requestHeaders = {'Content-Type': 'application/json'}

  let requestConfiguration = {method: 'POST', body: JSON.stringify(dados), headers: requestHeaders}

  try {
    fetch(`http://dhodonto.ctdprojetos.com.br/auth`, requestConfiguration)
        .then(response => {
          if (response.status === 200) {
            response.json()
              .then(dados => {
                setToken(dados.token)
                localStorage.setItem('token', dados.token)
                navigate('/home')
              })
          } else {
            setCheckInputs(true)
            alert('Login ou senha incorreto')
          }
        })
    } catch (error) {
      console.log(error)
    }
  
  return (
    <>
      <div className={theme === 'dark' ? `text-center card container ${styles.card} ${styles.cardDark}` : `text-center card container ${styles.card}`}>
        <div className={`card-body ${styles.cardBody}`}>
          <form onSubmit={handleSubmit}>
            <input
              className={`form-control ${styles.inputSpacing} ${checkInputs ? `${styles.formError}` : ''}`}
              placeholder="Login"
              name="login"
              required
              onChange={(event) => setLogin(event.target.value)}
            />
            <input
              className={`form-control ${styles.inputSpacing}`}
              placeholder="Password"
              name="password"
              type="password"
              required
              onChange={(event) => setPassword(event.target.value)}
            />
            <button className="btn btn-primary" type="submit" onClick={(event) => handleSubmit(event)}>Enviar</button>
          </form>
        </div>
      </div>
    </>
  )
      }
export default LoginForm
