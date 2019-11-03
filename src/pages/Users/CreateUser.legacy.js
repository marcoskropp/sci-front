import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { index } from '../../services/Roles.services';
import { store } from '../../services/Users.services';

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      username: '',
      email: '',
      password: '',
      roleId: 1,
      roles: []
    };
  }

  componentDidMount() {
    this.updateRoles();
  }

  updateRoles = async () => {
    const roles = await index();

    this.setState({ roles, roleId: roles[0].id });
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const {
      name, username, email, password, roleId
    } = this.state;

    if (!name || !username || !email || !password || !roleId) {
      return;
    }

    await store({
      name,
      username,
      email,
      password,
      role_id: roleId
    });

    alert('Cadastrado com sucesso');

    this.props.history.push('/');
  };

  renderForm() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          id="name"
          name="name"
          onChange={this.handleChange}
          type="text"
          placeholder="Nome"
        />
        <input
          id="username"
          name="username"
          onChange={this.handleChange}
          type="text"
          placeholder="Username"
        />
        <input
          id="email"
          name="email"
          onChange={this.handleChange}
          type="email"
          placeholder="Email"
        />
        <input
          id="password"
          name="password"
          onChange={this.handleChange}
          type="password"
          placeholder="Password"
        />
        <select id="roled" name="roleId" onChange={this.handleChange}>
          {this.renderOptions()}
        </select>
        <button type="submit">Cadastrar</button>
        <Link to="/">Voltar</Link>
      </form>
    );
  }

  renderOptions = () => {
    this.state.roles.map(role => (
      <option key={role.id} id={role.id} value={role.id}>
        {role.name}
      </option>
    ));
  };

  render() {
    return (
      <div>
        <h1>Cadastrar Usuário</h1>
        {this.renderForm()}
      </div>
    );
  }
}

CreateUser.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func
  })
};
