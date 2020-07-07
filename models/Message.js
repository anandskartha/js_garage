const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, 'name is a required field']
    },
    email: {
        type: String,
        trim: true,
        required: [true, 'email is a required field']
    },
    message: {
        type: String,
        trim: true,
        required: [true, 'message is a required field']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
module.exports = mongoose.model('Message', MessageSchema);