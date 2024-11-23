import React, { useState } from "react";
import css from "./HeaderActions.module.css";
import {
  TextField,
  IconButton,
  InputAdornment,
  useMediaQuery,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CustomButton from "../CustomButton/CustomButton";
import AddIcon from "@mui/icons-material/Add";

function HeaderActions({ label, onClickShowForm = () => {} }) {
  // Verifica se a tela é menor que 600px (pode ser ajustado para outras larguras)
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className={css.container}>
      {!isSmallScreen ? (
        <TextField
          id="outlined-basic"
          label={"Buscar"}
          type="text"
          variant="outlined"
          placeholder="Buscar"
          value={searchQuery}
          onChange={handleSearchChange}
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
      ) : (
        <IconButton
          color="primary"
          sx={{
            backgroundColor: "var(--primaryColor)",
            color: "var(--fontColorLight)",
          }}
        >
          <SearchIcon />
        </IconButton>
      )}

      <CustomButton
        buttonLabel={label}
        isMargin={false}
        icon={<AddIcon />}
        onClick={onClickShowForm}
      />
    </div>
  );
}

export default HeaderActions;
