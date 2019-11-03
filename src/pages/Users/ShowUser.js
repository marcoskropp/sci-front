import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { show } from '../../services/Users.services';

export const ShowUser = props => {
  const [user, setUser] = useState({
    id: 0,
    name: '',
    username: '',
    email: '',
    roleId: null,
    role: {
      name: ''
    }
  });

  useEffect(() => {
    const getUser = async () => {
      const myUser = await show(props.match.params.id);
      setUser({ ...myUser });
    };
    getUser();
  }, [props.match.params.id]);

  const renderForm = () => {
    const {
      name,
      username,
      email,
      role: { name: roleName }
    } = user;

    return (
      <div>
        <input
          id="name"
          name="name"
          value={name}
          type="text"
          placeholder="Nome"
          disabled
        />
        <input
          id="username"
          name="username"
          value={username}
          type="text"
          placeholder="Username"
          disabled
        />
        <input
          id="email"
          name="email"
          value={email}
          type="email"
          placeholder="Email"
          disabled
        />
        <input
          id="role"
          name="role"
          value={roleName}
          type="text"
          placeholder="Role"
          disabled
        />
        <Link to="/">Voltar</Link>
      </div>
    );
  };

  return (
    <div>
      <h1>Visualizar Usuário</h1>
      {renderForm()}
    </div>
  );
};

ShowUser.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number
    })
  })
};

ShowUser.defaultProps = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number
    })
  })
};
