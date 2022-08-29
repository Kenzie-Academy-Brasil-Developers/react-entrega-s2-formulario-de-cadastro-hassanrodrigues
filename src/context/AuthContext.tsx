import { createContext, useContext, useEffect, useState,ReactNode } from "react";
import {  useNavigate } from "react-router-dom";
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

export interface IAuthProviderProps {
  children: ReactNode;
}
export interface IInputProps {
  id: string;
  register: any;
  err: any;
  label: string;
  placeholder: string;
 
}

export interface ITech {
  id: string;
  title: string;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
  techs: ITech[];
}

export interface IUserRegister {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  bio: string;
  contact: string;
  course_module: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface INewTech {
  title: string;
  status: string;
}
export interface IUserData {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
  techs: ITech[] | [];
  works: [];
  created_at: string;
  updated_at: string;
  avatar_url: null;
}
export interface INewTechPostId {
  id: string;
}

interface INewTechPost {
  id: string;
  title: string;
  status: string;
  user: INewTechPostId;
  created_at: string;
  updated_at: string;
}

interface ILoginUser {
  user: IUserData;
  token: string;
}
export type IEditTech = Omit<INewTech,"title">;

interface IAuthContext {
  user: IUser | null;
  techs: ITech[];
  tech: ITech | null;
  setTech: any;
  loading: Boolean;
  modal: string | null;
  setModal: any;
  logIn: (data: IUserLogin) => void;
  logout: () => void;
  registerUser: (data: IUserRegister) => void;
  saveNewTech: (data: INewTech) => void;
  editTech: (status: IEditTech) => void;
  deleteTech: () => void;
}
export async function userLogin(userData: IUserLogin): Promise<ILoginUser> {
  const { data } = await api.post<ILoginUser>("/sessions", userData);

  return data;

}

export const AuthContext = createContext({} as IAuthContext);


const AuthProvider = ({ children }:IAuthProviderProps) => {
  const [loading, setLoading] = useState<Boolean>(true);
  const [user, setUser] = useState<IUser | null>(null);
  const [techs, setTechs] = useState<ITech[] | []>([]);
  const [tech, setTech] = useState<ITech | null>(null);
  const [modal, setModal] = useState<string | null>(null);

  const navigate = useNavigate();

  async function loadUser() {
    const token = localStorage.getItem("@kenzie-hub:token");

    if (token) {
      try {
        const token = localStorage.getItem("@kenzie-hub:token");
        const { data } = await api.get<IUserData>("/profile", {
           headers: {
              Authorization: `Bearer ${token}`,
          },
        });
        setUser(data);
        setTechs(data.techs);
        navigate("/dashboard", { replace: true });

      } catch (error) {
        console.error(error);
      }
    }
    setLoading(false);
   
  }
  useEffect(() => {
    loadUser();
  }, []);

  async function logIn(data: IUserLogin): Promise<void> {
    userLogin(data)
      .then((response) => {
        setUser(response.user);
        setTechs(response.user.techs);

        localStorage.setItem("@kenzie-hub:token", response.token);

        navigate("/dashboard", { replace: true });
        login();
      })
      .catch(() => loginError());
  }



  function logout() {
    setUser(null);
    navigate(`/`, { replace: true });
    localStorage.clear();
    logoutToast();
  }

  async function registerUser( data:IUserRegister): Promise<void> {
    try {
      await api.post("/users", data);
      navigate(`/`, { replace: true });
      register();
    } catch (error) {
      registerError();
    }
  }

  async function saveNewTech(data:INewTech):Promise<void> {
    try {
      const token = localStorage.getItem("@kenzie-hub:token");
     await api.post<INewTechPost>("/users/techs/", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      create();
      loadUser();
      setModal(null);
    } catch (error) {
      createError();
    }
  }

  async function editTech(data:IEditTech):Promise<void> {
    try {
      await api.put(`/users/techs/${tech?.id}`, data);
      edit();
      loadUser();
      setModal(null);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteTech():Promise<void> {
    const token = localStorage.getItem("@kenzie-hub:token");
    try {
    await api.delete<INewTechPostId>(`/users/techs/${tech?.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      await removeTecnologh();
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
