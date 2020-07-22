//import { useContext } from 'react'
import axios from 'axios'
import { GET_TRANSACTIONS, DELETE_TRANSACTION, ADD_TRANSACTION } from './types'

//import { GlobalContext } from '../../context/GlobalState'

export function getTransactions() {
    return async function(dispatch) {
        //const { setProgress, showAlert } = useContext(GlobalContext)
        try {
            //setProgress(true);
            const res = await axios.get('api/v1/transactions');
            dispatch({
                type: GET_TRANSACTIONS,
                payload: res.data.data
            });
        } catch (err) {
            // showAlert({
            //     visible: true,
            //     message: 'Something went wrong. Please contact the administrator if the issue persists.',
            //     type: 'ERROR'
            // });
        } finally {
            // setProgress(false);
        }
    }
}

export function deleteTransaction(id) {
    return async function(dispatch) {
        //const { setProgress, showAlert } = useContext(GlobalContext)
        try {
            //setProgress(true);
            await axios.delete(`/api/v1/transactions/${id}`);
            dispatch({
                type: DELETE_TRANSACTION,
                payload: id
            })
        } catch (err) {
            // showAlert({
            //     visible: true,
            //     message: 'Something went wrong. Please contact the administrator if the issue persists.',
            //     type: 'ERROR'
            // });
        } finally {
            //setProgress(false);
        }
    }
}
export function addTransaction(transaction) {
    return async function(dispatch) {
        //const { setProgress, showAlert } = useContext(GlobalContext)
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        //setProgress(true);
        try {
            const res = await axios.post('/api/v1/transactions/', transaction, config);
            dispatch({
                type: ADD_TRANSACTION,
                payload: res.data.data
            })
        } catch (err) {
            // showAlert({
            //     visible: true,
            //     message: 'Something went wrong. Please contact the administrator if the issue persists.',
            //     type: 'ERROR'
            // });
        } finally {
            //setProgress(false);
        }
    }
}

export function editTransaction(transaction) {
    return async function() {
        //const { setProgress, showAlert } = useContext(GlobalContext)
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        //setProgress(true);
        try {
            await axios.put(`/api/v1/transactions/${transaction._id}`, transaction, config);
        } catch (err) {
            // showAlert({
            //     visible: true,
            //     message: 'Something went wrong. Please contact the administrator if the issue persists.',
            //     type: 'ERROR'
            // });
        } finally {
            //setProgress(false);
        }
    }
}