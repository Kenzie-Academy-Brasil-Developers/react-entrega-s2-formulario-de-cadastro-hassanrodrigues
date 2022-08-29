import { BiErrorAlt } from "react-icons/bi";
import { Container, Error } from "./styles";
import { IInputProps } from "../../context/AuthContext";


function PasswordLogin({ id, register, err, label, placeholder }:IInputProps) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <Container>
        <input
          type="password"
          id={id}
          placeholder={placeholder}
          {...register(id)}
          maxLength="25"
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
}
export default PasswordLogin;
