import React from 'react'
import { Balance } from './Balance'
import { IncomeExpense } from './IncomeExpense'
import { TransactionList } from './TransactionList'
import { AddTrasnsaction } from './AddTrasnsaction'

import { GlobalProvider } from '../../context'

import './ExpenseTracker.css'

function ExpenseTracker () {
    return (
        <GlobalProvider>
            <div className='expContainer'>
                <Balance />
                <IncomeExpense />
                <TransactionList />
                <AddTrasnsaction />
            </div>
        </GlobalProvider>
    );
}

export default ExpenseTracker;