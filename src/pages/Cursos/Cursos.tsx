import React from "react";
import CardImage from "../../components/CardImage/CardImage";
import css from "./Cursos.module.css";
import courseImage1 from "../../assets/course-image1.jpg";
import courseImage2 from "../../assets/design.jpg";
import courseImage3 from "../../assets/segurança.jpg";
import HeaderActions from "../../components/HeaderActions/HeaderActions";
const Cursos = () => {
  const imageData = [
    {
      image: courseImage1,
    },

    {
      image: courseImage2,
    },
    {
      image: courseImage3,
    },
  ];

  return (
    <div className={css.container}>
      <HeaderActions />
      <div className={css.content}>
        {imageData.map((item) => (
          <CardImage image={item.image} />
        ))}
        <CardImage />
        <CardImage />
        <CardImage />
        <CardImage />
        <CardImage />
        <CardImage />
        <CardImage />
        <CardImage />
        <CardImage />
        <CardImage />
        <CardImage />
      </div>
    </div>
  );
};

export default Cursos;
