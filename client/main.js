import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Signup from '../imports/ui/components/Signup';
import Link from '../imports/ui/components/Link';
import NotFound from '../imports/ui/components/NotFound';
import Login from '../imports/ui/components/Login';

const routes = (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/link" component={Link} />
      <Route path="*" component={NotFound} />
    </Switch>
  </BrowserRouter>
)

Meteor.startup(() => {
  render(routes, document.getElementById('app'));
});
