import React from 'react'
import {Link, useRouteMatch} from "react-router-dom"
import './NavLink.css'

function NavLink({ label, to, activeOnlyWhenExact }) {
    let match = useRouteMatch({
        path: to,
        exact: activeOnlyWhenExact
      });
    return (
        <span className={match? "current" : ""}>
            <Link to={to}>{label}</Link>
        </span>
    )
}

export default NavLink
