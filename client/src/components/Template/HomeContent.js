import React from 'react'
import './HomeContent.css'
import logo1 from '../../images/logo_1.png';
import logo2 from '../../images/logo_2.png';
import logo3 from '../../images/logo_3.png';

function HomeContent() {
    return (
        <section id="home">
            <div className="container">
                <div className="box">
                    <img src={logo1} alt="Logo" />
                    <h3>React</h3>
                    <p>React is an open-source JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.</p>
                </div>
                <div className="box">
                    <img src={logo2} alt="Logo" />
                    <h3>Express</h3>
                    <p>Express.js, or simply Express, is a web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js.</p>
                </div>
                <div className="box">
                    <img src={logo3} alt="Logo" />
                    <h3>MongoDB</h3>
                    <p>MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public License.</p>
                </div>
            </div>
        </section>
    )
}

export default HomeContent
