import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { FormModalContext } from "../../store/FormModalContextProvider";
import { useContext } from "react";
export default function FormModal({ children, title }) {
  const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
    textAlign: "center",
    backgroundColor: "var(--primaryColor)",
    fontWeight: "500",
    color: "var(--fontColorLight)",
    marginBottom: "1rem",
    borderRadius: "4px 4px 0 0",
    borderColor: "var(--primaryColor)",
  }));

  const StyledButton = styled(Button)(({ theme }) => ({
    color: "var(--fontColorDark)",
    fontWeight: "bold",
  }));

  const { handleCloseModal, isModalOpen } = useContext(FormModalContext);

  return (
    <Dialog
      open={isModalOpen}
      onClose={handleCloseModal}
      fullWidth
      maxWidth="sm"
      disableEnforceFocus
    >
      <StyledDialogTitle>{title}</StyledDialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <StyledButton onClick={handleCloseModal}>Fechar</StyledButton>
      </DialogActions>
    </Dialog>
  );
}
