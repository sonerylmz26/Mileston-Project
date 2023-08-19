import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import NavBar from "../components/NavBar";

const AppRouter = () => {
  return (
    <Router>
      <NavBar />
      <Routes>

      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      
      </Routes>
    </Router>
  );
};

export default AppRouter;
