import React, { useState, useEffect, forwardRef } from 'react';
import { Link } from 'react-router-dom';
import {
    Grid,
    Paper,
    Button,
    Container,
    TextField,
    Typography
} from "@material-ui/core";

import { show } from '../../services/Workshops.services';

export default function ShowWorkshop(props) {
    const [workshop, setWorkshop] = useState({
        title: '',
        description: '',
        place: '',
        startDate: '',
        endDate: ''
    });

    useEffect(() => {
        const getWorkshop = async () => {
            const myWorkshop = await show(props.match.params.id);
            setWorkshop({ ...myWorkshop });
        };
        getWorkshop();
    }, [props.match.params.id]);

    const link = forwardRef((props, ref) => (
        <Link innerRef={ref} {...props} />
    ));

    const handleChange = event => {
        const { name, value } = event.target;

        setWorkshop({ ...workshop, [name]: value });
    }

    const renderForm = () => {
        const { title, description, place, startDate, endDate } = workshop

        return (
            <Grid container spacing={3} justify="center">
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Título"
                        name="title"
                        value={title}
                        variant="outlined"
                        onChange={handleChange}
                        disabled
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        fullWidth
                        label="Descrição"
                        name="description"
                        value={description}
                        variant="outlined"
                        onChange={handleChange}
                        disabled
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        fullWidth
                        label="Local"
                        name="place"
                        onChange={handleChange}
                        value={place}
                        variant="outlined"
                        disabled
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        fullWidth
                        label="Data de início"
                        name="startDate"
                        onChange={handleChange}
                        value={startDate}
                        variant="outlined"
                        type="date"
                        disabled
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        fullWidth
                        label="Data de término"
                        name="endDate"
                        onChange={handleChange}
                        value={endDate}
                        variant="outlined"
                        type="date"
                        disabled
                    />
                </Grid>
                <Grid item xs={12}>
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
        );
    }

    return (
        <Container>
            <Paper style={{ padding: "30px" }}>
                <Typography variant="h4" component="h2" gutterBottom>
                    VISUALIZAR
                </Typography>
                {renderForm()}
            </Paper>
        </Container>
    );
}
