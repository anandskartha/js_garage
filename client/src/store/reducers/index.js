import { combineReducers } from 'redux'
import transactionReducer from './transactionReducer'
import appReducer from './appReducer'

export default combineReducers({
    appState: appReducer,
    transactions: transactionReducer
})