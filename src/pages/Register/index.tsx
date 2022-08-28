import { useNavigate } from "react-router-dom";
import { NavRegister } from "../../components/Nav";
import RegisterForm from "../../components/Register";
import { Main } from "./styles";

const Register = () => {
  const navigate = useNavigate();

  return (
    <>
      <NavRegister onClickFunc={() => navigate(`/`)} />
      <Main>
        <RegisterForm />
      </Main>
    </>
  );
};

export default Register;
