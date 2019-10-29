import React, { forwardRef, useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../services/Users.services";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography
} from "@material-ui/core";

export default function Login(props) {
  const [user, setUser] = useState({ email: "", password: "" });

  const link = forwardRef((props, ref) => <Link {...props} ref={ref} />);

  const handleChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = user;

    const { token } = await login(email, password);

    if (token) {
      localStorage.setItem("jwt_token", token);
      props.history.push("/dashboard");
    }
  };

  return (
    <Box height="70vh" display="flex" alignItems="center">
      <Container maxWidth="sm">
        <Paper style={{ padding: "50px" }}>
          <Typography variant="h4" align="center" gutterBottom>
            Login
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="E-mail"
                  name="email"
                  onChange={handleChange}
                  required
                  value={user.email}
                  variant="outlined"
                  type="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Password"
                  name="password"
                  onChange={handleChange}
                  required
                  value={user.password}
                  variant="outlined"
                  type="password"
                />
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <br />
              <Button variant="contained" color="primary" type="submit">
                Entrar
              </Button>
              &nbsp;
              <Button
                to="/users/create"
                component={link}
                variant="contained"
                type="submit"
              >
                Cadastro
              </Button>
            </Grid>
          </form>
        </Paper>
      </Container>
    </Box>
  );
}
