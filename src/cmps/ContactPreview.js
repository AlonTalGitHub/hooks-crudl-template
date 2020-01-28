import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class ContactPreview extends Component {

    render() {
        const { contact } = this.props
        return (
            <Link to={"/contact/" + contact._id}>
                <li className="contact-line" key={contact._id}>
                    <div>{contact.name}</div>
                </li>
            </Link>);
    }
}