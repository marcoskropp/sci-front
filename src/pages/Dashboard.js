import React from "react";
import withBars from "../hocs/withBars";
import withAuthChecking from "../hocs/withAuthChecking";
import { Container, Typography } from "@material-ui/core";

function Dashboard() {
  return (
    <Container>
      <Typography>Dashboard</Typography>
    </Container>
  );
}

export default withBars(withAuthChecking(Dashboard));
