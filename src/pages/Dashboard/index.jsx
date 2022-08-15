import { useEffect, useState } from "react";
import { Dashboard } from "./styles";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../services/api";
import "../Home/style.css";
import { GrayButton } from "../../styles/button";
import { SectionUser } from "../../styles/section";
import Footer from "../../components/Footer/index";
import { H2 } from "../../styles/Titles";

const DashboardPage = () => {
  const [UserId, setUserId] = useState(null);
  const [UserModule, setUserModule] = useState(null);

  useEffect(() => {
    const userID = localStorage.getItem("@userID");
    api
      .get(`/users/${userID}`)
      .then((response) => {
        setUserId(response.data.name);
        setUserModule(response.data.course_module);
      }, [])
      .catch((err) => console.log(err));
  });

  const navigate = useNavigate();

  const logout = () => {
    window.localStorage.clear();
    navigate("/", { replace: true });
    toast.success("Logout efetuado com sucesso");
    setTimeout(() => {}, 3000);
  };

  return (
    <div>
      <div className="dash">
        <Dashboard>
          <h1 className="logoLogin">Kenzie Hub</h1>
          <GrayButton onClick={() => logout()} type="submit">
            Sair
          </GrayButton>
        </Dashboard>
        <SectionUser>
          <H2>{UserId}</H2>
          <p className="msgRegister">{UserModule}</p>
        </SectionUser>
        <Footer>
          <H2>Que pena! Estamos em desenvolvimento :</H2>
          <h3 className="h3Footer">
            Nossa aplicação está em desenvolvimento, em breve teremos novidades.
          </h3>
        </Footer>
      </div>
    </div>
  );
};

export default DashboardPage;
