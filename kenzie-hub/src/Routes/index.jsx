import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import LoginPage from "../pages/Login";
import PageNotFound from "../pages/NotFound";
import PrivetRoute from "../pages/PrivetRoute";
import RegisterPage from "../pages/Register";

function AppRoutes() {
  const navigate = useNavigate();

  function sendLoginPage() {
    navigate("/");
  }

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route
        path="/Register"
        element={<RegisterPage sendLoginPage={sendLoginPage} />}
      />
      <Route path="*" element={<PageNotFound />} />

      <Route path="/Dashboard" element={<PrivetRoute />}>
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
