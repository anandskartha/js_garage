import React from 'react'
import propTypes from "prop-types";
import { connect } from 'react-redux'
import { amountFormatter } from '../../utils';

const Balance = ({ transactions }) => {
    const amounts = transactions.map(transaction => transaction.amount)
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)
    return (
        <>
            <h4>Your Balance</h4>
            <h1>${amountFormatter(total)}</h1>
        </>
    )
}
Balance.propTypes = {
    transactions: propTypes.array.isRequired
}
const mapStateToProps = (state) => ({
    transactions: state.transactions.transactions
})
export default connect(mapStateToProps, {})(Balance)