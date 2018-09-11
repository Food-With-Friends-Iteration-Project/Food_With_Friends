import { connect } from 'react-redux';
import React, { Component } from 'react';

class SignUp extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: ''
    }
    this.createUser = this.createUser.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
  }

  createUser(){
    console.log("createUser in signup component");
    const { email, password } = this.state;
    const url = '/sign-up'
    fetch(url,{
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({email, password_digest: password})
    }).then((res) => {
      return res.json()
    }).then((json_resp) => {
      console.log({json_resp});
      this.setState({password: ''});
      this.setState({email: ''});
    }).catch((err) => {
      console.log('error from sign-up request', err);
    })
  }

  changeEmail(event){
    this.setState({email: event.target.value})
  }
  changePassword(event){
    this.setState({password: event.target.value})
  }
  render() {
    return (
      <div className="sign-up-container">
        <form className="flex-form" method='POST' action='/sign-up'>
          <div className="split-form" value={this.state.email} onChange={this.changeEmail}>Email:<input type="text" /></div>
          <div className="split-form" value={this.state.password} onChange={this.changePassword}>Password:<input type="text" /></div>
          <button className="button bg-blue" onClick={this.createUser}>Sign Up</button>
        </form>
      </div>
    )
  }
}

export default SignUp;
