import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";

import css from "./Login.module.css";

const Login = () => {
  const navigate = useNavigate();

  const navigateOnClick = () => {
    navigate("/");
  };

  return (
    <div className={css.formContainer}>
      <div className={css.formContent}>
        <div className={css.imageContainer}>
          <img src="/fabtechLogo.png" alt="" />
        </div>
        <div className={css.inputGroup}>
          <div className={css.inputField}>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              sx={{
                backgroundColor: "var(--inputColor)",
                width: "100%",
              }}
            />
          </div>
          <div className={css.inputField}>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              sx={{
                backgroundColor: "var(--inputColor)",
                width: "100%",
              }}
            />
          </div>
          <Button
            variant="contained"
            size="large"
            onClick={navigateOnClick}
            sx={{
              width: "100%",
              padding: "0.5rem",
              backgroundColor: "var(--primaryColor)",
            }}
          >
            Entrar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
