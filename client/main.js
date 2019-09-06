import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Tracker } from 'meteor/tracker';


import App from '../imports/ui/components/App';

const authenticatedPages = [];
const unAuthenticatedPages = [];

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
});

Meteor.startup(() => {
  render(<App />, document.getElementById('app'));
});

export default withRouter(Header);