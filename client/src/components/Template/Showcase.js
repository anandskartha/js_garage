import React from 'react'
import './Showcase.css';

function Showcase(props) {
    return (
        <section id="showcase">
            <div className="container">
            <h1>{props.header}</h1>
                <p>{props.content}</p>
            </div>
            
        </section>
    )
}

export default Showcase
