import React from 'react'
import propTypes from 'prop-types'
import { connect } from 'react-redux'
import { showAlert } from '../../store/actions/appActions'
import './Dialog.css'

function Dialog({ alert, showAlert }) {
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

Dialog.propTypes = {
    alert: propTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    alert: state.appState.alert
})
export default connect(mapStateToProps, { showAlert })(Dialog)
