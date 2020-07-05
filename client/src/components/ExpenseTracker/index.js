import React from 'react'
import { Balance } from './Balance'
import { IncomeExpense } from './IncomeExpense'
import { TransactionList } from './TransactionList'
import { AddTransaction } from './AddTransaction'

import { TransactionProvider } from '../../context'

import './ExpenseTracker.css'

function ExpenseTracker () {
    return (
        <TransactionProvider>
            <div className='expContainer'>
                <Balance />
                <IncomeExpense />
                <TransactionList />
                <AddTransaction />
            </div>
        </TransactionProvider>
    );
}

export default ExpenseTracker;