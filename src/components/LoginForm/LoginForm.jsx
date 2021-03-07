import React, { Component } from 'react';

import { login } from '../../api/authentication';
import { checkSession } from '../../api/authentication';

import './LoginForm.scss';

export default class LoginForm extends Component {
  state = {
    form: {
    email: '',
    password: '',
    },
    error: null,
  };

  hancleOnCLick = async () => {
    try {
      const data = await checkSession();
      console.log('User :', data);
    } catch (err) {
      console.log(err.message);
    }
  };

  handleSubmit = async (event) => {
    event.prevetDefault();
    
    try {
        const data = await login(this.state.form);
        console.log(data);

    } catch (err) {
        console.log(err.message);
    }
  };

  handleOnChange = (event) => {
    const { name, value }= event.target;
    
    this.setState((prevState) => ({
      form: {
        ...prevState,
        [name]: value,
      }
    }));
};

  render() {
    const { form, error } = this.state;
      const { email, password } = form;
      const isDisabled =  !email || !password;

    return (
      <form className="LoginForm" onSubmit={this.handleSubmit}>

        <label htmlFor="email" className="LoginForm_label">
          <p>Email:</p>
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleOnChange}
          />
        </label>

        <label htmlFor="password" className="LoginForm_label">
          <p>Password:</p>
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleOnChange}
          />
        </label>

        {error ? <p className="LoginForm_error">{error}</p> : null }

        <button className="LoginForm_button" 
        type="submit" disabled={isDisabled} 
        >Login</button>
      </form>
    );
  }
}
