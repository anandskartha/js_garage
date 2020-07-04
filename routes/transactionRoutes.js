const express = require ('express');
const router = express.Router();
const { getTransactions, addTransaction, editTransaction, deleteTransaction } = require('../controllers/transactionController');

router.route('/')
    .get(getTransactions)
    //.get((req,res) => {res.send('hello')}) //test this
    .post(addTransaction);

router.route('/:id')
    .put(editTransaction)
    .delete(deleteTransaction);

module.exports = router;