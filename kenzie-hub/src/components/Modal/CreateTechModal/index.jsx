import { useContext } from "react";
import { TechContext } from "../../../providers/TechContext";
import StyledModal from "./style.js";
import CreateForm from "../../Form/CreateForm";

function CreateTechModal() {
  const { closeCreateModal, createTech } = useContext(TechContext);

  return (
    <StyledModal>
      <div className="modal_container">
        <header className="modal_creat--header">
          <h2>Cadastrar tecnologia</h2>
          <span onClick={closeCreateModal}>X</span>
        </header>
        <section className="modal_create--section">
          <CreateForm createTech={createTech} />
        </section>
      </div>
    </StyledModal>
  );
}

export default CreateTechModal;
