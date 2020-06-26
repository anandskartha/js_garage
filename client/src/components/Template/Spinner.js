import React, {useContext} from 'react'
import './Spinner.css'

import { GlobalContext } from '../../context/GlobalState'

function Spinner() {
    const {loading} = useContext(GlobalContext)
    const spinnerClassName = loading? "spin-wrapper" : "spin-wrapper hidden"
    //const spinnerClassName = loading? "spin-wrapper" : "spin-wrapper"
    return (
        <div className={spinnerClassName}>
            <div className="spinner" />
        </div>
    )
}

export default Spinner
