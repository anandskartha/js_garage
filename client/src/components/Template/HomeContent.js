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
                    <h3>Faster Rendering</h3>
                    <p>React Uses Virtual DOM for efficient rendering which helps heavy loaded and dynamic software solutions. This method guarantees better user experience and higher app performance.</p>
                </div>
                <div className="box">
                    <img src={logo2} alt="Logo" />
                    <h3>Stable Code</h3>
                    <p>To make sure that even small changes that take place in the child structures won't affect their parents, ReactJS uses only downward data flow. Changing an object, developers just modify its state, make changes, and, after that, only particular components will be updated. This structure of data binding ensures code stability and continuous app performance.</p>
                </div>
                <div className="box">
                    <img src={logo3} alt="Logo" />
                    <h3>Support for Mobile App Dev</h3>
                    <p>Using plain JavaScript and React you'll be able to build rich UI for native apps, supported by both iOS and Android platforms. When it comes to the actual use of React Native, we can list such mobile apps as Skype, Tesla, Airbnb, and WalMart. And don't forget about Instagram and Facebook – the actual innovators and early adopters. </p>
                </div>
            </div>
        </section>
    )
}

export default HomeContent
