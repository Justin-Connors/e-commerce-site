import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import Auth from "../../utils/auth";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { LOGIN } from "../../utils/mutations";

const Login = (props) => {
  const navigate = useNavigate();
  // const [login, { error }] = useMutation(LOGIN);
  const [login] = useMutation(LOGIN);
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    document.title = props.title;
  }, [props.title]);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography component="h1" variant="h5">
        Login
      </Typography>
      <Box
        component="form"
        onSubmit={handleFormSubmit}
        noValidate
        sx={{ mt: 1 }}
      >
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          onChange={handleChange}
        />

        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          onChange={handleChange}
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          color="inherit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Login
        </Button>
        <Grid container>
          <Grid item>
            <Link
              variant="body2"
              onClick={() => {
                navigate("/signup");
              }}
              style={{ cursor: "pointer" }}
            >
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Login;
