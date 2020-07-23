import React from 'react'
import { connect } from 'react-redux'
import propTypes from 'prop-types'
import './Spinner.css'

function Spinner({ showInProgress }) {
    const overlayClass = showInProgress? "overlay" : "overlay hidden"
    return (
        <div className={overlayClass}>
            <div className="spinner" />
        </div>
    )
}

Spinner.propTypes = {
    showInProgress: propTypes.bool.isRequired
}
const mapStateToProps = (state) => ({
    showInProgress: state.appState.showInProgress
})

export default connect(mapStateToProps, {})(Spinner)
