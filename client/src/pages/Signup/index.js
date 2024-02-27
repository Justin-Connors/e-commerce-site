import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";
import validator from "validator";

const Signup = (props) => {
  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [addUser] = useMutation(ADD_USER);
  const [blockSubmit, setBlockSubmit] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const { firstName, lastName, email, password } = formState;
    const firstNameValid = validator.isLength(firstName, { min: 1 });
    const lastNameValid = validator.isLength(lastName, { min: 1 });
    const emailValid = validator.isEmail(email);
    const passwordValid = validator.isStrongPassword(password, {
      min: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    });
    const result =
      firstNameValid && lastNameValid && emailValid && passwordValid;

    setBlockSubmit(!result);
  }, [formState]);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const mutationResponse = await addUser({
        variables: {
          firstName: formState.firstName,
          lastName: formState.lastName,
          email: formState.email,
          password: formState.password,
        },
      });
      const token = mutationResponse.data.addUser.token;
      Auth.login(token);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
    if (error) {
      console.log(error);
      setError("");
    }
  };

  useEffect(() => {
    document.title = props.title;
  }, [props.title]);

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
        Sign Up
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="firstName"
          label="First Name"
          name="firstName"
          autoComplete="firstName"
          autoFocus
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="lastName"
          label="Last Name"
          name="lastName"
          autoComplete="lastName"
          autoFocus
          onChange={handleChange}
        />
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
          label="Password * Min. 8 characters with at least 1 lowercase, 1 uppercase, 1 number, and 1 symbol."
          type="password"
          id="password"
          autoComplete="current-password"
          onChange={handleChange}
        />
        <Button
          type="submit"
          color="inherit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          disabled={blockSubmit}
        >
          Sign Up
        </Button>
        <Grid container>
          <Grid item>
            <Link
              variant="body2"
              onClick={() => {
                navigate("/login");
              }}
              style={{ cursor: "pointer" }}
            >
              {"Already have an account? Login"}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Signup;
