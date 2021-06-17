import React from "react";
import { makeStyles } from "@material-ui/core/styles";

export default function Navbar() {
  const useStyle = makeStyles(() => ({
    Navbar: {
      minWidth: "100%",
      backgroundColor: "Magenta",
    },
  }));

  const classes = useStyle();
  return <div className={classes.Navbar}>Hello there</div>;
}
