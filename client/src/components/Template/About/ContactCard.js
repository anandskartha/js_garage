import React from 'react'
import './ContactCard.css'

import contactImg from '../../../images/contact.jpg'

function ContactCard() {
    return (
        <div className="card container-border">
            <img src={contactImg} alt="Anand Sasidharan"/>
            <div className="container">
                <h2>Anand Sasidharan</h2>
                <p className="title">Javascript Developer</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>anand@email.com</p>
            </div>
        </div>
    )
}

export default ContactCard
