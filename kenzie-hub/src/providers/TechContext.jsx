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
  // console.log(techs); //id, status e title
  async function deleteTech(techId) {
    const token = localStorage.getItem("@TOKEN");

    try {
      setLoading(true);

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

  async function updateTech(data) {
    const token = localStorage.getItem("@TOKEN");
    const idTech = editTech.techId;

    try {
      setLoading(true);
      await api.put(`/users/techs/${idTech}`, data, {
        headers: {
          Authorization: ` Bearer ${token}`,
        },
      });

      const techEdited = techs.map((tech) => {
        console.log(tech);
        if (tech.id == idTech) {
          tech.status = data.status;
        }
        return tech;
      });

      setTechs(techEdited);
      toast.success("Parabens, você está progredindo!");
      closeUpdateModal();
    } catch (error) {
      console.error(error);
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
        updateTech,
      }}
    >
      {children}
    </TechContext.Provider>
  );
}

export default TechProvider;
