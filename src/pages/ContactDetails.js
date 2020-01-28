import React, { Component } from 'react';


import ContactService from '../services/ContactService'

export default class ContactDetails extends Component {
    state = {
        contact: null
    }

    componentDidMount() {
        const contactId = this.props.match.params.id;
        console.log('details mounting: ', contactId)
        this.loadContact(contactId)
    }

    loadContact = async (contactId) => {
        const contact = await ContactService.getContactById(contactId)
        console.log('contact details is: ', contact)
        this.setState({ contact })
    }

    render() {
        const { contact } = this.state;
        return (
            <React.Fragment>
                {(contact) && <section>
                    <div>{contact.name}</div>
                    <div>{contact.phone}</div>
                    <div>{contact.email}</div>
                </section>}
            </React.Fragment>
        );

    }
}