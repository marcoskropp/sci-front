import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { index } from '../../services/Roles.services';
import { update, show } from '../../services/Users.services';

export const EditUser = (props) => {
    const userId = props.match.params.id;

    const [roles, setRoles] = useState([]);
    const [user, setUser] = useState({
        id: null,
        name: '',
        username: '',
        email: '',
        roleId: null
    });

    useEffect(() => {
        const getRoles = async () => {
            const roles = await index();
            setRoles(roles);
        };
        const getUser = async () => {
            const myUser = await show(userId);
            setUser({
                id: myUser.id,
                name: myUser.name,
                username: myUser.username,
                email: myUser.email,
                roleId: myUser.role_id
            });
        };
        getRoles();
        getUser();
    }, [userId]);

    const handleSubmit = async event => {
        event.preventDefault();

        const { roleId, ...rest } = user;
        
        await update({ ...rest, role_id: roleId });

        alert('Editado com sucesso');

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
        const { name, username, email } = user

        return (
            <form onSubmit={handleSubmit}>
                <input id="name" name="name" onChange={handleChange} value={name} type="text" placeholder="Nome" />
                <input id="username" name="username" onChange={handleChange} value={username} type="text" placeholder="Username" />
                <input id="email" name="email" onChange={handleChange} value={email} type="email" placeholder="Email" />
                <select id="roled" name="roleId" onChange={handleChange}>
                    {renderOptions()}
                </select>
                <button type="submit">Editar</button>
                <Link to="/" >Voltar</Link>
            </form>
        );
    }

    return (
        <div>
            <h1>Editar Usuário</h1>
            {renderForm()}
        </div>
    );
}
