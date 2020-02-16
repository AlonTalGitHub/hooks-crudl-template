import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ContactList from '../../cmps/ContactList';
import ContactFilter from '../../cmps/Filter.js';
import ContactEdit from '../../cmps/ContactEdit';

import ContactService from '../../services/ContactService';
import plusImg from  '../../assets/img/plus.png'

export default function ContactPage(props) {

    const [contacts, setContacts] = useState([]);
    const [filterBy, setFilterBy] = useState({ term: '' });

    function handleFilterChange(ev) {
        let { name, value } = ev.target
        value = (ev.target.type === 'number') ? +value : value;
        setFilterBy({ [name]: value });
    }

    
    useEffect(() => {
        console.log('useEffect called')

        const loadContacts = async () => {
            console.log('load called')
            const contacts = await ContactService.getContacts(filterBy);
            setContacts([ ...contacts ]);
        };
        
        loadContacts();
        return () => {
            console.log('Unmounting...');
        }
    }, [filterBy]);

    return (
        <div>
            <Link to={'/contact/new'}>
                <img src={plusImg} width="24px" height="24px" alt="Add"/>
            </Link>
            <ContactFilter filterBy={filterBy} onFilterChange={handleFilterChange}></ContactFilter>
            {(contacts) && <ContactList contacts={contacts}></ContactList>}
        </div>
    )
}
