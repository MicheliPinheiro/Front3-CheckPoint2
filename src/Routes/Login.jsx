import LoginForm from "../Components/LoginForm/LoginForm";
import { useDentistInfo } from "./../Hooks/useDentistInfo";

const Contact = () => {
  const {infoDentist} = useDentistInfo()
  return (
    <>
      <h1>Login</h1>
      <LoginForm />
    </>
  );
};

export default Contact