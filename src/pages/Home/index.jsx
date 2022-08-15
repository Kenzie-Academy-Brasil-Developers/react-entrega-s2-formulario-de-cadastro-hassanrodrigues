import { useForm } from "react-hook-form";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import { userLogin as schema } from "../../validators/loginUser";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { Form } from "../../styles/Forms";
import Label from "../../components/Label";
import { Button } from "../../styles/button";
import { H2 } from "../../styles/Titles";
import { Input as InputComp } from "../../styles/Input";
import Messages from "../../components/Messages";
import "./style.css";

function Home() {
  useEffect(() => {
    if (localStorage.getItem("@userToken") && localStorage.getItem("@userID")) {
      navigate("/dashboard", { replace: true });
    }
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();
  const loginData = (data) => {
    axios
      .post("https://kenziehub.herokuapp.com/sessions", data)
      .then((response) => {
        console.log(response.data);
        window.localStorage.clear();
        window.localStorage.setItem("@userToken", response.data.token);
        window.localStorage.setItem("@userID", response.data.user.id);
        toast.success("Login efetuado com sucesso!");
        navigate("/dashboard", { replace: true });
      })
      .catch((error) => toast.error("Email ou senha não cadastrados!"));
  };

  const toRegister = () => {
    navigate("/register", { replace: true });
  };

  return (
    <div>
      <h1 className="logoLogin">Kenzie Hub</h1>
      <Form onSubmit={handleSubmit(loginData)}>
        <H2>Login</H2>

        <Label htmlFor="email">Email</Label>
        <InputComp
          type="text"
          id="email"
          placeholder="Digite seu email"
          {...register("email")}
        />
        <Messages>{errors.email?.message}</Messages>

        <Label htmlFor="password">Senha</Label>
        <InputComp
          type="password"
          id="password"
          placeholder="Digite sua senha"
          {...register("password")}
        />
        <Messages>{errors.password?.message}</Messages>

        <Button type="submit">Entrar</Button>
        <p className="msgRegister">Ainda não possui uma conta?</p>
        <button
          className="buttonRegister"
          onClick={() => toRegister()}
          type="submit"
        >
          Cadastre-se
        </button>
      </Form>
    </div>
  );
}
export default Home;
