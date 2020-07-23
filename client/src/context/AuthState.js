import React, { createContext, useReducer } from 'react'
import { AuthReducer } from './Reducer'

//Initial state
const initialState = {
    user: {
        name: '',
        type: '',
        loggedInTime: null
    }
};

//Create an Auth context
export const AuthContext = createContext(initialState)

//Auth Provider Component
export const AuthProvider = ( { children } ) => {
    const [state, dispatch] = useReducer(AuthReducer, initialState)

    //Actions
    function logIn({ name, type, loggedInTime }) {
        dispatch({
            type: 'LOGGED_IN',
            payload: {
                name,
                type,
                loggedInTime
            }
        });
    }
    function logOut({ name, type, loggedInTime }) {
        dispatch({
            type: 'LOGGED_OUT',
            payload: {
                name,
                type,
                loggedInTime
            }
        });
    }

    return (
        <AuthContext.Provider value={{
            user: state.user,
            logIn,
            logOut
        }}>
            { children }
        </AuthContext.Provider>
    )
}