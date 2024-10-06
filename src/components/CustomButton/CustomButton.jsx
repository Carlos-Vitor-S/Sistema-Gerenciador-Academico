import React from "react";
import { Button } from "@mui/material";
import css from "./CustomButton.module.css";
const CustomButton = ({ buttonLabel, type, isMargin = true }) => {
  return (
    <Button
      variant="contained"
      size="large"
      type={type}
      className={isMargin ? css.buttonContainerMargin : css.buttonContainer}
    >
      {buttonLabel}
    </Button>
  );
};

export default CustomButton;
