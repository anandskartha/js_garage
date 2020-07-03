import React from 'react'
import './Timeline.css'

function Timeline({directionStyle, title, period, content}) {
    return (
        <li>
            <div className={`direction-${directionStyle.charAt(0)}`}>
                <div className="flag-wrapper">
                    <span className="flag">{title}</span>
                <span className="time-wrapper"><span className="time">{period}</span></span>
                </div>
                <div className="desc">{content}</div>
            </div>
        </li>
    )
}

export default Timeline
