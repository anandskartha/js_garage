import React, { useContext } from 'react'
import {GlobalContext} from '../../context'
import { amountFormatter } from '../../utils'

export function Transaction({ transaction }) {
    const { deleteTransaction } = useContext(GlobalContext)
    const sign = transaction.amount < 0 ? '-' : '+'
    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
            {transaction.text} <span>{sign} ${amountFormatter(Math.abs(transaction.amount))}</span><button className="delete-btn" onClick={() => deleteTransaction(transaction._id)}>x</button>
        </li>
    )
}
