import React, { useState } from 'react'
import propTypes from "prop-types";
import { editTransaction,  deleteTransaction} from '../../store/actions/transactionActions'
import { connect } from 'react-redux'

import { amountFormatter } from '../../utils'

function Transaction({ transaction, editTransaction, deleteTransaction }) {
    let tranStateChanged = false;
    const [transactionState, setTransactionState] = useState(transaction)
    const [editText, setEditText] = useState(false)
    const [editAmount, setEditAmount] = useState(false)
    const sign = transactionState.amount < 0 ? '-' : '+'
    const editTransactionHandler = (value, args) => {
        if(args.type === 'text') {
            if(value && value !== '' && value !== transaction.text) {
                setTransactionState({
                    ...transactionState,
                    text: value
                })
                tranStateChanged = true;
            } else {
                setTransactionState({
                    ...transactionState,
                    text: transaction.text
                })
            }
            setEditText(false)
        } else {
            if(value && value !== '' && parseInt(value) !== transaction.amount) {
                setTransactionState({
                    ...transactionState,
                    amount: value
                })
                tranStateChanged = true;
            } else {
                setTransactionState({
                    ...transactionState,
                    amount: transaction.amount
                })
            }
            setEditAmount(false)
        }
        if(tranStateChanged) {
            editTransaction(transactionState);
            tranStateChanged = false;
        }
    }
    return (
        <li className={transactionState.amount < 0 ? 'minus' : 'plus'}>
            <span className={editText? 'hidden' : ''} onDoubleClick={(e) => setEditText(true)}>{transactionState.text} </span>
            <span></span><span></span><span></span><span></span><span></span><span></span>
            <input type="text" className={editText? '' : 'hidden'} value={transactionState.text} onChange={(e) => setTransactionState({...transactionState, text: e.target.value})} onBlur={(e) => editTransactionHandler(e.target.value, {type: 'text'})} placeholder="Text" />
            <span className={editAmount? 'hidden' : ''} onDoubleClick={(e) => setEditAmount(true)} style={{float: 'right'}}>{sign} ${amountFormatter(Math.abs(transactionState.amount))}</span>
            <input type="text" className={editAmount? '' : 'hidden'} value={transactionState.amount} onChange={(e) => setTransactionState({...transactionState, amount: e.target.value})} onBlur={(e) => editTransactionHandler(e.target.value, {type: 'amount'})} placeholder="Text" />
            <button type="button" className="btn btn-danger btn-right" onClick={() => deleteTransaction(transaction._id)}><i className="fa fa-minus" /></button>
        </li>
    )
}

Transaction.propTypes = {
    transaction: propTypes.object.isRequired,
    editTransaction: propTypes.func.isRequired,
    deleteTransaction: propTypes.func.isRequired
}

export default connect(null, { editTransaction, deleteTransaction })(Transaction)