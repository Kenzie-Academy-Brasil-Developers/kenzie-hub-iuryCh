import { createContext, useState } from "react";

export const TechContext = createContext({});

function TechProvider({ children }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    
    <TechContext.Provider
      value={{
        openModal,
        closeModal,
        modalIsOpen,
        setModalIsOpen
      }}
    >
      {children}
    </TechContext.Provider>
  );
}

export default TechProvider;
