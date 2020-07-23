export function AuthReducer (state, action) {
    switch(action.type) {
        case 'LOGGED_IN':
            return {
                ...state,
                user: {
                    name: action.payload.name,
                    type: action.payload.type || '',
                    loggedInTime: action.payload.loggedInTime || ''
                }
            }
        case 'LOGGED_OUT':
            return {
                ...state,
                user: {
                    name: action.payload.visible,
                    type: action.payload.message || '',
                    loggedInTime: action.payload.type || ''
                }
            }
        default:
            return state
    }
}