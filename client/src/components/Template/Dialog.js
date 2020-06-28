import React, { useContext } from 'react'
import './Dialog.css'

import { GlobalContext } from '../../context'

function Dialog(props) {
    const {showError, setError} = useContext(GlobalContext)
    const overlayClass = showError? "overlay" : "overlay hidden"
    return (
        <div className={overlayClass}>
            <div className="dialog" >
                <span className="dialog-close" id="dialogClose" onClick={ () => setError(null, false) } />
                <h3>ERROR</h3>
                Something went wrong. Please contact the administrator if the issue persists.
                <br/>
                <button className="btn" onClick={ () => setError(null, false) }>Ok</button>
            </div>
        </div>
    )
}

export default Dialog
