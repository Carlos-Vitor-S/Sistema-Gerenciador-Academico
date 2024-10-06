import React from "react";
import css from "./Alunos.module.css";
import Card from "../../components/Card/Card";
const Alunos = () => {
  return (
    <div className={css.container}>
      <div className={css.gridContainer}>
        <div className={css.gridColumn}>
          <Card />
        </div>
        <div className={css.gridColumn}>
          <Card />
        </div>
        <div className={css.gridColumn}>
          <Card />
        </div>
        <div className={css.gridColumn}>
          <Card />
        </div>
        <div className={css.gridColumn}>
          <Card />
        </div>
        <div className={css.gridColumn}>
          <Card />
        </div>
        <div className={css.gridColumn}>
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Alunos;
