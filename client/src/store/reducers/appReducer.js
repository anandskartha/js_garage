import { SHOW_ALERT, IN_PROGRESS } from '../actions/types'

const initialState = {
    alert: {
        visible: false
    },
    showInProgress: false,
    error: null,
}

export default function AppReducer (state = initialState, action) {
    switch(action.type) {
        case SHOW_ALERT:
            return {
                ...state,
                alert: {
                    visible: action.payload.visible,
                    message: action.payload.message || '',
                    type: action.payload.type || ''
                }
            }
        case IN_PROGRESS:
            return {
                ...state,
                showInProgress: action.payload.showInProgress
            }
        default:
            return state
    }
}