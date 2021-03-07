import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.scss'

import RegisterForm from './components/RegisterForm'
import LoginForm from './components/LoginForm'
import { checkSession } from './api/authentication'
import Home from './components/Home/Home'
import Rithmi from './components/Rithmi'


class App extends React.Component {
  hancleOnCLick = async () => {
    try {
      const data = await checkSession();
      console.log('User :', data);
    } catch (err) {
      console.log(err.message);
    }
  };

  render() {
    console.log(this.state);
    return (
      <Router>
        <div className="App">
          <h1>RITHMI</h1>
          <Switch>
            <Route path="/api/samples" exact component={Rithmi} />
            <Route path="/api/register" exact component={RegisterForm} />
            <Route path="/api/login" exact component={LoginForm} />
            <Route path="/" exact component={Home} />
          </Switch>

          <button onClick={this.hancleOnCLick}>Check session</button>
        </div>
      </Router>
    );
  }
}

export default App;
