import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import CreateUser from './pages/CreateUser';
/*import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import EditUser from './pages/EditUser';
import ShowUser from './pages/ShowUser';*/

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/users/create" component={CreateUser} />
          
        </Switch>
      </BrowserRouter>
    );
  }
}
/* <Route path="/" exact component={Dashboard} />
<Route path="/users/:id/edit" component={EditUser} />
<Route path="/users/:id" component={ShowUser} />
<Route path="/dashboard" component={Dashboard} /> */
export default App;