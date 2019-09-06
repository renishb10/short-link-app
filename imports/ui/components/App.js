import React, { Component } from 'react';

import { Route, BrowserRouter, Switch, withRouter } from 'react-router-dom';

import Signup from '../imports/ui/components/Signup';
import Link from '../imports/ui/components/Link';
import NotFound from '../imports/ui/components/NotFound';
import Login from '../imports/ui/components/Login';

class App extends Component {
  const routes = (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/link" component={Link} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
  
  render() {
    return (
      {routes}
    )
  }
}

export default withRouter(App);
