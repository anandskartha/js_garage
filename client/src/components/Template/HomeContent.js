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
                    <h3>Title 1</h3>
                    <p>Aenean sem libero, viverra in pellentesque blandit, pulvinar sit amet dui.</p>
                </div>
                <div className="box">
                    <img src={logo2} alt="Logo" />
                    <h3>Title 2</h3>
                    <p>Phasellus ornare id dolor sit amet ultrices. Mauris quis est faucibus, vestibulum ipsum id, rhoncus magna.</p>
                </div>
                <div className="box">
                    <img src={logo3} alt="Logo" />
                    <h3>Title 3</h3>
                    <p>Ut odio tortor, pellentesque ac ipsum at, consectetur placerat ante.</p>
                </div>
            </div>
        </section>
    )
}

export default HomeContent
