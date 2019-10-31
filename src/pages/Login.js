import React, { forwardRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { login } from "../services/Auth.services";
import {
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography
} from "@material-ui/core";

export default function Login(props) {
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("jwt_token");

    if (token) {
      props.history.push("/dashboard");
    }
  }, [props.history]);

  const link = forwardRef((props, ref) => <Link {...props} ref={ref} />);

  const handleChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = user;

    const response = await login(email, password);

    if (!response.error) {
      setError("");
      return props.history.push("/dashboard");
    }

    setError(response.message);
  };

  return (
    <Container maxWidth="sm">
      <br />
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
          {error && (
            <Grid item xs={12}>
              <Typography color="error">{error}</Typography>
            </Grid>
          )}
          <br />
          <Grid item xs={12}>
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
  );
}
