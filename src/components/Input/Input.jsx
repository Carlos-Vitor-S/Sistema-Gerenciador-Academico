import React from "react";
import css from "./Input.module.css";
import TextField from "@mui/material/TextField";
const Input = ({ label, register, name, isInputMargin = true }) => {
  return (
    <TextField
      {...register(name)}
      id="outlined-basic"
      label={label}
      type="text"
      variant="outlined"
      placeholder={label}
      sx={isInputMargin ? { marginBottom: "1rem" } : undefined}
      className={css.inputField}
    />
  );
};

export default Input;
