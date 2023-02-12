import Styledform from "./style.js";
import Input from "../../Input";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import api from "../../../services/api.js";

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
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function userRegister(data) {
    try {
      setLoading(true);
      await api.post("/users", data);
      toast.success("Cadastro realizado com sucesso!");
      navigate("/");
    } catch (error) {
      console.error(error);
      {
        error.response.data.message == "Email already exists"
          ? toast.error(`Email já cadastrado`)
          : toast.error("Ops, algo deu errado!");
      }
    } finally {
      setLoading(false);
    }
  }

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
        label="Senha"
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
      <label htmlFor="course_module">Selecionar Módulo</label>
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
      <p> {errors.course_module?.message} </p>
      <button>Cadastrar</button>
    </Styledform>
  );
}

export default RegisterForm;
