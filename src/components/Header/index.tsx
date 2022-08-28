import { Header as Head } from "./styles";
import { useAuth } from "../../context/AuthContext";
function Header() {
  const { user } = useAuth();
  return (
    <Head>
      <div>
        <h3>Olá, {user?.name}!</h3>
        <p>{user?.course_module}</p>
      </div>
    </Head>
  );
}

export default Header;
