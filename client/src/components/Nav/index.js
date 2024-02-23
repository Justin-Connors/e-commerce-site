import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import CartIcon from "@mui/icons-material/ShoppingCart";
import InputBase from "@mui/material/InputBase";
import ThemeSwitch from "../ThemeSwitch";
// import User from "../../utils/User";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const ThemeSwitcher = () => {
  const currentTheme = localStorage.getItem("theme");

  const handleThemeChange = () => {
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    window.location.reload();
  };

  return (
    <ThemeSwitch
      checked={currentTheme === "dark"}
      onChange={handleThemeChange}
    />
  );
};

const Nav = () => {
  return (
    <AppBar position="static">
      <Toolbar style={{ justifyContent: "flex-end" }}>
        <Typography variant="h6">E-Commerce</Typography>
        <Search
          style={{
            marginRight: "auto",
            marginLeft: "2rem",
            flexGrow: 1,
            maxWidth: "500px",
          }}
        >
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        {/* {user.loggedIn ? (
          <Button color="inherit">Profile</Button>
        ) : (
          <Button color="inherit">Sign In/Up</Button>
        )} */}
        <Button color="inherit" style={{ textTransform: "none" }}>
          Sign In/Up
        </Button>
        <IconButton color="inherit">
          <CartIcon />
        </IconButton>
        <Toolbar style={{ alignSelf: "flex-end" }}>
          <ThemeSwitcher />
        </Toolbar>
      </Toolbar>
    </AppBar>
  );
};
export default Nav;
