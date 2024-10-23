import React from "react";
import { Button } from "@mui/material";
import css from "./CustomButton.module.css";

const CustomButton = ({ buttonLabel, type, isMargin = true, icon = null }) => {
  return (
    <Button
      variant="contained"
      size="large"
      type={type}
      id={isMargin ? css.buttonContainerMargin : css.buttonContainer}
      endIcon={icon}
    >
      {buttonLabel}
    </Button>
  );
};

export default CustomButton;
