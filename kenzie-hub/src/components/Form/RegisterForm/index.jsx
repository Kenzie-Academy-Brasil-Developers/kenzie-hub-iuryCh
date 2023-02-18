import Styledform from "./style.js";
import Input from "../../Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ScaleLoader from "react-spinners/ScaleLoader";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext.jsx";

const schema = yup
  .object({
    name: yup.string().required("* Campo obrigatório"),
    email: yup
      .string()
      .email("Deve ser um email")
      .required("* Campo obrigatório"),
    password: yup
      .string()
      .required("* Campo obrigatório")
      .matches(/(\d)/, "Ao menos um número")
      .matches(/[a-z]/, "Ao menos uma letra minúscula")
      .matches(/[A-Z]/, "Ao menos uma letra maisúscula")
      .matches(/(\W|_)/, "Ao menos um caractere especial")
      .matches(/.{8,}/, "No mínimo 8 caracteres"),
    confirmPassword: yup
      .string()
      .required("* Campo obrigatório")
      .oneOf([yup.ref("password")], "As senhas devem ser iguais"),
    bio: yup.string().required("* Campo obrigatório"),
    contact: yup.string().required("* Campo obrigatório"),
    course_module: yup.string().required("* Selecionae um módulo"),
  })
  .required();

function RegisterForm() {
  const { userRegister, loading } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <Styledform onSubmit={handleSubmit(userRegister)}>
      <Input
        label="Nome"
        id="name"
        type="text"
        error={errors.name?.message}
        placeholder="Digite seu nome"
        register={register}
      />

      <Input
        label="Email"
        id="email"
        type="email"
        error={errors.email?.message}
        placeholder="Digite seu melhor email"
        register={register}
      />

      <Input
        label="Senha"
        id="password"
        type="password"
        error={errors.password?.message}
        placeholder="Digite uma senha"
        register={register}
      />

      <Input
        label="Confirmar senha"
        id="confirmPassword"
        type="password"
        error={errors.confirmPassword?.message}
        placeholder="Confirme sua senha"
        register={register}
      />

      <Input
        label="Bio"
        id="bio"
        type="text"
        error={errors.bio?.message}
        placeholder="bio"
        register={register}
      />

      <Input
        label="Contato"
        id="contact"
        type="text"
        error={errors.contact?.message}
        placeholder="Opção de contato"
        register={register}
      />
      <label className="select_label" htmlFor="course_module">
        Selecionar Módulo
      </label>
      <select id="course_module" {...register("course_module")}>
        <option value="">Selecione um módulo</option>
        <option value="Primeiro módulo (Introdução ao Frontend)">
          Primeiro Módulo
        </option>
        <option value="Segundo módulo (Frontend Avançado)">
          Segundo Módulo
        </option>
        <option value="Terceiro módulo (Introdução ao Backend)">
          Terceiro Módulo
        </option>
        <option value="Quarto módulo (Backend Avançado)">Quarto Módulo</option>
      </select>
      {errors && <p> {errors.course_module?.message} </p>}
      {loading && <ScaleLoader color={"#59323F"} loading={loading} size={50} />}
      <button
        style={loading ? { backgroundColor: "#59323F" } : null}
        disabled={loading ? true : false}
      >
        Cadastrar
      </button>
    </Styledform>
  );
}

export default RegisterForm;
