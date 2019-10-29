import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import CreateUser from "./pages/Users/CreateUser";
import { EditUser } from "./pages/Users/EditUser";
import { ShowUser } from "./pages/Users/ShowUser";
import CreateWorkshop from "./pages/Workshops/CreateWorkshop";
import ShowWorkshop from "./pages/Workshops/ShowWorkshop";
import Login from "./pages/Login";
import withAuthChecking from "./pages/withAuthChecking";
/*
import Dashboard from './pages/Dashboard';
*/

function Dashboard() {
  return <p>Dashboard</p>;
}

export default function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/dashboard" component={withAuthChecking(Dashboard)} />
        <Route path="/users/create" component={CreateUser} />
        <Route path="/users/:id/edit" component={EditUser} />
        <Route path="/users/:id" component={ShowUser} />
        <Route path="/workshops/create" component={CreateWorkshop} />
        <Route path="/workshops/:id" component={ShowWorkshop} />
      </Switch>
    </BrowserRouter>
  );
}
/* <Route path="/" exact component={Dashboard} />
<Route path="/dashboard" component={Dashboard} /> */
