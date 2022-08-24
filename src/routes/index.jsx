import { Routes, Route } from "react-router-dom";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Login";

function RouteKenzieHub() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default RouteKenzieHub;
