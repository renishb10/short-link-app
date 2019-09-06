import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Meteor } from 'meteor/meteor';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ''
    }
  }
  
  onSubmit = (e) => {
    e.preventDefault();

    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();

    Meteor.loginWithPassword({email}, password, (err) => {
      console.log('Login failed!', err);
    });


    this.setState({
      error: 'Something went wrong'
    });
  }

  render() {
    return (
      <div>
        <h1>Login to Short Lnk</h1>
        {this.state.error ? <p>{this.state.error}</p> : undefined}

        <form onSubmit={this.onSubmit}>
          <input type="email" ref="email" name="email" id="email"/>
          <input type="password" ref="password" name="password" id="password"/>
          <button>Login</button>
        </form>
        <Link to="/signup">Have an account?</Link>
      </div>
    )
  }
}

export default Login
