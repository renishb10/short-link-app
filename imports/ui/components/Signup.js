import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Accounts } from 'meteor/accounts-base';

class Signup extends Component {
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

    Accounts.createUser({email, password}, (err) => {
      console.log('Signup failed', err);
    });

    // this.setState({
    //   error: 'Something went wrong'
    // });
  }

  render() {
    return (
      <div>
          <h1>Join Short Lnk</h1>

          {this.state.error ? <p>{this.state.error}</p> : undefined}

          <form onSubmit={this.onSubmit}>
            <input type="email" ref="email" name="email" id="email"/>
            <input type="password" ref="password" name="password" id="password"/>
            <button>Create Account</button>
          </form>

          <Link to="/">Already have an account?</Link>
      </div>
    )
  }
}

export default Signup
