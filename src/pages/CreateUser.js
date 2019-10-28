import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CreateUser extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            username: '',
            email: '',
            password: '',
            roles: [{ id: 1, name: 'Professor' }, { id: 2, name: 'Aluno' }]
        };
    }


    handleInputChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = async event => {
        event.preventDefault();
    };

    render() {
        return (
            <div>
                <h1>REGISTRAR</h1>
                {this.renderForm()}
            </div>
        );
    }

    renderForm() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input name="name" type="text" placeholder="Nome" />
                <input name="username" type="text" placeholder="Username" />
                <input name="email" type="email" placeholder="Email" />
                <input name="password" type="password" placeholder="Username" />
                <select name="role">
                    {this.renderOptions()}
                </select>
                <button type="submit">Cadastrar</button>
                <Link to="/" >Voltar</Link>
            </form>
        );
    }

    renderOptions = () => {
        return this.state.roles.map(role =>
            <option value={role.id}>{role.name}</option>
        )
    }
}
