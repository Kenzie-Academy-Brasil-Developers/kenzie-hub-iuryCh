import StyledHeader from "./style.js";
import logo from "../../assets/imagens/Logo.svg";


function Header(sendBack, setUser) {
  function logOut() {
    setUser(null);
    localStorage.clear();
    sendBack();
  }
  return (
    <StyledHeader>
      <div>
        <img src={logo} alt="logo kenzie hub" />
        <button onClick={logOut}>Sair</button>
      </div>
      <div></div>
    </StyledHeader>
  );
}

export default Header;
