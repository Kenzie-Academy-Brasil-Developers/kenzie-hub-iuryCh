import logo from "../../assets/imagens/Logo.svg";
import Header from "../../components/Header";
import StyledMain from "./style.js";
import { useContext } from "react";
import { UserContext } from "../../Providers/UserContexts.jsx";

function Dashboard() {
  const userName = localStorage.getItem("@usename");
  const userModule = localStorage.getItem("@usemodule");
  const { logOut, setUser, user, sendBack } = useContext(UserContext);

  return (
    <StyledMain>
      <nav className="box_logout">
        <img src={logo} alt="logo kenzie hub" />
        <button onClick={logOut}>Sair</button>
      </nav>
      <Header
        sendBack={sendBack}
        setUser={setUser}
        user={user}
        userName={userName}
        userModule={userModule}
      />
      <main className="main_container">
        <div className="box_main">
          <h2>Que pena! estamos em desenvolvimento :(</h2>
          <p>
            nossa aplicação está em desenvolvimento, em breve teremos novidade
          </p>
        </div>
      </main>
    </StyledMain>
  );
}

export default Dashboard;
