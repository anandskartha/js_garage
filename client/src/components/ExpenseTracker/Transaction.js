import React, { useContext, useState } from 'react'
import {TransactionContext} from '../../context'
import { amountFormatter } from '../../utils'

export function Transaction({ transaction }) {
    let tranStateChanged = false;
    const { editTransaction, deleteTransaction } = useContext(TransactionContext)
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
            <input type="text" className={editText? '' : 'hidden'} value={transactionState.text} onChange={(e) => setTransactionState({...transactionState, text: e.target.value})} onBlur={(e) => editTransactionHandler(e.target.value, {type: 'text'})} placeholder="Text" />
            <span className={editAmount? 'hidden' : ''} onDoubleClick={(e) => setEditAmount(true)}>{sign} ${amountFormatter(Math.abs(transactionState.amount))}</span>
            <input type="text" className={editAmount? '' : 'hidden'} value={transactionState.amount} onChange={(e) => setTransactionState({...transactionState, amount: e.target.value})} onBlur={(e) => editTransactionHandler(e.target.value, {type: 'amount'})} placeholder="Text" />
            <button type="button" className="btn btn-danger btn-right" onClick={() => deleteTransaction(transaction._id)}><i class="fa fa-minus"></i></button>
        </li>
    )
}
