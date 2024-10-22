import React from "react";
import css from "./HeaderActions.module.css";
import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import CustomButton from "../CustomButton/CustomButton";
function HeaderActions() {
  return (
    <div className={css.container}>
      <TextField
        id="outlined-basic"
        label={"Buscar"}
        type="text"
        variant="outlined"
        placeholder="Buscar"
        className={css.inputField}
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          },
        }}
      />
    </div>
  );
}

export default HeaderActions;
