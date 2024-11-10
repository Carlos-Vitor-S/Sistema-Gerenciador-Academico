import * as React from "react";

import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { styled } from "@mui/material/styles";
export default function CustomSnackBar({ open, message, onClose }) {
  const StyledAlert = styled(Alert)(({ theme }) => ({
    width: "100%",

    backgroundColor: "var(--snackBarColor)",
    fontWeight: "500",
    color: "var(--fontColorLight)",
    ".MuiAlert-icon": {
      color: "var(--fontColorLight)",
    },
  }));

  return (
    <Snackbar
      open={open}
      autoHideDuration={5000} // Duração de 3 segundos
      onClose={onClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      sx={{ marginTop: "1rem", margin: "1rem" }}
    >
      <StyledAlert onClose={onClose} severity="success">
        {message}
      </StyledAlert>
    </Snackbar>
  );
}
