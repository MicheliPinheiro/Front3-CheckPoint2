import Home from "./Routes/Home"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Layout } from "./Components/Layout/Layout"
import DetailCard from "./Components/DetailCard/DetailCard"
import LoginForm from "./Components/LoginForm/LoginForm"
import { ThemeProvider } from "./Hooks/useTheme"
import { LoginProvider } from './Hooks/useLogin'
import './style.css'

function App() {
  const appRouter = createBrowserRouter([
    {
      path: '',
      element: <Layout />,
      children: [
        {
          path: '',
          element: <Home />
        },
        {
          path: 'home',
          element: <Home />
        },
        {
          path: 'dentista/:id',
          element: <DetailCard />
        },
        {
          path: 'login',
          element: <LoginForm />
        }
      ]
    }
  ])

  return (
    <div>
      <LoginProvider>
        <ThemeProvider>
          <RouterProvider router={appRouter} />
        </ThemeProvider>
      </LoginProvider>
    </div>
  )
}

export default App