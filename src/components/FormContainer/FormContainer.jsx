import React from "react";
import css from "./FormContainer.module.css";
const FormContainer = ({ children, formTitle }) => {
  return (
    <div className={css.container}>
      <div className={css.formContainer}>
        <header className={css.formHeader}>{formTitle}</header>
        <div className={css.formContent}>{children}</div>
      </div>
    </div>
  );
};

export default FormContainer;
