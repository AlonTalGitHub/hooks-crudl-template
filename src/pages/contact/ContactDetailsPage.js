import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import ContactService from '../../services/ContactService'
import editImg from '../../assets/img/edit.png'


export default function ContactDetailsPage(props) {
    const [contact, setContact] = useState(ContactService.getEmptyContact())

    async function load() {
        const id = props.match.params.id;
        const contact = await ContactService.getContactById(id)
        setContact(contact);
    }

    useEffect(() => {
        load();
    }, [props.match.params.id])

    return (
        <div className="contact-details-body">
            {(contact) && <section>
                <Link to={`/contact/edit/${contact._id}`}>
                    <img src={editImg} width="24px" height="24px" alt="Edit"/>
                </Link>
                <div>{contact.name}</div>
                <div>{contact.phone}</div>
                <div>{contact.email}</div>
            </section>}
        </div>
    );
}