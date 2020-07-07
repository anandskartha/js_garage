const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    text: {
        type: String,
        trim: true,
        required:[true, 'text is a required field']
    },
    amount: {
        type: Number,
        required: [true, 'amount is a required field']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

//https://mongoosejs.com/docs/models.html

module.exports = mongoose.model('Transaction', TransactionSchema);