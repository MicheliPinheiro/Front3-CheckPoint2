import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, redirect, RouterProvider } from "react-router-dom"
import App from './App'
import { DentistInfoProvider } from "./Hooks/useDentistInfo"
import { LocalStorageTokenProvider } from "./Hooks/useLocalStorageToken"
import { PatientInfoProvider } from "./Hooks/usePatientInfo"
import { ThemeProvider } from "./Hooks/useTheme"
import "./style.css"
import Detail from "./Routes/Detail"
import Home from "./Routes/Home"
import Login from "./Routes/Login"

const root = ReactDOM.createRoot(document.getElementById("root"));

const appRouter = createBrowserRouter([
  {
    path: '',
    element: <App/>,
    children: [
      {
        path: 'home',
        element: <Home/>
      },
      {
        path: 'login',
        element: <Login/>
      },
      {
        path: 'dentist/:id',
        element: <Detail/>
      },
      { 
        path: '', 
        loader: () => redirect('/home')
      }
    ]
  }

])

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <LocalStorageTokenProvider>
        <DentistInfoProvider>
          <PatientInfoProvider>
            <RouterProvider router={appRouter} />
          </PatientInfoProvider>
        </DentistInfoProvider>
      </LocalStorageTokenProvider>
    </ThemeProvider>
  </React.StrictMode>
);