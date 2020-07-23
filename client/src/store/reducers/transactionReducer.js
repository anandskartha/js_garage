import { GET_TRANSACTIONS, DELETE_TRANSACTION, ADD_TRANSACTION, EDIT_TRANSACTION } from '../actions/types'

const initialState = {
    transactions: []
}

export default function TransactionReducer (state = initialState, action) {
    let transactionStore = {}
    switch(action.type) {
        case GET_TRANSACTIONS:
            return {
                transactions: action.payload,
                tCount: action.payload.length
            }
        case DELETE_TRANSACTION:
            transactionStore = state.transactions.filter(transaction => transaction._id !== action.payload)
            return {
                transactions: transactionStore,
                tCount: transactionStore.length
            }
        case ADD_TRANSACTION:
            transactionStore = [...state.transactions, action.payload]
            return {
                transactions: transactionStore,
                tCount: transactionStore.length
            }
        case EDIT_TRANSACTION:
            transactionStore = [...state.transactions.filter(transaction => transaction._id !== action.payload._id), action.payload]
            return {
                transactions: transactionStore,
                tCount: transactionStore.length
            }
        default:
            return state
    }
}