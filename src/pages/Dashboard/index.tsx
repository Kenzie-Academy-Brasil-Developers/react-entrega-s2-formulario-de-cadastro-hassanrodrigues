import { Main } from "./styles";
import { NavDash as Nav } from "../../components/Nav";
import { useAuth } from "../../context/AuthContext";
import ListTec from "../../components/ListTec";
import ListNav from "../../components/List";
import MainModal from "../../components/Modal";
import Header from "../../components/Header";

const Dashboard = () => {
  const { logout, modal } = useAuth();

  return (
    <>
      {modal && <MainModal />}
      <Nav onClickFunc={logout} />
      <Header />

      <Main>
        <ListNav />
        <ListTec />
      </Main>
    </>
  );
};

export default Dashboard;
