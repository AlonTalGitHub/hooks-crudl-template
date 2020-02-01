import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class HomePage extends Component {
    state = {};

    render() {
        return (
            <div className="home">
                <h1>Welcome Moshe!</h1>
                <Link className="App-link" to="/contact">Go to Contacts</Link>
            </div>
        );
    }
}