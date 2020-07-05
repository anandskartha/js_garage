import React, { useState, useContext } from 'react'
import { TransactionContext } from '../../context'

export function AddTransaction() {
    const { addTransaction } = useContext (TransactionContext)
    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)

    const onSubmit = e => {
        e.preventDefault()
        const newTransaction = {
            text,
            amount: +amount
        }
        addTransaction(newTransaction)
        setText('');
        setAmount(0);
    }
    return (
        <div className="add-transaction">
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Add new transaction..." />
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" />
            <button type="button" className="btn btn-primary btn-right" onClick={onSubmit}>
                <i class="fa fa-plus"></i> Add
            </button>
        </div>
    )
}
