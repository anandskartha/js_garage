import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../../context'
import { Transaction } from './Transaction'

export function TransactionList() {
    const { transactions, getTransactions } = useContext(GlobalContext);
    useEffect(() => {
        getTransactions();
        // eslint-disable-next-line
    }, []);
    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {transactions.map(transaction => 
                    <Transaction key={transaction._id} transaction={transaction} />
                )}
            </ul>
        </>
    )
}
