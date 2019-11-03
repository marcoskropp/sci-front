import React, { useState, forwardRef } from 'react';
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

import withBars from '../../hocs/withBars';
import withAuthChecking from '../../hocs/withAuthChecking';

import { store } from '../../services/Workshops.services';

function CreateWorkshop(props) {
  const [workshop, setWorkshop] = useState({
    title: '',
    description: '',
    place: '',
    startDate: '',
    endDate: ''
  });

  const link = forwardRef((props, ref) => <Link innerRef={ref} {...props} />);

  const handleSubmit = async event => {
    event.preventDefault();

    await store(workshop);

    props.history.push('/');
  };

  const handleChange = event => {
    const { name, value } = event.target;

    setWorkshop({ ...workshop, [name]: value });
  };

  const renderForm = () => {
    const { title, description, place, startDate, endDate } = workshop;

    return (
      <form onSubmit={handleSubmit}>
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
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Cadastrar
            </Button>
            &nbsp;
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
      </form>
    );
  };

  return (
    <Container>
      <Paper style={{ padding: '30px' }}>
        <Typography variant="h4" component="h2" gutterBottom>
          REGISTRAR
        </Typography>
        {renderForm()}
      </Paper>
    </Container>
  );
}

CreateWorkshop.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func
  })
};


export default withBars(withAuthChecking(CreateWorkshop));
