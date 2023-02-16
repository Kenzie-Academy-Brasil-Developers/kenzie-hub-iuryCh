import StyledForm from "./style.js";
import ScaleLoader from "react-spinners/ScaleLoader";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext, useState } from "react";
import { UserContext } from "../../../providers/UserContext.jsx";

const schema = yup.object({
  email: yup.string().required("* Campo Obrigatório").email("Deve ser email"),
  password: yup.string().required("* Campo obrigatório"),
});

function LoginForm() {
  const { loginUser, loading } = useContext(UserContext);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

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
        type={showPassword ? "text" : "password"}
        id="password"
        placeholder="Digite sua senha"
        {...register("password")}
      />
      {<p className="error_msg-p2"> {errors.password?.message} </p>}
      <span
        className="eye_img"
        onClick={() => {
          setShowPassword(!showPassword);
        }}
      >
        {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
      </span>
      <button
        className="btn_entry"
        style={loading ? { backgroundColor: "#59323F" } : null}
        disabled={loading ? true : false}
      >
        {loading ? (
          <ScaleLoader color={"#F8F9FA"} loading={loading} size={15} />
        ) : (
          "Entrar"
        )}
      </button>
    </StyledForm>
  );
}
export default LoginForm;
