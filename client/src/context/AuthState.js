import React, { createContext, useReducer } from 'react'
import { AuthReducer } from './Reducer'
import axios from 'axios'

const token = localStorage.getItem('authorization')
const user = localStorage.getItem('user')
//Initial state
let initialState
if(token) {
    initialState = {
        user: user,
        loggedIn: true,
        authToken: token
    };
    axios.defaults.headers.common = {'Authorization': token}
} else {
    initialState = {
        user: null,
        loggedIn: false,
        authToken: null
    };
    axios.defaults.headers.common.Authorization = null
}

//Create an Auth context
export const AuthContext = createContext(initialState)

//Auth Provider Component
export const AuthProvider = ( { children } ) => {
    const [state, dispatch] = useReducer(AuthReducer, initialState)

    //Actions
    async function logIn({ email }) {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        const payload = {
            email
        }
        const res = await axios.post('api/v1/authenticate/login', payload, config)
        if(res.status === 200 && res.data.success) {
            axios.defaults.headers.common = {'Authorization': `Bearer ${res.data.authToken}`}
            localStorage.setItem('authorization', `Bearer ${res.data.authToken}`);
            localStorage.setItem('user', `Bearer ${res.data.user}`);
            dispatch({
                type: 'LOG_IN',
                payload: {
                    user: res.user,
                    loggedIn: true,
                    authToken: res.authToken
                }
            });
        }
    }
    async function logOut({ email }) {
        axios.defaults.headers.common.Authorization = null
        localStorage.removeItem('authorization');
        localStorage.removeItem('user');
        dispatch({
            type: 'LOG_IN',
            payload: {
                user: null,
                loggedIn: false
            }
        });
        // const config = {
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // };
        // const payload = {
        //     email
        // }
        // const res = await axios.post('api/v1/authenticate/logoff', payload, config)
        // if(res.status === 200 && res.data.success) {
        //     axios.defaults.headers.common = {'Authorization': `Bearer ${res.data.authToken}`}
        //     dispatch({
        //         type: 'LOG_IN',
        //         payload: {
        //             user: null,
        //             loggedIn: false
        //         }
        //     });
        // }
    }

    return (
        <AuthContext.Provider value={{
            user: state.user,
            loggedIn: state.loggedIn,
            authToken: state.authToken,
            logIn,
            logOut
        }}>
            { children }
        </AuthContext.Provider>
    )
}