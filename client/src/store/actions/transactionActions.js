import store from '../store'
import axios from 'axios'
import { GET_TRANSACTIONS, EDIT_TRANSACTION, DELETE_TRANSACTION, ADD_TRANSACTION, SHOW_ALERT, IN_PROGRESS } from './types'

const setProgress = (showInProgress) => {
    store.dispatch({
        type: IN_PROGRESS,
        payload: {
            showInProgress
        }
    })
}
const showAlert = (alertDetails) => {
    store.dispatch({
        type: SHOW_ALERT,
        payload: {
            alertDetails
        }
    })
}
export function getTransactions() {
    return async function(dispatch) {
        try {
            setProgress(true);
            const res = await axios.get('api/v1/transactions');
            dispatch({
                type: GET_TRANSACTIONS,
                payload: res.data.data
            });
        } catch (err) {
            showAlert({
                visible: true,
                message: 'Something went wrong. Please contact the administrator if the issue persists.',
                type: 'ERROR'
            });
        } finally {
            setProgress(false);
        }
    }
}

export function deleteTransaction(id) {
    return async function(dispatch) {
        try {
            setProgress(true);
            await axios.delete(`/api/v1/transactions/${id}`);
            dispatch({
                type: DELETE_TRANSACTION,
                payload: id
            })
        } catch (err) {
            showAlert({
                visible: true,
                message: 'Something went wrong. Please contact the administrator if the issue persists.',
                type: 'ERROR'
            });
        } finally {
            setProgress(false);
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
        setProgress(true);
        try {
            const res = await axios.post('/api/v1/transactions/', transaction, config);
            dispatch({
                type: ADD_TRANSACTION,
                payload: res.data.data
            })
        } catch (err) {
            showAlert({
                visible: true,
                message: 'Something went wrong. Please contact the administrator if the issue persists.',
                type: 'ERROR'
            });
        } finally {
            setProgress(false);
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
        setProgress(true);
        try {
            const res = await axios.put(`/api/v1/transactions/${transaction._id}`, transaction, config);
            dispatch({
                type: EDIT_TRANSACTION,
                payload: res.data.data
            })
        } catch (err) {
            showAlert({
                visible: true,
                message: 'Something went wrong. Please contact the administrator if the issue persists.',
                type: 'ERROR'
            });
        } finally {
            setProgress(false);
        }
    }
}