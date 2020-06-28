import React, { createContext, useReducer } from 'react'
import { AppReducer } from './Reducer'

//Initial state
const initialState = {
    err: null,
    showError: false,
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
    function setError(err, showError) {
        dispatch({
            type: 'ERROR',
            payload: {
                err,
                showError
            }
        });
    }

    return (
        <GlobalContext.Provider value={{
            showError: state.showError,
            showInProgress: state.showInProgress,
            error: state.error,
            setProgress,
            setError
        }}>
            { children }
        </GlobalContext.Provider>
    )
}