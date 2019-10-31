import React, { useState, useEffect, forwardRef } from 'react';
import { Link } from 'react-router-dom';
import {
    Paper,
    Button,
    Container,
    Typography,
    Table,
    TableBody,
    TableHead,
    TableCell,
    TableRow as TableRowMui
} from "@material-ui/core";

import { index, subscriptions } from '../../services/Subscriptions.services';
import withAuthChecking from "../../hocs/withAuthChecking";
import TableRow from '../../components/TableRow.js';
import withBars from "../../hocs/withBars";

function Subscriptions() {
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
        let includedWorkshop = true;
        console.log(id)
        if (subscribed === undefined) return;
        console.log(currentWorkhops)

        if (!currentWorkhops.length) {
            return setCurrentWorkshops([{ id, subscribed }]);
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
                );
                break;
            }

            if (id !== currentWorkhops[index].id) {
                includedWorkshop = false;
            }
        }

        if (!includedWorkshop)
            return setCurrentWorkshops([...currentWorkhops, { id, subscribed }]);
    }

    const save = () => { 
        console.log('asd')
        console.log(currentWorkhops)
    };

    const link = forwardRef((props, ref) => <Link innerRef={ref} {...props} />);

    const renderTable = () => {
        return (
            <div style={{ overflowX: "auto", width: "100%" }}>
                <Table>
                    <TableHead>
                        <TableRowMui>
                            <TableCell />
                            <TableCell>Título</TableCell>
                            <TableCell>Descrição</TableCell>
                            <TableCell>Local</TableCell>
                            <TableCell>Data de Início</TableCell>
                            <TableCell>Data de Término</TableCell>
                        </TableRowMui>
                    </TableHead>
                    <TableBody>
                        {workshops.map(workshop => (
                            <TableRow checkWorkshop={checkWorkshop} key={workshop.id} {...workshop} />
                        ))}
                    </TableBody>
                </Table>
            </div>
        );
    };

    return (
        <Container>
            <Paper style={{ padding: "30px" }}>
                <Typography variant="h4" component="h2" gutterBottom>
                    INSCREVER-SE
        </Typography>
                {renderTable()}
                <br />
                <Button variant="contained" color="primary" onClick={save}>
                    Salvar
        </Button>
                &nbsp;
        <Button variant="contained" color="default" to="/dashboard" component={link}>
                    Voltar
        </Button>
            </Paper>
        </Container>
    );
}

export default withBars(withAuthChecking(Subscriptions));
