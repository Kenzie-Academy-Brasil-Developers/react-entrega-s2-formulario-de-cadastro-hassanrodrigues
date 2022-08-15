import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/index";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";

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
