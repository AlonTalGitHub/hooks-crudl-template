import React, { Component } from 'react';
import ContactList from '../cmps/ContactList';
import { Link } from 'react-router-dom';


export default class Home extends Component {
    state = {};

    render() {
        return (
            <div className="home">
                <h1>Welcome Moshe!</h1>
                <Link to="/contact">Go to Contacts</Link>
            </div>
        );
    }
}