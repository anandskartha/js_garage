var jwt = require('jsonwebtoken');

// @desc    Login a user
// @route   GET /api/v1/authenticate/login
// @access  Public
exports.login = async (req, res, next) => {
    try {
        if(req.body.email === 'anand@gmail.com') {
            const user = {
                id: 1,
                name: 'Anand Sasidharan',
                email: 'anand@gmail.com',
                type: 'admin',
                loggedInTime: Date.now()
            }
            jwt.sign({user}, 'secretkey', { expiresIn: '1h'}, (err, authToken) => {
                if(err) {
                    return res.status(500).json({
                        success: false
                    });
                }
                return res.status(200).json({
                    success: true,
                    user,
                    authToken
                });
            });
        } else {
            return res.status(403).json({
                success: false,
                error: `Forbidden - Invalid User`
            });
        }
    } catch(err) {
        return res.status(500).json({
            success: false,
            error: `Server Error ${err}`
        });
    }
}

exports.verifyToken = (req, res, next) => {
    //FORMAT OF TOKEN:
    //Authorization: Bearer <access_token>

    //Get the auth header value
    const bearerToken = req.headers['authorization'];
    if(typeof bearerToken !== 'undefined') {
        //Split at the space
        const bearer = bearerToken.split(' ');
        //Get Token
        const authToken = bearer[1];
        //Set the token
        req.token = authToken;

        jwt.verify(req.token, 'secretkey', async (err, authData) => {
            if(err) {
                return res.status(403).json({
                    success: false,
                    error: `Forbidden - Invalid token`
                });
            } else {
                next();
            }
        });
    } else {
        return res.status(403).json({
            success: false,
            error: `Forbidden - No token found`
        });
    }
}
