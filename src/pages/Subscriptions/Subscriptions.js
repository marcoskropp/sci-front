import { Paper, Button, Container, Typography, } from "@material-ui/core";
import React, { useState, useEffect, forwardRef } from 'react';
import { Link } from 'react-router-dom';

import { index } from '../../services/Subscriptions.services';
import TableRow from '../../components/TableRow.js'

export default function Subscriptions() {
    const [workshops, setWorkshops] = useState([]);

    useEffect(() => {
        const getWorkshops = async () => {
            const myWorkshops = await index();

            setWorkshops(myWorkshops);
        };
        getWorkshops();
    }, []);

    const save = () => {

    }

    const link = forwardRef((props, ref) => (
        <Link innerRef={ref} {...props} />
    ));

    const renderTable = () => {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Descrição</th>
                        <th>Local</th>
                        <th>Data de Início</th>
                        <th>Data de Término</th>
                    </tr>
                </thead>
                <tbody>
                    {workshops.map(workshop => (
                        <TableRow key={workshop.id} {...workshop} />
                    ))}
                </tbody>
            </table>
        );
    };

    return (
        <Container>
            <Paper style={{ padding: "30px" }}>
                <Typography variant="h4" component="h2" gutterBottom>
                    INSCREVER-SE
                </Typography>
                {renderTable()}
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={save()}
                >
                    Salvar
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    to="/"
                    component={link}
                >
                    Voltar
                </Button>
            </Paper>
        </Container>
    );
}
