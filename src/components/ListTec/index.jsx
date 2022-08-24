import { useAuth } from "../../context/AuthContext";
import { List } from "./styles";
import CardList from "../CardTec";

function ListTec() {
  const { techs } = useAuth();

  return (
    <List>
      {techs.map((tec) => (
        <CardList key={tec.id} tec={tec} />
      ))}
    </List>
  );
}

export default ListTec;
