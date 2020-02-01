import React, { Component } from 'react';

import ContactList from '../cmps/ContactList';
import Filter from '../cmps/Filter.js';

import ContactService from '../services/ContactService';

export default class ContactPage extends Component {
    state = {
        contacts: null,
        filterBy: {
            term: ''
        }
    }

    componentDidMount() {
        this.loadContacts();
    }

    loadContacts = async () => {
        const contacts = await ContactService.getContacts(this.state.filterBy);
        this.setState({ contacts })
    }

    onFilter = (filterBy) => {
        this.setState(prevState => ({ filterBy: { ...prevState.filterBy, ...filterBy } }), this.loadContacts);
    }

    render() {
        const { contacts } = this.state
        return (
            <React.Fragment>
                <Filter onFilter={this.onFilter}></Filter>
                {(contacts) && <ContactList contacts={this.state.contacts}></ContactList>}
            </React.Fragment>
        )
    }
}
