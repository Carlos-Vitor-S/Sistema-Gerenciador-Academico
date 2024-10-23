import css from "./Card.module.css";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import IconButton from "@mui/material/IconButton";
import { Aluno } from "../../interfaces/aluno";
export default function Card({ array }: { array: Aluno }) {
  return (
    <div className={css.cardContainer}>
      <div className={css.cardContent}>
        <div className={css.codContainer}>
          <span className={css.codText}>Cod 0{array.id}</span>
        </div>
        <div className={css.cardDescription}>
          <div className={css.cardTitle}>{array.nome}</div>

          <div className={css.cardBody}>
            <AccountBoxOutlinedIcon fontSize="small" />
            <span className={css.cardBodyText}>{array.cpf}</span>
          </div>
          <div className={css.cardBody}>
            <LocationOnOutlinedIcon fontSize="small" />
            <span className={css.cardBodyText}>
              {`${array.endereco.logradouro}, ${array.endereco.numero} - ${array.endereco.bairro}, ${array.endereco.cidade} - ${array.endereco.uf}, ${array.endereco.cep}`}
            </span>
          </div>
          <div className={css.cardBody}>
            <PhoneInTalkOutlinedIcon fontSize="small" />
            <span className={css.cardBodyText}>{array.telefone}</span>
          </div>
          <div className={css.cardBody}>
            <EmailOutlinedIcon fontSize="small" />
            <span className={css.cardBodyText}>{array.email}</span>
          </div>
        </div>
        <span className={css.cardButtonAction}>
          <EditOutlinedIcon fontSize="small" />
          <IconButton aria-label="delete" className={css.iconAction}>
            <DeleteForeverOutlinedIcon fontSize="small" />
          </IconButton>
        </span>
      </div>
    </div>
  );
}
