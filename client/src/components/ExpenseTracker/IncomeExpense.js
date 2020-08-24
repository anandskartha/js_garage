import React from 'react'
import propTypes from "prop-types";
import { connect } from 'react-redux'
import { amountFormatter } from '../../utils'

function IncomeExpense({ transactions }) {
    const amounts = transactions.map(transaction => transaction.amount)
    const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2)
    const expense = (
        amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
        -1
    ).toFixed(2)

    return (
        <div className="inc-exp-container">
            <div>
            <h4>Income</h4>
        <p className="money plus">${amountFormatter(income)}</p>
            </div>
            <div>
            <h4>Expense</h4>
            <p className="money minus">${amountFormatter(expense)}</p>
            </div>
        </div>
    )
}

IncomeExpense.propTypes = {
    transactions: propTypes.array.isRequired
}
const mapStateToProps = state => ({
    transactions: state.transactions.transactions
})
export default connect(mapStateToProps, {})(IncomeExpense)