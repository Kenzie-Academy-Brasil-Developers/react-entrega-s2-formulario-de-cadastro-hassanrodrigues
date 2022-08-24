import { BiErrorAlt } from "react-icons/bi";
import { Container, Error } from "./styles";
export const Input = ({ id, register, err, label, placeholder }) => (
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

export const Password = ({ id, register, err, label, placeholder }) => (
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
