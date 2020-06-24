import React from 'react'
import './Sidebar.css'

function SideBar({title, content}) {
    return (
        <aside id="sideBar">
            <h3>{title}</h3>
            <p>{content}</p>
        </aside>
    )
}

export default SideBar
