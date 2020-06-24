import React, { useContext } from 'react'
import { GlobalContext } from '../../context'
import { amountFormatter } from '../../utils';

export const Balance = () => {
    const { transactions } = useContext(GlobalContext)
    const amounts = transactions.map(transaction => transaction.amount)
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)
    return (
        <>
            <h4>Your Balance</h4>
            <h1>${amountFormatter(total)}</h1>
        </>
    )
}
