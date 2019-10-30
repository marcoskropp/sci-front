import React, { useState, useEffect, forwardRef } from "react";
import withBars from "../../hocs/withBars";
import withAuthChecking from "../../hocs/withAuthChecking";
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
import { Link } from "react-router-dom";

import { index } from "../../services/Subscriptions.services";
import TableRow from "../../components/TableRow.js";

function Subscriptions() {
  const [workshops, setWorkshops] = useState([]);

  useEffect(() => {
    const getWorkshops = async () => {
      const myWorkshops = await index();

      setWorkshops(myWorkshops);
    };
    getWorkshops();
  }, []);

  const save = () => {};

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
              <TableRow key={workshop.id} {...workshop} />
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
        <Button variant="contained" color="primary" onClick={save()}>
          Salvar
        </Button>
        &nbsp;
        <Button
          variant="contained"
          color="default"
          to="/dashboard"
          component={link}
        >
          Voltar
        </Button>
      </Paper>
    </Container>
  );
}

export default withBars(withAuthChecking(Subscriptions));
