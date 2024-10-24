import React from "react";
import fabtechLogo from "../../assets/fabtech-logo.png";
import css from "./Home.module.css";
function Home() {
  return (
    <div className={css.container}>
      <div className={css.imageContainer}>
        <img src={fabtechLogo} alt={fabtechLogo} />
      </div>
    </div>
  );
}

export default Home;
