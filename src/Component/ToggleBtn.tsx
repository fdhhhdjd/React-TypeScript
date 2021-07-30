import React, { useContext } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Fab } from "@material-ui/core";
import { ThemeContext } from "../Context/ThemeContext";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    FloatButton: {
      position: "fixed",
      right: "3rem",
      bottom: "3rem",
    },
  })
);
const ToggleBtn = () => {
  const classes = useStyles();
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <Fab
      color={theme}
      variant="extended"
      className={classes.FloatButton}
      onClick={toggleTheme.bind(
        this,
        theme === "primary" ? "secondary" : "primary"
      )}
    >
      Toggle Theme
    </Fab>
  );
};

export default ToggleBtn;
