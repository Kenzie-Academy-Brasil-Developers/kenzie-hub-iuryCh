import logo from "../../assets/imagens/Logo.svg";
import Header from "../../components/Header";
import StyledMain from "./style.js";
import ScaleLoader from "react-spinners/ScaleLoader";
import CreateTechModal from "../../components/Modal/CreateTechModal";
import UpdateTechModal from "../../components/Modal/UpdateTechModal";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext.jsx";
import { BsPlusSquareFill } from "react-icons/bs";
import { TechContext } from "../../providers/TechContext";
import Card from "../../components/Card";

function Dashboard() {
  const { logOut, sendBack, techs, loading } = useContext(UserContext);
  const { setEditTech, editTech } = useContext(TechContext);

  function getValues(event) {
    const techId = event.target.id;
    const techTitle = event.target.title;
    const techStatus = event.target.status;
    setEditTech({ techId, techTitle, techStatus });
    openUpdateModal();
  }

  const {
    openCreateModal,
    openUpdateModal,
    createModalIsOpen,
    updateModalIsOpen,
  } = useContext(TechContext);

  return (
    <StyledMain>
      {createModalIsOpen ? (
        <CreateTechModal />
      ) : updateModalIsOpen ? (
        <UpdateTechModal />
      ) : null}

      <nav className="box_logout">
        <img src={logo} alt="logo kenzie hub" />
        <button onClick={logOut}>Sair</button>
      </nav>
      <Header sendBack={sendBack} />
      <main className="main_container">
        <div className="main_container--header">
          <h2>Tecnologias</h2>
          <button onClick={openCreateModal}>
            <BsPlusSquareFill size={25} color={"#212529"} />
          </button>
        </div>

        <section className="main_container--body">
          <ul className="box_list">
            {loading ? <ScaleLoader color={"#F8F9FA"} size={15} /> : null}
            {techs.length > 0 ? (
              techs.map((tech) => (
                <Card
                  key={tech.id}
                  onClick={(event) => getValues(event)}
                  title={tech.title}
                  status={tech.status}
                  id={tech.id}
                />
              ))
            ) : (
              <p className="empty_techs">
                Ainda não foram criadas tecnologias para esse usuário
              </p>
            )}
          </ul>
        </section>
      </main>
    </StyledMain>
  );
}

export default Dashboard;
