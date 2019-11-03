import React, { useState, useEffect, forwardRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Grid,
  Paper,
  Button,
  Container,
  TextField,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@material-ui/core';

import withBars from '../../hocs/withBars';
import withAuthChecking from '../../hocs/withAuthChecking';

import { show } from '../../services/Workshops.services';

const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto',
    marginTop: 30
  },
  table: {
    minWidth: 650
  }
});

function ShowWorkshop(props) {
  const classes = useStyles();

  const [workshop, setWorkshop] = useState({});

  useEffect(() => {
    const getWorkshop = async () => {
      const myWorkshop = await show(props.match.params.id);
      setWorkshop({ ...myWorkshop });
    };
    getWorkshop();
  }, [props.match.params.id]);

  const link = forwardRef((props, ref) => <Link innerRef={ref} {...props} />);

  const renderForm = () => {
    const { title, description, place, startDate, endDate } = workshop;

    return (
      <Grid container spacing={3} justify="center">
        <Grid item xs={12}>
          <TextField
            fullWidth
            name="title"
            value={title}
            variant="outlined"
            disabled
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            name="description"
            value={description}
            variant="outlined"
            disabled
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            name="place"
            value={place}
            variant="outlined"
            disabled
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            name="startDate"
            value={startDate}
            variant="outlined"
            type="text"
            disabled
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            name="endDate"
            value={endDate}
            variant="outlined"
            type="text"
            disabled
          />
        </Grid>
      </Grid>
    );
  };

  const renderTable = () => (
    <Table className={classes.table} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Incritos</TableCell>
          <TableCell align="right">Email</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {workshop.users
            && workshop.users.map(({ id, name, email }) => (
              <TableRow key={id}>
                <TableCell component="th" scope="row">
                  {name}
                </TableCell>
                <TableCell align="right">{email}</TableCell>
              </TableRow>
            ))}
      </TableBody>
    </Table>
  );

  return (
    <Container>
      <Paper style={{ padding: '30px' }}>
        <Typography variant="h4" component="h2" gutterBottom>
          VISUALIZAR
        </Typography>
        {renderForm()}
        {renderTable()}
        <Grid item xs={12}>
          <Button variant="contained" color="secondary" to="/" component={link}>
            Voltar
          </Button>
        </Grid>
      </Paper>
    </Container>
  );
}

ShowWorkshop.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number
    })
  })
};


export default withBars(withAuthChecking(ShowWorkshop));
