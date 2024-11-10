import React from "react";
import { Button } from "@mui/material";
import css from "./CustomButton.module.css";

const CustomButton = ({
  buttonLabel,
  type,
  isMargin = true,
  icon = null,
  onClick = () => {},
}) => {
  return (
    <Button
      variant="contained"
      size="large"
      type={type}
      id={isMargin ? css.buttonContainerMargin : css.buttonContainer}
      endIcon={icon}
      onClick={onClick}
    >
      {buttonLabel}
    </Button>
  );
};

export default CustomButton;
