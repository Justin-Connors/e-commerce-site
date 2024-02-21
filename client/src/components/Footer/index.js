import React from "react";
import { styled, alpha } from "@mui/material/styles";
import { Typography, Link } from "@mui/material";

const useStyles = styled((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Typography variant="body2" color="textSecondary" align="center">
        <Link color="inherit" href="https://example.com/">
          Justin Connors
        </Link>
      </Typography>
    </footer>
  );
};

export default Footer;
