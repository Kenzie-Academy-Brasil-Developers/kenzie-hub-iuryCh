import StyledForm from "./style.js";
import eye from "../../../assets/imagens/eye.svg";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../services/api.js";

const schema = yup.object({
  email: yup.string().required("* Campo Obrigatório").email("Deve ser email"),
  password: yup.string().required("* Campo obrigatório"),
});

function LoginForm({ setUser }) {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const ref = useRef(null);

  useEffect(() => {
    function showInputPassword(event) {
      if (
        event.target.className == "eye_img" &&
        ref.current.type == "password"
      ) {
        ref.current.type = "text";
      } else if (
        event.target.className == "eye_img" &&
        ref.current.type == "text"
      ) {
        ref.current.type = "password";
      }
    }
    window.addEventListener("mousedown", showInputPassword);
  }, []);

  async function loginUser(data) {
    try {
      setLoading(true);
      const response = await api.post("/sessions", data);
      setUser(response.data.user);
      localStorage.setItem("@TOKEN", response.data.token);
      localStorage.setItem("@USERID", response.data.user.id);
      localStorage.setItem("@usename", response.data.user.name);
      localStorage.setItem("@usemodule", response.data.user.course_module);
      navigate("/Dashboard");
    } catch (error) {
      console.error(error);
      toast.error("Ops, dados inválidos!");
    } finally {
      setLoading(false);
    }
  }
  return (
    <StyledForm onSubmit={handleSubmit(loginUser)}>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        placeholder="Digite seu email"
        {...register("email")}
      />
      {<p className="error_msg-p1"> {errors.email?.message} </p>}
      <label htmlFor="password">Senha</label>
      <input
        className="input_password"
        type="password"
        id="password"
        placeholder="Digite sua senha"
        {...register("password")}
        ref={ref}
      />
      {<p className="error_msg-p2"> {errors.password?.message} </p>}
      <img className="eye_img" src={eye} alt="eye" />
      <button className="btn_entry">Entrar</button>
    </StyledForm>
  );
}
export default LoginForm;
