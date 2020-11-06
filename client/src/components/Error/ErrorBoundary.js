import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             error: null
        }
    }

    static getDerivedStateFromError(error) {
        return {
            error
        }
    }
    componentDidCatch(error, info) {
        console.log('Error caught', { error, info })
    }
    
    render() {
        return (
            !this.state.error ? this.props.children : <div className="main-content"><span>Oops! Something went wrong</span></div>
        )
    }
}
