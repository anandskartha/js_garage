import React, {useContext} from 'react'
import './Spinner.css'

import { GlobalContext } from '../../context'

function Spinner() {
    const {showInProgress} = useContext(GlobalContext)
    const overlayClass = showInProgress? "overlay" : "overlay hidden"
    return (
        <div className={overlayClass}>
            <div className="spinner" />
        </div>
    )
}

export default Spinner
