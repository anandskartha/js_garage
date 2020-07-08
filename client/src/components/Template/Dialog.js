import React, { useContext } from 'react'
import './Dialog.css'

import { GlobalContext } from '../../context'

function Dialog(props) {
    const {alert, showAlert} = useContext(GlobalContext)
    const overlayClass = alert.visible? "overlay" : "overlay hidden"
    return (
        <div className={overlayClass}>
            <div className="dialog" >
                <h3>{alert.type}</h3>
                {alert.message}
                <br/>
                <button className="btn-default" onClick={ () => showAlert({visible: false}) }>Ok</button>
            </div>
        </div>
    )
}

export default Dialog
