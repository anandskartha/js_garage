let transactionStore = {}
export function TransactionReducer (state, action) {
    switch(action.type) {
        case 'GET_TRANSACTIONS':
            return {
                transactions: action.payload,
                tCount: action.payload.length
            }
        case 'DELETE_TRANSACTION':
            transactionStore = state.transactions.filter(transaction => transaction._id !== action.payload)
            return {
                transactions: transactionStore,
                tCount: transactionStore.length
            }
        case 'ADD_TRANSACTION':
            transactionStore = [...state.transactions, action.payload]
            return {
                transactions: transactionStore,
                tCount: transactionStore.length
            }
        default:
            return state
    }
}

export function AppReducer (state, action) {
    switch(action.type) {
        case 'ERROR':
            return {
                ...state,
                err: action.payload.err,
                showError: action.payload.showError
            }
        case 'IN_PROGRESS':
            return {
                ...state,
                showInProgress: action.payload.showInProgress
            }
        default:
            return state
    }
}