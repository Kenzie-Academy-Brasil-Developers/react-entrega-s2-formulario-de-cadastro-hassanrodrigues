import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Loading from "../Load";

const ProtectedRoutes = () => {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <Loading />;

  return user ? <Outlet /> : <Navigate to="/" replace />;
};
export default ProtectedRoutes;
