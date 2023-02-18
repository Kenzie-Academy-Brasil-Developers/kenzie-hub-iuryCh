import { useContext } from "react";
import { TechContext } from "../../../providers/TechContext";
import { UserContext } from "../../../providers/UserContext";
import UpdateForm from "../../Form/UpdateForm";
import StyledModal from "./style.js";

function UpdateTechModal() {
  const { closeUpdateModal } = useContext(TechContext);
  

  return (
    <StyledModal>
      <div className="modal_container">
        <header className="modal_creat--header">
          <h2>Cadastrar tecnologia</h2>
          <span onClick={closeUpdateModal}>X</span>
        </header>
        <section className="modal_create--section">
          <UpdateForm />
          {/* <UpdateForm createTech={createTech} /> */}
          {/* <DeleteForm createTech={createTech} /> */}
        </section>
      </div>
    </StyledModal>
  );
}

export default UpdateTechModal;
