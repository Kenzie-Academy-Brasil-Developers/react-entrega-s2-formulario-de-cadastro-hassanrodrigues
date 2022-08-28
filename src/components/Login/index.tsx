import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormContainer } from "./styles";
import { userLogin as schema } from "../../validators/loginUser";
import { Input } from "../InputComp";
import { useAuth,IUserLogin } from "../../context/AuthContext";
import PasswordLogin from "../LoginPassword";

const Login = () => {
  const { logIn } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserLogin>({
    resolver: yupResolver(schema),
  });

  return (
    <>
      <FormContainer>
        <h3>Login</h3>
        <form onSubmit={handleSubmit(logIn)}>
          <Input
            id="email"
            register={register}
            err={errors?.email}
            label="Email"
            placeholder="Digite aqui seu email"
          />
          <PasswordLogin
            id="password"
            register={register}
            err={errors?.password}
            label="Senha"
            placeholder="Digite aqui sua senha"
          />
          <button type="submit">Entrar</button>
        </form>
        <p>Ainda não possui uma conta?</p>
        <Link to={`/register`}>Cadastre-se</Link>
      </FormContainer>
    </>
  );
};

export default Login;
