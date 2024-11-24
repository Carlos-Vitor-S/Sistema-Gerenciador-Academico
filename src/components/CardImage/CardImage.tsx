import { IconButton, Paper } from "@mui/material";
import React from "react";
import css from "./CardImage.module.css";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { Curso } from "../../interfaces/curso";
import { useNavigate } from "react-router-dom";

interface CardImageType {
  image: string;
  arrayData: Curso;
  onClickRemove: () => void;
  onClickEdit: () => void;
}

export default function CardImage({
  image,
  arrayData,
  onClickRemove,
  onClickEdit,
}: CardImageType) {
  const navigate = useNavigate();
  function handleCardClick() {
    navigate(`/matricula/${arrayData.id}`, {
      state: { course: arrayData },
    });
  }

  return (
    <Paper
      elevation={1}
      id={css.containerPaper}
      sx={{
        borderRadius: "0.6rem",
      }}
    >
      <div className={css.content} onClick={handleCardClick}>
        <div className={css.imageContainer}>
          <img src={image} alt={image} />
          <div className={css.codContainer}>
            <span className={css.codContent}>Cod 0{arrayData.id}</span>
          </div>
        </div>
        <section className={css.cardInfoContainer}>
          <span className={css.cardTitle}>{arrayData.nome}</span>
          <span>Carga Horaria: {arrayData.cargaHorario} Horas</span>
          <span>Pré-Requisitos: {arrayData.PreRequisitos}</span>
          <span>{arrayData.descricao}</span>
          <span className={css.cardButtonAction}>
            <EditOutlinedIcon
              fontSize="small"
              id={css.editIcon}
              onClick={onClickEdit}
            />
            <IconButton
              aria-label="delete"
              className={css.iconAction}
              onClick={onClickRemove}
            >
              <DeleteForeverOutlinedIcon fontSize="small" />
            </IconButton>
          </span>
        </section>
      </div>
    </Paper>
  );
}
