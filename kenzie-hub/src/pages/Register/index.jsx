import logo from "../../assets/imagens/Logo.svg";
import StyledRegister from "./style.js";

import RegisterForm from "../../components/Form/RegisterForm";

function RegisterPage({ sendLoginPage }) {
  return (
    <StyledRegister>
      <div className="box_container">
        <div className="box_topregister">
          <h1>
            <img src={logo} alt="logo kenzie hub" />
          </h1>
          <button onClick={sendLoginPage}>Voltar</button>
        </div>
        <div className="box_groundcolor">
          <div className="box_form">
            <h2>Crie sua conta</h2>
            <p className="box_form--subtitle">Rapido e grátis, vamos nessa</p>
            <RegisterForm />
          </div>
        </div>
      </div>
    </StyledRegister>
  );
}

export default RegisterPage;
