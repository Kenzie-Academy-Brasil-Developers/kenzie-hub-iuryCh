import { useState, useEffect } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api.js";

export const UserContext = createContext({});

function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [techs, setTechs] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");

    if (token) {
      async function autoLoginUser() {
        try {
          const response = await api.get("/profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          setUser(response.data);
          setTechs(response.data.techs);
        } catch {
          localStorage.removeItem("@TOKEN");
        }
      }
      autoLoginUser();
    }
  }, []);

  async function loginUser(data) {
    try {
      setLoading(true);
      const response = await api.post("/sessions", data);

      setUser(response.data.user);
      setTechs(response.data.user.techs);
      localStorage.setItem("@TOKEN", response.data.token);
      localStorage.setItem("@USERID", response.data.user.id);
      navigate("/Dashboard");
    } catch (error) {
      console.error(error);
      toast.error("Ops, dados inválidos!");
    } finally {
      setLoading(false);
    }
  }

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

  function logOut() {
    setUser([]);
    navigate("/");
    localStorage.clear();
  }

  return (
    <UserContext.Provider
      value={{
        loginUser,
        loading,
        setLoading,
        showPassword,
        setShowPassword,
        userRegister,
        logOut,
        setUser,
        user,
        techs,
        setTechs,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
export default UserProvider;
