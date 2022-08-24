import { Nav as N } from "./styles";
import { Container } from "./styles";
import Svg from "../../components/Svg";

export function NavDash({ onClickFunc }) {
  return (
    <N>
      <div>
        <Svg />
        <button onClick={onClickFunc}>Sair</button>
      </div>
    </N>
  );
}

export const NavRegister = ({ onClickFunc }) => {
  return (
    <Container>
      <div>
        <Svg />
        <button onClick={onClickFunc}>Voltar</button>
      </div>
    </Container>
  );
};
