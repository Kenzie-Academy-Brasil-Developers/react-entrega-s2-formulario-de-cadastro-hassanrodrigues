import { Routes, Route, Navigate } from "react-router-dom";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Login";
import ProtectedRoutes from "../components/ProtectedRoutes";

function RouteKenzieHub() {
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/register" element={<Register />} />
    <Route element={<ProtectedRoutes />}>
      <Route path="/dashboard" element={<Dashboard />} />
    </Route>
    <Route path="*" element={<Navigate to={"/"} replace />} />
  </Routes>
  );
}

export default RouteKenzieHub;
