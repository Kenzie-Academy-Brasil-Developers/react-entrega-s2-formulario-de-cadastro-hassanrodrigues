import { List as Div } from "./styles";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { useAuth } from "../../context/AuthContext";

const List = () => {
  const { setModal } = useAuth();

  return (
    <Div>
      <h2>Tecnologias</h2>
      <button onClick={() => setModal("add")}>
        <BsFillPlusCircleFill />
      </button>
    </Div>
  );
};

export default List;
