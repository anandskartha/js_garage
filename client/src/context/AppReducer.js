export default (state, action) => {
    switch(action.type) {
        case 'GET_TRANSACTIONS':
            return {
                transactions: action.payload,
                loading: false
            }
        case 'DELETE_TRANSACTION':
            return {
                transactions: state.transactions.filter(transaction => transaction._id !== action.payload),
                loading: false
            }
        case 'ADD_TRANSACTION':
            return {
                transactions: [...state.transactions, action.payload],
                loading: false
            }
        case 'TRANSACTION_ERROR':
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        case 'TRANSACTION_IN_PROGRESS':
            return {
                ...state,
                loading: action.payload.loading || true
            }
        default:
            return state
    }
}
