export default (state, action) => {
    switch(action.type) {
        case 'GET_TRANSACTIONS':
            return {
                transactions: action.payload,
                loading: false
            }
        case 'DELETE_TRANSACTION':
            return {
                ...state, //This is not needed as explained in the tutorial.
                transactions: state.transactions.filter(transaction => transaction._id !== action.payload)
            }
        case 'ADD_TRANSACTION':
        return {
            ...state, //This is not needed as explained in the tutorial.
            transactions: [...state.transactions, action.payload]
        }
        case 'TRANSACTION_ERROR':
        return {
            ...state,
            error: action.payload
        }
        default:
            return state
    }
}
