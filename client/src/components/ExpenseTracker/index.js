import React from 'react'
import { Balance } from './Balance'
import { IncomeExpense } from './IncomeExpense'
import { TransactionList } from './TransactionList'
import { AddTrasnsaction } from './AddTrasnsaction'
import Spinner from '../Template/Spinner'

import './ExpenseTracker.css'

function ExpenseTracker () {
    return (
        <div className='expContainer'>
            <Spinner />
            <Balance />
            <IncomeExpense />
            <TransactionList />
            <AddTrasnsaction />
        </div>
    );
}

export default ExpenseTracker;