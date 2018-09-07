import { connect } from 'react-redux';
import React, { Component } from 'react';
import store from '../store';
import * as types from './constants/actions';

class App extends Component {
  render() {
    return (
      <div className="main-login-container">
        <div className="login-box">
          <form className="flex-form" method='POST' action='/log-in'>
            <input name="username" type="text" placeholder="username" />
            <input name="password" type="password" />
            <button className="button form-button bg-green" type='submit' value='Log in'>Log In</button>
          </form>
          <a href='/sign-up'><div className="button bg-blue">Sign Up</div></a>
        </div>
      </div>
    )
  }
}

export default App;