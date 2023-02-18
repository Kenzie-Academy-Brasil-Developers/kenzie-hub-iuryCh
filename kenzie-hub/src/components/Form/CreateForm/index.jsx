import { BiChevronDown } from "react-icons/bi";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useEffect } from "react";
import { UserContext } from "../../../providers/UserContext";
import { TechContext } from "../../../providers/TechContext";
import Input from "../../Input";

const schema = yup.object({
  title: yup.string().required("* campo obrigatório"),
  status: yup.string().required("* campo obrigatório"),
});

function CreateForm({ createTech }) {
  const { loading } = useContext(UserContext);
  const { closeCreateModal, editTech } = useContext(TechContext);

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
  });

  return (
    <form className="modal_create--form" onSubmit={handleSubmit(createTech)}>
      <Input
        label="Nome"
        type={"text"}
        id="title"
        error={errors.title?.message}
        placeholder="Nome da tecnologia"
        register={register}
      />
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
      <button>Cadastrar tecnologial</button>
    </form>
  );
}
export default CreateForm;
