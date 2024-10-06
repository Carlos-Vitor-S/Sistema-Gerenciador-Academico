import css from "./Navbar.module.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
export default function NavBar() {
  return (
    <div className={css.container}>
      <div className={css.leftContent}>
        <span className={css.navBarItem}>Alunos</span>
        <span className={css.navBarItem}>Cursos</span>
        <span className={css.navBarItem}>Contratos</span>
        <span className={css.navBarItem}>Relatórios</span>
      </div>
      <div className={css.rightContent}>
        <span>
          <AccountCircleIcon fontSize="large" className={css.avatar} />
        </span>
      </div>
    </div>
  );
}
