import { Card } from "./styles";
import { useAuth } from "../../context/AuthContext";

function CardList({ tec }) {
  const { setModal, setTech, deleteTech } = useAuth();

  function handleClick() {
    setModal("edit");
    setTech(tec);
  }

  return (
    <Card onClick={handleClick}>
      <h3>{tec.title}</h3>
      <p>{tec.status}</p>
      <span>
        <button onClick={() => deleteTech()}>Excluir</button>
      </span>
    </Card>
  );
}

export default CardList;
