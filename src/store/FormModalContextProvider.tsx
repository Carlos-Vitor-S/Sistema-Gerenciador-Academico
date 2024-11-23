import { createContext, useState } from "react";

interface FormModalContextType {
  isModalOpen: boolean;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
}

export const FormModalContext = createContext<FormModalContextType>({
  isModalOpen: false,
  handleOpenModal: () => {},
  handleCloseModal: () => {},
});

export default function FormModalContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [openModal, setOpenModal] = useState(false);

  function handleCloseModal() {
    setOpenModal(false);
  }

  function handleOpenModal() {
    setOpenModal(true);
  }

  const values = {
    isModalOpen: openModal,
    handleOpenModal: handleOpenModal,
    handleCloseModal: handleCloseModal,
  };

  return (
    <FormModalContext.Provider value={values}>
      {children}
    </FormModalContext.Provider>
  );
}
