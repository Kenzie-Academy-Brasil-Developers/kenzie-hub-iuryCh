import { useContext } from "react";
import { TechContext } from "../../providers/TechContext";
import { GrClose } from "react-icons/gr";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import StyledModal from "./style.js";

const schema = yup.object({});

function CreateTechModal() {
  const { closeModal } = useContext(TechContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function createTechForm() {}

  return (
    <StyledModal>
      <div className="modal_container">
        <header className="modal_creat--header">
          <h2>Cadastrar tecnologia</h2>
          <span onClick={() => closeModal()}>
            <GrClose color="white" />
          </span>
        </header>
        <section className="modal_create--section">
          <form
            className="modal_create--form"
            onSubmit={() => handleSubmit(createTechForm)}
          >
            <div>
              <label htmlFor="title">Nome</label>
              <input type="text" id="title" {...register("title")} />
            </div>
            <div>
              <label htmlFor="status">Selecione status</label>
              <select id="status" {...register("status")}>
                <option value="">Selecione status</option>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </select>
            </div>
            <button>Cadastrar tecnologia</button>
          </form>
        </section>
      </div>
    </StyledModal>
  );
}

export default CreateTechModal;
