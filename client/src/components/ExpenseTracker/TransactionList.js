import React, { useEffect } from 'react'
import propTypes from "prop-types";
import { connect } from 'react-redux'
import Transaction from './Transaction'
import { getTransactions } from '../../store/actions/transactionActions'

const TransactionList = (props) => {
    useEffect(() => {
        props.getTransactions();
        // eslint-disable-next-line
    }, []);
    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {props.transactions.map(transaction => 
                    <Transaction key={transaction._id} transaction={transaction} />
                )}
            </ul>
        </>
    )
}
TransactionList.propTypes = {
    transactions: propTypes.array.isRequired,
    getTransactions: propTypes.func.isRequired
}

const mapStateToProps = state => ({
    transactions: state.transactions.transactions
})
export default connect(mapStateToProps, { getTransactions })(TransactionList)
