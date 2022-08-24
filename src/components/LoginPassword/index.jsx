import { BiErrorAlt } from "react-icons/bi";
import { Container, Error } from "./styles";

function PasswordLogin({ id, type, register, error, label, placeholder }) {
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
        {error?.message && (
          <Error>
            <BiErrorAlt />
            <span>{error?.message}</span>
          </Error>
        )}
      </Container>
    </>
  );
}
export default PasswordLogin;
