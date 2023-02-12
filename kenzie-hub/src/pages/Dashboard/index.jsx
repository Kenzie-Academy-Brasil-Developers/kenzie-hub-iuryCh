import logo from "../../assets/imagens/Logo.svg";
import Header from "../../components/Header";
import StyledMain from "./style.js";
import { useEffect } from "react";
import api from "../../services/api.js";

function Dashboard({ sendBack, setUser, user }) {
  const userName = localStorage.getItem("@usename");
  const uderModule = localStorage.getItem("@usemodule");

  function logOut() {
    setUser(null);
    localStorage.clear();
    sendBack();
  }

  useEffect(() => {
    async function logedUser() {
      
      const token = localStorage.getItem("@TOKEN");

      try {
        const response = await api.get("/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data);

      } catch (error) {
        console.error(error);
      }
    }
    logedUser();
  }, []);

  return (
    <StyledMain>
      <nav className="box_logout">
        <img src={logo} alt="logo kenzie hub" />
        <button onClick={logOut} >Sair</button>
      </nav>
      <Header
        sendBack={sendBack}
        setUser={setUser}
        user={user}
        userName={userName}
        uderModule={uderModule}
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
