const Message = require('../models/Message');

// @desc Save a message
// @route POST /api/v1/messages
// @access Public

exports.addMessage = async (req, res, next) => {
    try {
        //const {name, email, message} = req.body;
        const message = await Message.create(req.body);
        return res.status(200).json({
            success: true,
            data: message
        });
    } catch (err) {
        if(err.name === 'ValidationError') {
            const messages = Object.values(err.errors).map(val => val.message);
            res.status(400).json({
                success: false,
                error: messages
            });
        } else {
            res.status(500).json({
                success: false,
                error: `Server Error: ${err}`
            });
        }
    }
}