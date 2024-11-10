import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
export default function FormModal({ open, onClose, children, title }) {
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

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <StyledDialogTitle>{title}</StyledDialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <StyledButton onClick={onClose}>Fechar</StyledButton>
      </DialogActions>
    </Dialog>
  );
}
