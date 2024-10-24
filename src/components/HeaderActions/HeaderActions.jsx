import React from "react";
import css from "./HeaderActions.module.css";
import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import CustomButton from "../CustomButton/CustomButton";
import AddIcon from "@mui/icons-material/Add";
function HeaderActions({ label }) {
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
      <CustomButton buttonLabel={label} isMargin={false} icon={<AddIcon />} />
    </div>
  );
}

export default HeaderActions;
