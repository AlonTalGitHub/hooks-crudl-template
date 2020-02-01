import React from 'react';
import { Link } from 'react-router-dom';


export default function ContactPreview(props) {

        const { contact } = props
        return (
            <Link className="App-link" to={"/contact/" + contact._id}>
                <div className="contact-line" key={contact._id}>
                    <div>{contact.name}</div>
                </div>
            </Link>);
}