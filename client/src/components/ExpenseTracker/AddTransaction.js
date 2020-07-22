import React, { useState } from 'react'
import propTypes from "prop-types";
import { connect } from 'react-redux'
import { addTransaction } from '../../store/actions/transactionActions'

function AddTransaction({ addTransaction }) {
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
                <i className="fa fa-plus" /> Add
            </button>
        </div>
    )
}

AddTransaction.propTypes = {
    addTransaction: propTypes.func.isRequired
}
export default connect(null, { addTransaction })(AddTransaction)
