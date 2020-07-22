export function AppReducer (state, action) {
    switch(action.type) {
        case 'SHOWALERT':
            return {
                ...state,
                alert: {
                    visible: action.payload.visible,
                    message: action.payload.message || '',
                    type: action.payload.type || ''
                }
            }
        case 'IN_PROGRESS':
            return {
                ...state,
                showInProgress: action.payload.showInProgress
            }
        default:
            return state
    }
}