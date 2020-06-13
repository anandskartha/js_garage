import React from 'react'
import { Header } from './Header'
import { Balance } from './Balance'
import { IncomeExpense } from './IncomeExpense'
import { TransactionList } from './TransactionList'
import { AddTrasnsaction } from './AddTrasnsaction'

import { GlobalProvider } from '../../context'

import './ExpenseTracker.css'

function ExpenseTracker () {
    return (
        <GlobalProvider>
            <Header />
            <div className='container'>
                <Balance />
                <IncomeExpense />
                <TransactionList />
                <AddTrasnsaction />
            </div>
        </GlobalProvider>
    );
}

export default ExpenseTracker;