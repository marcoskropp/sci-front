import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import CreateUser from "./pages/Users/CreateUser";
import { EditUser } from "./pages/Users/EditUser";
import { ShowUser } from "./pages/Users/ShowUser";
import CreateWorkshop from "./pages/Workshops/CreateWorkshop";
import ShowWorkshop from "./pages/Workshops/ShowWorkshop";
import Login from "./pages/Login";
import Subscriptions from "./pages/Subscriptions/Subscriptions";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/users/create" component={CreateUser} />
        <Route path="/users/:id/edit" component={EditUser} />
        <Route path="/users/:id" component={ShowUser} />
        <Route path="/workshops/create" component={CreateWorkshop} />
        <Route path="/workshops/:id" component={ShowWorkshop} />
        <Route path="/subscriptions" component={Subscriptions} />
      </Switch>
    </BrowserRouter>
  );
}
/* <Route path="/" exact component={Dashboard} />
<Route path="/dashboard" component={Dashboard} /> */
