import React from 'react'
import Balance from './Balance'
import IncomeExpense from './IncomeExpense'
import TransactionList from './TransactionList'
import AddTransaction from './AddTransaction'

import './ExpenseTracker.css'

function ExpenseTracker () {
    return (
        <div className='expContainer'>
            <Balance />
            <IncomeExpense />
            <TransactionList />
            <AddTransaction />
        </div>
    );
}

export default ExpenseTracker;