import { render, userEvent, fireEvent, screen } from "../../test-utils"
import Login from '../../../Routes/Login';
import Navbar from "../../../Components/Navbar"
import Card from "../../../Components/Card"
import Home from '../../../Routes/Home'
import Detail from '../../../Routes/Detail'
import DetailCard from '../../../Components/DetailCard'

test('Teste de login', () => {
  render(<Login />)
  expect(screen.getByText('Login')).toBeInTheDocument();
})

test('Teste de direcionamento da página inicial', () => {
  render(<Home />)
  expect(screen.getByText('Home')).toBeInTheDocument();
});

test("Teste sem token", ()=>{
  render(<Navbar/>);
  fireEvent.click(screen.getByText('Home'))
  expect(screen.getByText('Login')).toBeInTheDocument();
});

test('Teste do cartão de detalhes', ()=>{
  const infoDentista = { nome:'Ivin', usuario:{username:'iv'}, matricula:'1010'}
  render(<DetailCard dentistInfoDetail={infoDentista} />)
  expect(screen.getByText('Agendar consulta')).toBeInTheDocument();
});

test('Teste dos campos de Login', ()=>{
  render(<Login/>);
  const inputLogin = screen.getByPlaceholderText("Login")
  const inputPassword = screen.getByPlaceholderText("Password")
  fireEvent.change(inputLogin, {target: {value:"dentistaAdmin"}})
  fireEvent.change(inputPassword, {target: {value: "admin123"}})
  expect(inputLogin.value).toBe("dentistaAdmin");
  expect(inputPassword.value).toBe("admin123");
  });
