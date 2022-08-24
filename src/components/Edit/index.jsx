import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { MdClose } from "react-icons/md";
import { editSchema } from "../../validators/tec";
import { Form } from "./styles";
import { useAuth } from "../../context/AuthContext";
import Label from "../Label/";

function Edit() {
  const { setModal, tech, editTech } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(editSchema) });

  return (
    <>
      <div>
        <h3>Tecnologia - Detalhes</h3>
        <button onClick={() => setModal(null)}>
          <MdClose />
        </button>
      </div>
      <Form onSubmit={handleSubmit(editTech)}>
        <Label htmlFor="title">Tecnologia</Label>
        <input id="title" value={tech.title} disabled />
        <Label htmlFor="status">Status</Label>
        <select id="status" {...register("status")} defaultValue={tech.status}>
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
