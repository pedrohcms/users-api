const jwt = require('jsonwebtoken');

const env = require('../config/env');

const key = env.APP_KEY;

module.exports = {
    create(payload) {
        const token = jwt.sign(payload, key, {
            expiresIn: '24h'
        });

        return token;
    },

    verify(token) {
        const info = jwt.verify(token, key);
        
        return info;
    }
}