import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import logo from "../../assets/fabtech-logo.png";
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
          <img src={logo} alt="logo" />
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
              label="Senha"
              variant="outlined"
              type="password"
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
