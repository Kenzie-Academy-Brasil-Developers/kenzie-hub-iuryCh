import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import api from "../services/api";
import { UserContext } from "./UserContext";

export const TechContext = createContext({});

function TechProvider({ children }) {
  const [createModalIsOpen, setCreateModalIsOpen] = useState(false);
  const [updateModalIsOpen, setUpdateModalIsOpen] = useState(false);
  const [editTech, setEditTech] = useState([]);

  const { setLoading, techs, setTechs } = useContext(UserContext);

  function openCreateModal() {
    setCreateModalIsOpen(true);
  }
  function openUpdateModal() {
    setUpdateModalIsOpen(true);
  }

  function closeCreateModal() {
    setCreateModalIsOpen(false);
  }
  function closeUpdateModal() {
    setUpdateModalIsOpen(false);
  }

  async function createTech(data) {
    const token = localStorage.getItem("@TOKEN");

    try {
      setLoading(true);

      const response = await api.post("/users/techs", data, {
        headers: {
          Authorization: ` Bearer ${token}`,
        },
      });

      setEditTech(response.data);

      setTechs([...techs, response.data]);
      toast.success("Tecnologia criada, Parabens!");
    } catch (error) {
      toast.error("Ops! Algo deu errado");
    } finally {
      setLoading(false);
    }
  }

  async function deleteTech(techId) {
    try {
      setLoading(true);
      const token = localStorage.getItem("@TOKEN");

      // atualização do back-end(banco de dados da API)
      await api.delete(`/users/techs/${techId}`, {
        headers: {
          Authorization: ` Bearer ${token}`,
        },
      });

      // atualização do front-end (apresentação da tela)
      const filteredTechs = techs.filter((tech) => tech.id !== techId);
      setTechs(filteredTechs);
      closeUpdateModal();
      toast.success("tecnologia deletada com sucesso!");
    } catch (error) {
      toast.error("Ops, algo deu errado!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <TechContext.Provider
      value={{
        openCreateModal,
        closeCreateModal,
        createModalIsOpen,
        setCreateModalIsOpen,
        createTech,
        openUpdateModal,
        closeUpdateModal,
        updateModalIsOpen,
        setEditTech,
        editTech,
        deleteTech,
      }}
    >
      {children}
    </TechContext.Provider>
  );
}

export default TechProvider;
