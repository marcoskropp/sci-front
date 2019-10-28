import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import CreateUser from './pages/Users/CreateUser';
import { EditUser } from './pages/Users/EditUser';
import { ShowUser } from './pages/Users/ShowUser';

/*
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
*/
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/users/create" component={CreateUser} />
          <Route path="/users/:id/edit" component={EditUser} />
          <Route path="/users/:id" component={ShowUser} />
        </Switch>
      </BrowserRouter>
    );
  }
}
/* <Route path="/" exact component={Dashboard} />
<Route path="/dashboard" component={Dashboard} /> */
export default App;