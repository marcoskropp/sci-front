import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { index } from '../../services/Roles.services';
import { store } from '../../services/Users.services';

export default function CreateUser(props) {
    const [user, setUser] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
        roleId: 0
    });
    const [roles, setRoles] = useState([]);

    useEffect(() => {
        const getRoles = async () => {
            const roles = await index();
            setRoles(roles);
            setUser(user => user = { ...user, roleId: roles[0].id });
        }
        getRoles();
    }, []);

    const handleSubmit = async event => {
        event.preventDefault();

        await store({ ...user, person_id: user.personId });

        alert('Cadastrado com sucesso');

        props.history.push('/');
    };

    const handleChange = event => {
        const { name, value } = event.target;

        setUser({ ...user, [name]: value });
    }

    const renderOptions = () => {
        return roles.map(role => {
            if (user.roleId === role.id)
                return <option key={role.id} value={role.id} selected>{role.name}</option>
            return <option key={role.id} value={role.id}>{role.name}</option>
        })
    }

    const renderForm = () => {
        const { name, username, email, password } = user

        return (
            <form onSubmit={handleSubmit}>
                <input id="name" name="name" onChange={handleChange} value={name} type="text" placeholder="Nome" />
                <input id="username" name="username" onChange={handleChange} value={username} type="text" placeholder="Username" />
                <input id="email" name="email" onChange={handleChange} value={email} type="email" placeholder="Email" />
                <input id="password" name="password" onChange={handleChange} value={password} type="password" placeholder="Password" />
                <select id="roled" name="roleId" onChange={handleChange}>
                    {renderOptions()}
                </select>
                <button type="submit">Cadastrar</button>
                <Link to="/" >Voltar</Link>
            </form>
        );
    }

    return (
        <div>
            <h1>Cadastrar Usuário</h1>
            {renderForm()}
        </div>
    );
}
