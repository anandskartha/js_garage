import React from 'react'
import { Balance } from './Balance'
import { IncomeExpense } from './IncomeExpense'
import { TransactionList } from './TransactionList'
import { AddTrasnsaction } from './AddTrasnsaction'

import { TransactionProvider } from '../../context'

import './ExpenseTracker.css'

function ExpenseTracker () {
    return (
        <TransactionProvider>
            <div className='expContainer'>
                <Balance />
                <IncomeExpense />
                <TransactionList />
                <AddTrasnsaction />
            </div>
        </TransactionProvider>
    );
}

export default ExpenseTracker;