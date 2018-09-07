import React from 'react';
import ReactDom from 'react-dom';
// import { render } from 'react-dom';
// import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

// Styles
import styles from '../assets/styles/app.scss';

ReactDom.render(
  <Router history={browserHistory} routes={routes} />,
  document.querySelector('#login-sign-up')
);