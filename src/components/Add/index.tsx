import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { MdClose } from "react-icons/md";
import { Form } from "./styles";
import { INewTech,useAuth } from "../../context/AuthContext";
import { Input } from "../InputComp";
import { createSchema } from "../../validators/tec";

function Add() {
  const { setModal, saveNewTech } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<INewTech>({ resolver: yupResolver(createSchema) });
  return (
    <>
      <div>
        <h3>Cadastrar Tecnologia</h3>
        <button onClick={() => setModal(null)}>
          <MdClose />
        </button>
      </div>
      <Form onSubmit={handleSubmit(saveNewTech)}>
        <Input
          id="title"
          register={register}
          err={errors?.title}
          label="Nome"
          placeholder="Tecnologia"
        />
        <label htmlFor="status">Selecionar status</label>
        <select id="status" {...register("status")}>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>
        <button type="submit">Cadastrar Tecnologia</button>
      </Form>
    </>
  );
}

export default Add;
