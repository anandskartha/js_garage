import React from 'react'
import './ContactCard.css'

import contactImg from '../../../images/contact.jpg'

function ContactCard() {
    return (
        <div className="card container-border">
            <img src={contactImg} alt="Anand Sasidharan"/>
            <div className="container">
                <h2>Anand Sasidharan</h2>
                <p className="title">Javascript/React Developer</p>
                <p>Javascript full stack developer with an experience of over 10 years in the industry</p>
                <p><i className="fa fa-envelope" style={{color:"#B23121"}}/> anands.kartha@gmail.com</p>
                <p><i className="fa fa-linkedin-square" style={{color:"#0e76a8"}}/> <a href="https://www.linkedin.com/in/anand-s-kartha/"  target="_blank" rel="noopener noreferrer">anand-s-kartha</a></p>
            </div>
        </div>
    )
}

export default ContactCard
