import React from 'react'
import Timeline from './Timeline'
import timelineData from './timelinedata.json'
import './index.css'

function index() {
    const timelines = timelineData.map(timeline => <Timeline key={timeline.id} directionStyle={timeline.direction} title={timeline.title} period={timeline.period} content={timeline.content} />)
    return (
        <div className="timeline-container">
            <ul className="timeline">
                {timelines}
            </ul>
        </div>
    )
}

export default index
