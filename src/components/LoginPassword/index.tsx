import { BiErrorAlt } from "react-icons/bi";
import { Container, Error } from "./styles";
interface IPasswordProps {
  id: string;
  register: any;
  err: any;
  label: string;
  placeholder: string;
 
 
}

function PasswordLogin({ id, register, err, label, placeholder }:IPasswordProps) {
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
