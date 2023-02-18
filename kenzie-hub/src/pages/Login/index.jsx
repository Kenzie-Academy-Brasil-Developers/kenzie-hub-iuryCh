import { Link, Navigate, useNavigate } from "react-router-dom";
import logo from "../../assets/imagens/Logo.svg";
import StyledLogin from "./style.js";
import LoginForm from "../../components/Form/LoginForm";
import { useEffect } from "react";

function LoginPage({ sendToDashboard, setUser }) {
  const token = localStorage.getItem("@TOKEN");

  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/Dashboard");
    }
  }, []);

  return (
    <StyledLogin>
      <img src={logo} alt="logo kenzie hub" />
      <div className="box-form">
        <div className="form">
          <h2>Login</h2>
          <LoginForm sendToDashboard={sendToDashboard} setUser={setUser} />
          <p className="footer_msg">Ainda não possui uma conta ? </p>

          <Link to={"/Register"}>Cadastrar-se</Link>
        </div>
      </div>
    </StyledLogin>
  );
}

export default LoginPage;
