import React, { createContext, useReducer } from 'react'
import { AppReducer } from './Reducer'

//Initial state
const initialState = {
    alert: {
        visible: false,
        type: '',
        message: ''
    },
    showInProgress: false
};

//Create a Global context
export const GlobalContext = createContext(initialState)

//Global Provider Component
export const GlobalProvider = ( { children } ) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    //Actions
    function setProgress(showInProgress) {
        dispatch({
            type: 'IN_PROGRESS',
            payload: {
                showInProgress
            }
        });
    }
    function showAlert({visible, type, message}) {
        dispatch({
            type: 'SHOWALERT',
            payload: {
                visible,
                type,
                message
            }
        });
    }

    return (
        <GlobalContext.Provider value={{
            alert: state.alert,
            showInProgress: state.showInProgress,
            error: state.error,
            setProgress,
            showAlert
        }}>
            { children }
        </GlobalContext.Provider>
    )
}