import { Nav as N } from "./styles";
import { Container } from "./styles";
import Logo from "../../assets/Img/Logo.svg";

export function NavDash({ onClickFunc }) {
  return (
    <N>
      <div>
        <Logo />
        <button onClick={onClickFunc}>Sair</button>
      </div>
    </N>
  );
}

export const NavRegister = ({ onClickFunc }) => {
  return (
    <Container>
      <div>
        <Logo />
        <button onClick={onClickFunc}>Voltar</button>
      </div>
    </Container>
  );
};
