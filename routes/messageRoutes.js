const express = require('express');
const router = express.Router();

const { addMessage } = require('../controllers/messageController');

router.route('/')
    .post(addMessage);

module.exports = router;