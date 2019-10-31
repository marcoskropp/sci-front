import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper
} from "@material-ui/core";

import withBars from "../hocs/withBars";
import withAuthChecking from "../hocs/withAuthChecking";

import { index } from "../services/Workshops.services";

const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto',
    marginTop: 30
  },
  table: {
    minWidth: 650
  },
});

function Dashboard() {
  const classes = useStyles();

  const [workshops, setWorkshops] = useState([])

  useEffect(() => {
    const getWorkshops = async () => {
      const workshops = await index();
      setWorkshops(workshops);
    }
    getWorkshops();
  }, [])

  return (
    <Container>
      <Typography align="center" variant="h3">
        Dashboard
      </Typography>
      <Paper className={classes.root}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Título</TableCell>
              <TableCell align="right">Descrição</TableCell>
              <TableCell align="right">Local</TableCell>
              <TableCell align="right">Data de Início</TableCell>
              <TableCell align="right">Data de Término</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {workshops.map(({ id, title, description, place, startDate, endDate }) => (
              <TableRow key={id}>
                <TableCell component="th" scope="row">
                  {title}
                </TableCell>
                <TableCell align="right">{description}</TableCell>
                <TableCell align="right">{place}</TableCell>
                <TableCell align="right">{startDate}</TableCell>
                <TableCell align="right">{endDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
}

export default withBars(withAuthChecking(Dashboard));
