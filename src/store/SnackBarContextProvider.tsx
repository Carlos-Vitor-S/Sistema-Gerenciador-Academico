import { createContext, useState } from "react";

interface SnackbarContextType {
  snackbarMessage: string;
  isSnackBarOpen: boolean;
  handleOpenSnackbar: () => void;
  handleCloseSnackbar: () => void;
  setSnackbarMessage: (message: string) => void;
}

export const SnackbarContext = createContext<SnackbarContextType>({
  snackbarMessage: "",
  isSnackBarOpen: false,
  handleOpenSnackbar: () => {},
  handleCloseSnackbar: () => {},
  setSnackbarMessage: (message: string) => {},
});

export default function SnackbarContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [message, setMessage] = useState("");
  const [isSnackBarOpen, setIsSnackBarOpen] = useState(false);

  function handleOpenSnackbar() {
    setIsSnackBarOpen(true);
  }

  function handleCloseSnackbar() {
    setIsSnackBarOpen(false);
  }

  function setSnackbarMessage(message: string) {
    setMessage(message);
  }

  const values = {
    snackbarMessage: message,
    isSnackBarOpen: isSnackBarOpen,
    handleOpenSnackbar: handleOpenSnackbar,
    handleCloseSnackbar: handleCloseSnackbar,
    setSnackbarMessage: setSnackbarMessage,
  };

  return (
    <SnackbarContext.Provider value={values}>
      {children}
    </SnackbarContext.Provider>
  );
}
