import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  customButton: {
    background: "#ffd500",
    color: "black",
    margin: "10px",
    fontSize: "16px",
    padding: "12px 24px",
    borderRadius: "10px",
    border: "1px solid #ffd500",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    textTransform: "uppercase",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "transparent",
      color: "#ffd500",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#ffd500",
      borderColor: "#ffd500",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(255, 213, 0, 0.5)",
    },
  },
}));

const CustomButtonComponent = ({ children, ...rest }) => {
  const classes = useStyles();

  return (
    <button className={classes.customButton} {...rest}>
      {children}
    </button>
  );
};

export default CustomButtonComponent;
