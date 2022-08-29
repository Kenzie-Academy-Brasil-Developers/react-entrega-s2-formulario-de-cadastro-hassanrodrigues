import { BiErrorAlt } from "react-icons/bi";
import { Container, Error } from "./styles";
import { IInputProps } from "../../context/AuthContext";



export const Input = ({ id, register, err, label, placeholder }:IInputProps) => (
  <>
    <label htmlFor={id}>{label}</label>
    <Container>
      <input id={id} type="text" placeholder={placeholder} {...register(id)} />
      {err?.message && (
        <Error>
          <BiErrorAlt />
          <span>{err?.message}</span>
        </Error>
      )}
    </Container>
  </>
);

export const Password = ({ id, register, err, label, placeholder }:IInputProps) => (
  <>
    <label htmlFor={id}>{label}</label>
    <Container>
      <input
        id={id}
        type="password"
        placeholder={placeholder}
        {...register(id)}
      />
      {err?.message && (
        <Error>
          <BiErrorAlt />
          <span>{err?.message}</span>
        </Error>
      )}
    </Container>
  </>
);
