import React, { useState, useEffect, forwardRef } from 'react';
import { Paper, Button, Container, Typography, } from "@material-ui/core";
import { Link } from 'react-router-dom';

import { index, subscriptions } from '../../services/Subscriptions.services';
import TableRow from '../../components/TableRow.js'

export default function Subscriptions() {
    const [workshops, setWorkshops] = useState([]);
    const [currentWorkhops, setCurrentWorkshops] = useState([]);

    useEffect(() => {
        const getWorkshops = async () => {
            const myWorkshops = await index();

            setWorkshops(myWorkshops);
        };
        getWorkshops();
    }, []);

    const checkWorkshop = (id, subscribed) => {
        let includedWorkshop = true

        if (subscribed === undefined) return

        if (!currentWorkhops.length) {
            return setCurrentWorkshops([{ id, subscribed }])
        }

        for (let index = 0; index < currentWorkhops.length; index++) {
            if (id === currentWorkhops[index].id) {
                setCurrentWorkshops(
                    currentWorkhops
                        .slice(0, index)
                        .concat(
                            currentWorkhops
                                .slice(index + 1, currentWorkhops.length)
                        )
                )
                break;
            }

            if (id !== currentWorkhops[index].id) {
                includedWorkshop = false
            }
        }

        if (!includedWorkshop)
            return setCurrentWorkshops([...currentWorkhops, { id, subscribed }])
    }

    const handleSubmit = event => {
        event.preventDefault()

        console.log(currentWorkhops)
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
                        <TableRow checkWorkshop={checkWorkshop} key={workshop.id} {...workshop} />
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
                <form onSubmit={handleSubmit}>
                    {renderTable()}
                    <Button type="submit" variant="contained" color="secondary">
                        Salvar
                    </Button>
                </form>
                <Button variant="contained" color="secondary" to="/" component={link}>
                    Voltar
                </Button>
            </Paper>
        </Container>
    );
}
