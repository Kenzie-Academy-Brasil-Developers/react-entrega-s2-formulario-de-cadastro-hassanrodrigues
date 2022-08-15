import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userLogin as schema } from "./../../validators/registerUser";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { FormRegister } from "../../styles/Forms";
import { H2 } from "./../../styles/Titles";
import { Button, GrayButton } from "../../styles/button";
import Label from "./../../components/Label";
import Messages from "./../../components/Messages/index";
import { Input, Select } from "./../../styles/Input";
import "./style.css";
import "../../index.css";

function Register() {
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
      .post("https://kenziehub.herokuapp.com/users", data)
      .then((response) => {
        console.log(response.data);
        toast.success("Usuário cadastrado com sucesso");
        setTimeout(() => {
          navigate("/", { replace: true });
        }, 3000);
      })
      .catch((error) => toast.error("Alguma coisa deu errado!!!"));
  };
  const toHome = () => {
    navigate("/", { replace: true });
  };

  return (
    <div>
      <div className="headerRegister">
        <h1 className="logoRegister">Kenzie Hub</h1>
        <GrayButton className="btnBack" onClick={() => toHome()}>
          Voltar
        </GrayButton>
      </div>
      <FormRegister onSubmit={handleSubmit(loginData)}>
        <H2>Crie sua conta</H2>
        <p className="msgRegister">Rápido e grátis, vamos nessa...</p>
        <Label htmlFor="name">Nome</Label>
        <Input
          type="text"
          id="name"
          placeholder="Digite aqui seu nome."
          {...register("name")}
        />
        <Messages>{errors.name?.message}</Messages>

        <Label htmlFor="email">Email</Label>
        <Input
          type="text"
          id="email"
          placeholder="Digite aqui seu email."
          {...register("email")}
        />
        <Messages>{errors.email?.message}</Messages>

        <Label htmlFor="password">Senha</Label>
        <Input
          type="password"
          id="password"
          placeholder="Digite aqui sua senha."
          {...register("password")}
        />
        <Messages>{errors.password?.message}</Messages>

        <Label htmlFor="confirm-Password">Confirmar Senha</Label>
        <Input
          type="password"
          id="confirmPassword"
          placeholder="Digite novamente sua senha."
          {...register("confirmPassword")}
        />
        <Messages>{errors.confirmPassword?.message}</Messages>

        <Label htmlFor="bio">Bio</Label>
        <Input
          type="text"
          id="bio"
          placeholder="Fale sobre você"
          {...register("bio")}
        />
        <Messages>{errors.bio?.message}</Messages>

        <Label htmlFor="contato">Contato</Label>
        <Input
          type="text"
          id="contato"
          placeholder="Opção de contato"
          {...register("contact")}
        />
        <Messages>{errors.contato?.message}</Messages>

        <Label htmlFor="modulo">Selecionar módulo</Label>
        <Select
          type="text"
          id="modulo"
          placeholder="Escolha o módulo"
          {...register("course_module")}
        >
          <option>Primeiro módulo (Introdução ao Frontend)</option>
          <option>Segundo módulo (Frontend Avançado)</option>
          <option>Terceiro módulo (Introdução ao Backend)</option>
          <option>Quarto Módulo (Backend Avançado)</option>
        </Select>
        <Messages>{errors.modulo?.message}</Messages>

        <Button type="submit">Cadastrar</Button>
      </FormRegister>
    </div>
  );
}

export default Register;
