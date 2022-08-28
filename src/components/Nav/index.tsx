import { Nav as N } from "./styles";
import { Container } from "./styles";
import Svg from "../Svg";

export function NavDash({ onClickFunc }:any) {
  return (
    <N>
      <div>
        <Svg />
        <button onClick={onClickFunc}>Sair</button>
      </div>
    </N>
  );
}

export const NavRegister = ({ onClickFunc }:any) => {
  return (
    <Container>
      <div>
        <Svg />
        <button onClick={onClickFunc}>Voltar</button>
      </div>
    </Container>
  );
};
