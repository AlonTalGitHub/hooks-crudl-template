import React, { useState, useEffect, useContext } from 'react';
import ContactService from '../services/ContactService'
import { Link } from 'react-router-dom';

import backImg from '../assets/img/back.png'
import deleteImg from '../assets/img/delete.png'

export default function ContactEdit(props) {

    const [contact, setContact] = useState(ContactService.getEmptyContact());
    const [loading, setLoading] = useState(true);

    const loadContact = async () => {
        try {
            const currContact = await ContactService.getContactById(props.match.params.id)
            setContact(currContact)
        } catch (err) {
            setContact(ContactService.getEmptyContact())
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        loadContact();
    }, [props.match.params.id]);

    function handleChange(ev) {
        const { name, value } = ev.target;
        setContact({ ...contact, [name]: value });
    }

    const onFormSubmit = async (event) => {
        event.preventDefault()

        const updatedContact = await ContactService.saveContact(contact)
        props.history.push('/contact')
    }

    const onDeleteContact = async () => {
        await ContactService.deleteContact(contact._id)
        props.history.push('/contact')
    }

    if (loading) return <div>Loading...</div>

    return (
        <div className="contact-edit">
            <header className="contact-edit-header">
                <Link to="/contact">
                    <img src={backImg} width="24px" height="24px" alt="Back" />
                </Link>
                {contact._id && <Link to="/contact" onClick={onDeleteContact}>
                    <img src={deleteImg} width="24px" height="24px" alt="Delete" />
                </Link>}
            </header>
            <section className="contact-edit-body">
                <form onSubmit={onFormSubmit}>
                    <div className="form-field">
                        <input name="name" placeholder="name" value={contact.name} onChange={handleChange}></input>
                    </div>
                    <div className="form-field">
                        <input name="phone" placeholder="phone" value={contact.phone} onChange={handleChange}></input>
                    </div>
                    <div className="form-field">
                        <input name="email" placeholder="email" value={contact.email} onChange={handleChange}></input>
                    </div>
                    <button type="submit">Save</button>
                </form>
            </section>
        </div>)
}