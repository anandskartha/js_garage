import React, { useState } from 'react'
import './Timeline.css'

function Timeline({directionStyle, title, period, content}) {
    let modifiedContent = (<p>{content}</p>)
    let showMoreButton = false
    
    if(content.length > 200) {
        modifiedContent = (<p>{content.substring(0, 200)}<span className="more-dots">...</span></p>)
        showMoreButton = true
    }
    const [timeline, setTimeline] = useState({
        content: modifiedContent,
        shortContent: true
    })
    const toggleMore = () => {
        if(timeline.shortContent) {
            modifiedContent = (<p>{content}</p>)
        } else {
            modifiedContent = (<p>{content.substring(0, 200)}<span className="more-dots">...</span></p>)
        }
        setTimeline({
            content: modifiedContent,
            shortContent: !timeline.shortContent
        })
    }
    return (
        <li>
            <div className={`direction-${directionStyle.charAt(0)}`}>
                <div className="flag-wrapper">
                    <span className="flag">{title}</span>
                <span className="time-wrapper"><span className="time">{period}</span></span>
                </div>
                <div className="desc">
                    {timeline.content}
                <p>
                    <button onClick={() => toggleMore()} id="btnMore" className="btn-default btn-round" style={{display: showMoreButton? 'block' : 'none'}}>
                        {timeline.shortContent ? <i className="fa fa-expand"/> : <i className="fa fa-compress"/>}
                    </button>
                </p>
                </div>
            </div>
        </li>
    )
}

export default Timeline
