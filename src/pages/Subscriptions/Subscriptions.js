import React, { useState, useEffect, forwardRef } from "react";
import { Link } from "react-router-dom";
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

import {
  index,
  subscribe,
  unsubscribe
} from "../../services/Subscriptions.services";
import withAuthChecking from "../../hocs/withAuthChecking";
import TableRow from "../../components/TableRow.js";
import withBars from "../../hocs/withBars";

function Subscriptions() {
  const [workshops, setWorkshops] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const getWorkshops = async () => {
      const myWorkshops = await index();
      setWorkshops(myWorkshops);
    };
    getWorkshops();
  }, []);

  const checkWorkshop = id => () => {
    setWorkshops(
      workshops.map(item =>
        item.id === id ? { ...item, subscribed: !item.subscribed } : item
      )
    );
  };

  const save = async () => {
    const unsubscribeWorkshopIds = workshops
      .filter(item => !item.subscribed)
      .map(item => item.id);

    const subscribeWorkshopIds = workshops
      .filter(item => item.subscribed)
      .map(item => item.id);

    const ressub = await subscribe(subscribeWorkshopIds);
    const resunsub = await unsubscribe(unsubscribeWorkshopIds);

    if (ressub && resunsub) {
      setMessage("Salvo com sucesso!");
      setTimeout(() => {
        setMessage("");
      }, 3500);
    }
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
              <TableRow
                checkWorkshop={checkWorkshop(workshop.id)}
                key={workshop.id}
                {...workshop}
              />
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
        {message && (
          <Typography variant="subtitle1" component="p" gutterBottom>
            {message}
          </Typography>
        )}
        <br />
        <Button variant="contained" color="primary" onClick={save}>
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
