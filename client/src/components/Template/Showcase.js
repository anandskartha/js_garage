import React from 'react'
import './Showcase.css';

function Showcase(props) {
    return (
        <section id="showcase" style={props.bgColor ? {background: 'none', backgroundColor: props.bgColor} : {}}>
            <div className="container">
            <h1>{props.header}</h1>
            <p>{props.content}</p>
            <button className="btn-default btn-showcase" style={{display: props.btnTitle? 'block' : 'none'}} onClick={props.btnClickAction}>{props.btnTitle}</button>
            </div>
        </section>
    )
}

export default Showcase
