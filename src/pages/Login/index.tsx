import { useAuth } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";
import Login from "../../components/Login";
import Svg from "../../components/Svg";
import Main from "./styles";

function Home() {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Carregando...</div>;
  }

  return user ? (
    <Navigate to="/dashboard" replace />
  ) : (
    <Main>
      <Svg />
      <Login />
    </Main>
  );
}

export default Home;
