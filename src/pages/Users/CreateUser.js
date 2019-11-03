import React, { useState, useEffect, forwardRef } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography
} from '@material-ui/core';

import { index } from '../../services/Roles.services';
import { store } from '../../services/Users.services';

export default function CreateUser(props) {
  const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    roleId: ''
  });
  const [roles, setRoles] = useState([]);

  const link = forwardRef((props, ref) => <Link innerRef={ref} {...props} />);

  useEffect(() => {
    const getRoles = async () => {
      const roles = await index();
      setRoles(roles);
      setUser(user => ({ ...user, roleId: roles[0].id }));
    };
    getRoles();
  }, []);

  const handleSubmit = async event => {
    event.preventDefault();

    const { roleId, ...rest } = user;

    await store({ ...rest, role_id: roleId });

    props.history.push('/');
  };

  const handleChange = event => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  const renderOptions = () => roles.map(role => {
    if (user.roleId === role.id) {
      return (
        <MenuItem key={role.id} value={role.id} selected>
          {role.name}
        </MenuItem>
      );
    }
    return (
      <MenuItem key={role.id} value={role.id}>
        {role.name}
      </MenuItem>
    );
  });

  const renderForm = () => {
    const {
      name, username, email, password, roleId
    } = user;

    return (
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3} justify="center" alignItems="center">
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Nome"
              name="name"
              value={name}
              variant="outlined"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Username"
              name="username"
              value={username}
              variant="outlined"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              onChange={handleChange}
              value={email}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Password"
              name="password"
              onChange={handleChange}
              value={password}
              variant="outlined"
              type="password"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel variant="outlined" htmlFor="roleId">
                Tipo
              </InputLabel>
              <Select
                name="roleId"
                onChange={handleChange}
                value={roleId}
                labelWidth={35}
                inputProps={{ id: 'roleId', name: 'roleId' }}
              >
                {renderOptions()}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Cadastrar
            </Button>
            &nbsp;
            <Button
              variant="contained"
              color="secondary"
              to="/"
              component={link}
            >
              Voltar
            </Button>
          </Grid>
        </Grid>
      </form>
    );
  };

  return (
    <Container>
      <br />
      <Paper style={{ padding: '30px' }}>
        <Typography variant="h4" component="h2" gutterBottom>
          REGISTRAR
        </Typography>
        {renderForm()}
      </Paper>
    </Container>
  );
}

CreateUser.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func
  })
};
