import { IconButton, Paper } from "@mui/material";
import React from "react";
import courseImage3 from "../../assets/design.jpg";
import css from "./CardImage.module.css";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

export default function CardImage({
  image = courseImage3,
}: {
  image?: string;
}) {
  return (
    <Paper
      elevation={1}
      id={css.containerPaper}
      sx={{
        borderRadius: "0.6rem",
      }}
    >
      <div className={css.content}>
        <div className={css.imageContainer}>
          <img src={image} alt={image} />
          <div className={css.codContainer}>
            <span className={css.codContent}>Cod 0001</span>
          </div>
        </div>
        <section className={css.cardInfoContainer}>
          <span className={css.cardTitle}>Sistemas de Informações</span>
          <span>Carga Horaria 40 Horas</span>
          <span>Pré-Requisitos: Nenhum</span>
          <span>Curso de Tecnologia</span>
          <span className={css.cardButtonAction}>
            <EditOutlinedIcon fontSize="small" id={css.editIcon} />
            <IconButton aria-label="delete" className={css.iconAction}>
              <DeleteForeverOutlinedIcon fontSize="small" />
            </IconButton>
          </span>
        </section>
      </div>
    </Paper>
  );
}
