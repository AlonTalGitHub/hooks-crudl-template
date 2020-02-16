import React from 'react';
import { Link } from 'react-router-dom';


export default function HomePage(props) {

    return (
        <div className="home">
            <h1>Welcome Moshe!</h1>
            <Link className="App-link" to="/contact">Go to Contacts</Link>
        </div>
    );

}