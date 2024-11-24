import { useLocation, useNavigate } from "react-router-dom";
import HeaderActions from "../../components/HeaderActions/HeaderActions";
import css from "./Contratos.module.css";
export default function Contratos() {
  const navigate = useNavigate();
  const location = useLocation();
  function onClickNavigate() {
    if (location.pathname !== "/createContratos") {
      navigate("/createContratos");
    }
  }

  return (
    <div className={css.container}>
      <div style={{ padding: "0.8rem", width: "100%" }}>
        <HeaderActions label={"Cadastrar Contrato"} onClick={onClickNavigate} />
      </div>
    </div>
  );
}
