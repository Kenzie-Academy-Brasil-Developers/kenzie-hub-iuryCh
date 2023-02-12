import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import LoginPage from "../pages/Login";
import PageNotFound from "../pages/NotFound";
import RegisterPage from "../pages/Register";

function AppRoutes({setUser, user}) {
  const navigate = useNavigate();
  function sendBack() {
    navigate(-1);
  }

  function sendLoginPage() {
    navigate("/");
  }

  return (
    <Routes>
      <Route
        path="/"
        element={<LoginPage setUser={setUser} />}
      />
      <Route path="/Dashboard" element={<Dashboard sendBack={sendBack} setUser={setUser} user={user} />} />
      <Route
        path="/Register"
        element={<RegisterPage sendLoginPage={sendLoginPage} />}
      />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default AppRoutes;
