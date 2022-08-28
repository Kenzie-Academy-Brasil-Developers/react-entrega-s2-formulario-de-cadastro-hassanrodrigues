import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { userLogin as schema } from "../../validators/registerUser";
import { Input, Password } from "../InputComp";
import { useAuth ,IUserRegister} from "../../context/AuthContext";
import { Container } from "./styles";

function Register() {
  const { registerUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserRegister>({ resolver: yupResolver(schema) });

  return (
    <>
      <Container>
        <div>
          <h3>Crie sua conta</h3>
          <p>Rápido e grátis, vamos nessa</p>
        </div>
        <form onSubmit={handleSubmit(registerUser)}>
          <Input
            id="name"
            register={register}
            err={errors?.name}
            placeholder="Digite aqui seu nome!"
            label="Nome"
          />
          <Input
            id="email"
            register={register}
            err={errors?.email}
            placeholder="Digite aqui seu email!"
            label="Email"
          />
          <Password
            id="password"
            register={register}
            err={errors?.password}
            placeholder="Digite aqui seu senha!"
            label="Senha"
          />
          <Password
            id="confirmPassword"
            register={register}
            err={errors?.confirmPassword}
            placeholder="Digite aqui seu senha!"
            label="Confirmar senha"
          />
          <Input
            id="bio"
            register={register}
            err={errors?.bio}
            placeholder="Digite aqui sua biografia!"
            label="Bio"
          />
          <Input
            id="contact"
            register={register}
            err={errors?.contact}
            placeholder="(99) 99999-9999"
            label="Contato"
          />

          <label htmlFor="course_module">Selecionar módulo</label>
          <select id="course_module" {...register("course_module")}>
            <option value="Primeiro módulo (Introdução ao Frontend)">
              Primeiro Módulo
            </option>
            <option value="Segundo módulo (Frontend Avançado)">
              Segundo Módulo
            </option>
            <option value="Terceiro módulo (Introdução ao Backend)">
              Terceiro Módulo
            </option>
            <option value="Quarto módulo (Backend Avançado)">
              Quarto Módulo
            </option>
          </select>

          <button type="submit">Cadastrar</button>
        </form>
      </Container>
    </>
  );
}

export default Register;
