import React from "react";
import {Button, Typography }from "@material-ui/core";
import { Link } from "react-router-dom";
import { AppBar, Toolbar } from "@material-ui/core";
import AuthenticationService from "./services/AuthenticationService.js";

const isUserLoggedIn = AuthenticationService.isUserLoggedIn();

export const NavBar = ({ color, size }) => (
  <AppBar color={color} size={size} className="navBar">
    <Toolbar>
    <Link to="/">
      <Typography variant="h4">
        <Button>Sunrise Meditation</Button>
        </Typography>
      </Link>
      <Link to="/meditation">
        <Button className="navButton">Meditation</Button>
      </Link>
      <Link to="/learnAbout">
        <Button className="navButton">Learn About Meditation</Button>
      </Link>
      <Link to="/benefits">
        <Button className="navButton">Benefits</Button>
      </Link>
      <Link to="/profile">
        <Button className="navButton">User Profile</Button>
      </Link>
      <Link to="/login">
        <Button>Login</Button>
      </Link>
      <Link to="/register">
        <Button>Registration</Button>
      </Link>
      {isUserLoggedIn && <Link to="/" onClick={AuthenticationService.logout}><Button>Logout</Button></Link>}
    </Toolbar>
  </AppBar>
);