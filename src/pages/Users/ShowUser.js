import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { index } from '../../services/Roles.services';
import { show } from '../../services/Users.services';

export const ShowUser = (props) => {
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
            const myUser = await show(props.match.params.id);
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
    }, [props.match.params.id]);

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
            <div>
                <input id="name" name="name" value={name} type="text" placeholder="Nome" disabled />
                <input id="username" name="username" value={username} type="text" placeholder="Username" disabled />
                <input id="email" name="email" value={email} type="email" placeholder="Email" disabled />
                <select id="roled" name="roleId" disabled>
                    {renderOptions()}
                </select>
                <Link to="/" >Voltar</Link>
            </div>
        );
    }

    return (
        <div>
            <h1>Visualizar Usuário</h1>
            {renderForm()}
        </div>
    );
}
