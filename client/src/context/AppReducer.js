export default (state, action) => {
    switch(action.type) {
        case 'DELETE_TRANSACTION':
            return {
                ...state, //This is not needed as explained in the tutorial.
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        case 'ADD_TRANSACTION':
        return {
            ...state, //This is not needed as explained in the tutorial.
            transactions: [...state.transactions, action.payload]
        }
        default:
            return state
    }
}
