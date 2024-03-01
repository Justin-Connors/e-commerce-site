import React from "react";
import { Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <footer>
      <Typography variant="body2" color="textSecondary" align="center">
        <Link color="inherit" href="https://example.com/">
          Justin Connors
        </Link>
      </Typography>
    </footer>
  );
};

export default Footer;
