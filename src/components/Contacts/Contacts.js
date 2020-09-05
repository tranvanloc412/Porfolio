import React from 'react';

import Contact from './Contact/Contact';
import './Contacts.css';

const contacts = props => {
    return (
        <div className="Contacts">
        <ul className="Contacts-list">
            <Contact contact="likedin"/>
            <Contact contact="github"/>
            <Contact contact="gmail"/>
            <Contact contact="resume"/>
        </ul>
    </div>
    )
};

export default contacts;

