import css from "./Card.module.css";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import IconButton from "@mui/material/IconButton";
export default function Card() {
  return (
    <div className={css.cardContainer}>
      <div className={css.cardContent}>
        <div className={css.codContainer}>
          <span className={css.codText}>Cod 0001</span>
        </div>
        <div className={css.cardDescription}>
          <div className={css.cardTitle}>José da Silva</div>

          <div className={css.cardBody}>
            <AccountBoxOutlinedIcon fontSize="small" />
            <span className={css.cardBodyText}>000.000.000-00</span>
          </div>
          <div className={css.cardBody}>
            <LocationOnOutlinedIcon fontSize="small" />
            <span className={css.cardBodyText}>
              Av. Murilo Dantas, 300 - Farolândia, Aracaju - SE, 49032-490
            </span>
          </div>
          <div className={css.cardBody}>
            <PhoneInTalkOutlinedIcon fontSize="small" />
            <span className={css.cardBodyText}>(79) 9 9999-9999</span>
          </div>
          <div className={css.cardBody}>
            <EmailOutlinedIcon fontSize="small" />
            <span className={css.cardBodyText}>José.dsilva@souunit.com.br</span>
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
