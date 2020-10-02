import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import "../NavBar/NavBar.css";

export const NavBar = (props) => {
  return (
    <div>
      
      <AppBar className="rootNavBar" position="sticky">
        <Toolbar className="logo AppBar__toolbar">
          <Typography variant="h4">{props.nameLogo}</Typography>
        </Toolbar>
      </AppBar>
     
    </div>
  );
};
