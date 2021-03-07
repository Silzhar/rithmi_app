import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div>
                <h3>
                    <Link to="/api/samples">Samples list</Link>
                </h3>
                <h3>
                    <Link to="/api/register">User Registration</Link>
                </h3>
                <h3>
                    <Link to="/api/login">Login</Link>
                </h3>
            </div>
        )
    }
}

export default Home;