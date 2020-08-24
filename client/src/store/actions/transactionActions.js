//import store from '../store'
import axios from 'axios'
import { GET_TRANSACTIONS, EDIT_TRANSACTION, DELETE_TRANSACTION, ADD_TRANSACTION, SHOW_ALERT, IN_PROGRESS } from './types'

const setProgress = (dispatch, showInProgress) => {
    dispatch({
        type: IN_PROGRESS,
        payload: {
            showInProgress
        }
    })
}
const showAlert = (dispatch, alertDetails) => {
    dispatch({
        type: SHOW_ALERT,
        payload: {
            ...alertDetails
        }
    })
}
export function getTransactions() {
    return async function(dispatch, getState) {
        try {
            setProgress(dispatch,true);
            const res = await axios.get('api/v1/transactions');
            dispatch({
                type: GET_TRANSACTIONS,
                payload: res.data.data
            });
        } catch (err) {
            dispatch({
                type: GET_TRANSACTIONS,
                payload: []
            });
            showAlert(dispatch, {
                visible: true,
                message: 'Something went wrong. Please contact the administrator if the issue persists.',
                type: 'ERROR'
            });
        } finally {
            setProgress(dispatch, false);
        }
    }
}

export function deleteTransaction(id) {
    return async function(dispatch) {
        try {
            setProgress(dispatch, true);
            await axios.delete(`/api/v1/transactions/${id}`);
            dispatch({
                type: DELETE_TRANSACTION,
                payload: id
            })
        } catch (err) {
            showAlert(dispatch, {
                visible: true,
                message: 'Something went wrong. Please contact the administrator if the issue persists.',
                type: 'ERROR'
            });
        } finally {
            setProgress(dispatch, false);
        }
    }
}
export function addTransaction(transaction) {
    return async function(dispatch) {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        setProgress(dispatch, true);
        try {
            const res = await axios.post('/api/v1/transactions/', transaction, config);
            dispatch({
                type: ADD_TRANSACTION,
                payload: res.data.data
            })
        } catch (err) {
            showAlert(dispatch, {
                visible: true,
                message: 'Something went wrong. Please contact the administrator if the issue persists.',
                type: 'ERROR'
            });
        } finally {
            setProgress(dispatch, false);
        }
    }
}

export function editTransaction(transaction) {
    return async function(dispatch) {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        setProgress(dispatch, true);
        try {
            const res = await axios.put(`/api/v1/transactions/${transaction._id}`, transaction, config);
            dispatch({
                type: EDIT_TRANSACTION,
                payload: res.data.data
            })
        } catch (err) {
            showAlert(dispatch, {
                visible: true,
                message: 'Something went wrong. Please contact the administrator if the issue persists.',
                type: 'ERROR'
            });
        } finally {
            setProgress(dispatch, false);
        }
    }
}