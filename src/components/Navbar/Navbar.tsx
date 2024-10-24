import css from "./Navbar.module.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import logo from "../../assets/fabtech-logo-white-small.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
export default function NavBar() {
  const location = useLocation();
  const navigate = useNavigate();
  function onClickNavigate() {
    navigate("/");
  }

  return (
    <div className={css.container}>
      <div className={css.leftContent}>
        <span className={css.logoContainer}>
          <img src={logo} alt={logo} onClick={onClickNavigate} />
        </span>

        <span className={css.navBarItem}>
          <Link
            to="/alunos"
            className={
              location.pathname === "/alunos"
                ? css.activeNavBarItem
                : css.linkItem
            }
          >
            Alunos
          </Link>
        </span>
        <span className={css.navBarItem}>
          <Link
            to="/cursos"
            className={
              location.pathname === "/cursos"
                ? css.activeNavBarItem
                : css.linkItem
            }
          >
            Cursos
          </Link>
        </span>
        <span className={css.navBarItem}>
          <Link
            to="/contratos"
            className={
              location.pathname === "/contratos"
                ? css.activeNavBarItem
                : css.linkItem
            }
          >
            Contratos
          </Link>
        </span>
        <span className={css.navBarItem}>
          <Link
            to="/relatorios"
            className={
              location.pathname === "/relatorios"
                ? css.activeNavBarItem
                : css.linkItem
            }
          >
            Relatórios
          </Link>
        </span>
      </div>
      <div className={css.rightContent}>
        <span>
          <AccountCircleIcon fontSize="large" className={css.avatar} />
        </span>
      </div>
    </div>
  );
}
