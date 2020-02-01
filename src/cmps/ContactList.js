import React from 'react'
import ContactPreview from './ContactPreview';

export default function ContactList(props) {

    return (
        <div>
            {props.contacts.map(contact => <ContactPreview key={contact._id} contact={contact} />)}
        </div>
    )
}