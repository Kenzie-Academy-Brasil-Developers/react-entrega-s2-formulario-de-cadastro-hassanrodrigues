import { useAuth } from "../../context/AuthContext";
import { Container } from "./styles";
import Add from "../Add";
import Edit from "../Edit";

function MainModal() {
  const { modal } = useAuth();

  return (
    <Container>
      <div className="modal_container">
        {modal === "add" ? <Add /> : <Edit />}
      </div>
    </Container>
  );
}

export default MainModal;
