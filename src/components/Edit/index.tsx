import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { MdClose } from "react-icons/md";
import { editSchema } from "../../validators/tec";
import { Form } from "./styles";
import {IEditTech, useAuth } from "../../context/AuthContext";

function Edit() {
  const { setModal, tech, editTech } = useAuth();

  const {
    register,
    handleSubmit,
  } = useForm<IEditTech>({ resolver: yupResolver(editSchema) });

  return (
    <>
      <div>
        <h3>Tecnologia - Detalhes</h3>
        <button onClick={() => setModal("")}>
          <MdClose />
        </button>
      </div>
      <Form onSubmit={handleSubmit(editTech)}>
        <label htmlFor="title">Tecnologia</label>
        <input id="title" value={tech?.title} disabled />
        <label htmlFor="status">Status</label>
        <select id="status" {...register("status")} defaultValue={tech?.status}>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>
        <div>
          <button type="submit">Salvar Tecnologia</button>
        </div>
      </Form>
    </>
  );
}

export default Edit;
