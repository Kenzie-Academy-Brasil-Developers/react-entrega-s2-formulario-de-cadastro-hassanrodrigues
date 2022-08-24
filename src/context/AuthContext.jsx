import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../services/api";
import {
  register,
  registerError,
  login,
  loginError,
  logoutToast,
  removeTecnologh,
  edit,
  create,
  createError,
} from "../components/MsgToasts";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [techs, setTechs] = useState([]);
  const [tech, setTech] = useState([]);
  const [modal, setModal] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  async function loadUser() {
    const token = localStorage.getItem("@kenzie-hub:token");

    if (token) {
      try {
        api.defaults.headers.authorization = `Bearer ${token}`;
        const { data } = await api.get("/profile");
        setUser(data);
        setTechs(data.techs);
      } catch (error) {
        console.error(error);
      }
    }
    setLoading(false);
  }
  useEffect(() => {
    loadUser();
  }, []);

  async function logIn(data) {
    try {
      const response = await api.post("/sessions", data);
      const { user: userResponse, token } = response.data;
      api.defaults.headers.authorization = `Bearer ${token}`;
      setUser(userResponse);
      setTechs(userResponse.techs);
      localStorage.setItem("@kenzie-hub:token", token);
      const navigateTo = location.state?.from?.pathname || "/dashboard";
      navigate(navigateTo, { replace: true });
      login();
    } catch (error) {
      loginError();
    }
  }

  function logout() {
    setUser(null);
    navigate(`/`, { replace: true });
    localStorage.clear();
    logoutToast();
  }

  async function registerUser(data) {
    try {
      const response = await api.post("/users", data);
      navigate(`/`, { replace: true });
      register();
    } catch (error) {
      registerError();
    }
  }

  async function saveNewTech(data) {
    try {
      const response = await api.post(`/users/techs/`, data);
      create();
      loadUser();
      setModal(null);
    } catch (error) {
      createError();
    }
  }

  async function editTech(data) {
    try {
      const response = await api.put(`/users/techs/${tech.id}`, data);
      edit();
      loadUser();
      setModal(null);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteTech() {
    try {
      const response = await api.delete(`/users/techs/${tech.id}`);
      removeTecnologh();
      loadUser();
      setModal(null);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        techs,
        tech,
        setTech,
        loading,
        modal,
        setModal,
        logIn,
        logout,
        registerUser,
        saveNewTech,
        editTech,
        deleteTech,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
