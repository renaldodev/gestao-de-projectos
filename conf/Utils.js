const User = require('../model/User');
const jwt = require('jsonwebtoken');
const process = require('process');

async function login({
    email,
    password
}) {
    return new Promise((resolve, reject) => {
        User.findOne({
            email: email
        }).then(user => {
            if (!user) {
                resolve({
                    error: "This accont does not exist"
                })
                return;
            }
            if (password === user.password) {
                const response = jwt.sign({
                    user
                }, process.env.SECRET_KEY_JWT, {
                    expiresIn: '30s'
                })
                resolve({
                    token: response
                })
                return;
            }
            resolve({
                error: "Some thing went wrong with your access login"
            })
        })
    })
}

function isAuthenticated(req, res, next) {
    // Get auth header value
    const bearerHeader = req.headers['authorization'];
    // Check if bearer is undefined
    if (typeof bearerHeader !== 'undefined') {
        // Set the token
        const token = bearerHeader;
        jwt.verify(token, process.env.SECRET_KEY_JWT, (error, authData) => {
            if (error) {
                res.status(403).json({
                    error: "acess forbidden you must login"
                });
            } else {
                req.authData = authData;
                next()
            }

        })
    } else {
        // Forbidden
        res.status(403).json({
            error: "acess forbidden you must login"
        });
         console.log(process.env.SECRET_KEY_JWT)
    }

}

module.exports = {
    login,
    isAuthenticated
};