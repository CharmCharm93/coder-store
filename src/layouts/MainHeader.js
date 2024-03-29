import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import Logo from "../components/Logo";
import useAuth from "../hooks/useAuth";
import { NavLink } from "react-router-dom";

function MainHeader() {
  const { user } = useAuth();
  return (
    <Box>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Logo />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            CoderStore
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Typography variant="h6" color="inherit" component="div">
            Welcome {user?.username}!
          </Typography>
          <NavLink
            to="/login"
            style={{ color: "white", textDecoration: "none" }}
          >
            <Typography variant="h6" sx={{ ml: 2 }}>
              Signout
            </Typography>
          </NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default MainHeader;
