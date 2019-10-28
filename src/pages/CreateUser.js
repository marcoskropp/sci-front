import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  TextField,
  Select,
  Typography
} from "@material-ui/core";

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      username: "",
      email: "",
      password: "",
      role_id: 1,
      roles: [{ id: 1, name: "Professor" }, { id: 2, name: "Aluno" }]
    };

    this.link = React.forwardRef((props, ref) => (
      <Link innerRef={ref} {...props} />
    ));
  }

  handleInputChange = event => {
    console.log(event);

    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async event => {
    event.preventDefault();
  };

  render() {
    return (
      <Container>
        <div>
          <Typography variant="h4" component="h2" gutterBottom>
            REGISTRAR
          </Typography>
          {this.renderForm()}
        </div>
      </Container>
    );
  }

  renderForm = () => (
    <form onSubmit={this.handleSubmit}>
      <Grid container spacing={3} justify="center">
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Nome"
            name="name"
            value={this.state.name}
            variant="outlined"
            onChange={this.handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Username"
            name="username"
            value={this.state.username}
            variant="outlined"
            onChange={this.handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            onChange={this.handleInputChange}
            value={this.state.email}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Password"
            name="password"
            onChange={this.handleInputChange}
            value={this.state.password}
            variant="outlined"
            type="password"
          />
        </Grid>
        <Grid item xs={6}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel variant="outlined" htmlFor="role_id">
              Tipo
            </InputLabel>
            <Select
              name="role_id"
              onChange={this.handleInputChange}
              value={this.state.role_id}
              labelWidth={35}
              inputProps={{ id: "role_id", name: "role_id" }}
            >
              {this.renderOptions()}
            </Select>
          </FormControl>
          {/* <select name="role_id">{this.renderOptions()}</select> */}
        </Grid>
        <Grid item xs={6}>
          <Button type="submit" variant="contained" color="primary">
            Cadastrar
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="contained"
            color="secondary"
            to="/"
            component={this.link}
          >
            Voltar
          </Button>
        </Grid>
      </Grid>
    </form>
  );

  renderOptions = () =>
    // this.state.roles.map(role => <option value={role.id}>{role.name}</option>);
    this.state.roles.map(role => (
      <MenuItem value={role.id}>{role.name}</MenuItem>
    ));
}
