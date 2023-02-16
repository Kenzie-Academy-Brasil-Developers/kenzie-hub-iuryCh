import logo from "../../assets/imagens/Logo.svg";
import Header from "../../components/Header";
import StyledMain from "./style.js";
import ScaleLoader from "react-spinners/ScaleLoader";
// import StyledModal from "../../components/Modal/style";
import CreateTechModal from "../../components/Modal";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext.jsx";
import { BsPlusSquareFill } from "react-icons/bs";
import { TechContext } from "../../providers/TechContext";

function Dashboard() {
  const { openModal, modalIsOpen } = useContext(TechContext);
  const { logOut, sendBack, techs } = useContext(UserContext);
  // console.log(modalIsOpen);
  return (
    <StyledMain>
      {modalIsOpen && <CreateTechModal />}

      <nav className="box_logout">
        <img src={logo} alt="logo kenzie hub" />
        <button onClick={logOut}>Sair</button>
      </nav>
      <Header sendBack={sendBack} />
      <main className="main_container">
        <div className="main_container--header">
          <h2>Tecnologias</h2>
          <button onClick={() => openModal()}>
            <BsPlusSquareFill size={25} color={"#212529"} />
          </button>
        </div>
        <section className="main_container--body">
          <ul className="box_list">
            {techs.length > 0 ? (
              techs.map((tech) => (
                <li key={tech.id} className="box-list--card">
                  <p>{tech.title}</p>
                  <span> {tech.status} </span>
                </li>
              ))
            ) : (
              <ScaleLoader color={"#F8F9FA"} size={15} />
            )}
          </ul>
        </section>
      </main>
    </StyledMain>
  );
}

export default Dashboard;
