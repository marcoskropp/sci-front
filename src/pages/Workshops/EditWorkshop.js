import React, { useState, useEffect, forwardRef } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Grid,
  Paper,
  Button,
  Container,
  TextField,
  Typography
} from '@material-ui/core';

import { update } from '../../services/Workshops.services';

export default function EditWorkshop(props) {
  const workshopId = props.match.params.id;

  const [workshop, setWorkshop] = useState({
    id: 0,
    title: '',
    description: '',
    place: '',
    startDate: '',
    endDate: ''
  });

  useEffect(() => {
    const getWorkshop = async () => {
      const myWorkshop = await update(workshopId);
      setWorkshop({ ...myWorkshop });
    };
    getWorkshop();
  }, [workshopId]);

  const link = forwardRef((props, ref) => (
    <Link innerRef={ref} {...props} />
  ));

  const handleChange = event => {
    const { name, value } = event.target;

    setWorkshop({ ...workshop, [name]: value });
  };

  const renderForm = () => {
    const { title, description, place, startDate, endDate } = workshop;

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
  };

  return (
    <Container>
      <Paper style={{ padding: '30px' }}>
        <Typography variant="h4" component="h2" gutterBottom>
                    EDITAR
        </Typography>
        {renderForm()}
      </Paper>
    </Container>
  );
}

EditWorkshop.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number
    })
  })
};
