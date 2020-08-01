import React from 'react'
import GeneralInfo from './GeneralInfo'
import ContactCard from './ContactCard'
import Carousel from './Carousel'
import Timeline from './Timeline'
import Contact from './Contact'

function index(props) {
    return (
        <>
            <div className="container">
                <GeneralInfo />
                <ContactCard />
            </div>
            <div className="container">
                <Carousel />
            </div>
            <div className="container">
                <Timeline />
            </div>
            <div className="container" ref={props.contactRef}>
                <Contact />
            </div>
        </>
    )
}

export default index
