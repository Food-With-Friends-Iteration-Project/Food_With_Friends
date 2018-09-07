import React from 'react';
import { Route, IndexRoute } from 'react-router';
// import App from './components/app';
import Login from './components/login/index';
import SignUp from './components/sign-up/index';


export default (
  <Route path='/' component={Login}>
    <IndexRoute component={Login} />
    <Route path='sign-up' component={SignUp} />
    <Route path='*' component={Login} />
  </Route>
);