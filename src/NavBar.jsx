import React from "react";
import {Button, Typography }from "@material-ui/core";
import { Link } from "react-router-dom";
import { AppBar, Toolbar } from "@material-ui/core";

export const NavBar = ({ color, size }) => (
  <AppBar color={color} size={size} className="navBar">
    <Toolbar>
    <Link to="/">
      <Typography variant="h4">
        <Button>Home</Button>
        </Typography>
      </Link>
      <Link to="/profile">
        <Button className="navButton">My Profile</Button>
      </Link>
      <Link to="/Login">
        <Button>Login</Button>
      </Link>
      <Link to="/meditation">
        <Button>Meditation</Button>
      </Link>
      
    </Toolbar>
  </AppBar>
);