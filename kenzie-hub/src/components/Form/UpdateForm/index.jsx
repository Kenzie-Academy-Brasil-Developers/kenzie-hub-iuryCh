import { BiChevronDown } from "react-icons/bi";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useEffect } from "react";
import { UserContext } from "../../../providers/UserContext";
import { TechContext } from "../../../providers/TechContext";

const schema = yup.object({
  status: yup.string().required("* campo obrigatório"),
});

function UpdateForm() {
  const { loading } = useContext(UserContext);
  const { closeCreateModal, editTech, deleteTech } = useContext(TechContext);
  
  useEffect(() => {
    if (loading) {
      closeCreateModal();
    }
  }, [loading]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      title: editTech.title,
      status: editTech.status,
    },
  });

  return (
    <form className="modal_create--form">
      <div>
        <label htmlFor="title">Nome</label>
        <input
          type="text"
          id="title"
          placeholder="Nome da tecnologia"
          {...register("title")}
          disabled
        />
      </div>
      <div>
        <label htmlFor="status">Selecione status</label>
        <select id="status" {...register("status")}>
          <option value="">Selecione status</option>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>
        <BiChevronDown fontSize={20} className="arrow_down" />
        {errors && <p> {errors.status?.message} </p>}
      </div>
      <div className="box_btns">
        <button className="save_updates" id="save_btn">
          Salvar alterações
        </button>
        <button
          className="erase"
          type="button"
          id="erase_btn"
          onClick={() => deleteTech(editTech)}
        >
          Excluir
        </button>
      </div>
    </form>
  );
}
export default UpdateForm;
