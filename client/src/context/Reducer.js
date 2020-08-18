export function AuthReducer (state, action) {
    switch(action.type) {
        case 'LOG_IN':
            return {
                ...state,
                user: action.payload.user,
                loggedIn: action.payload.loggedIn,
                authToken: action.payload.authToken
            }
        default:
            return state
    }
}