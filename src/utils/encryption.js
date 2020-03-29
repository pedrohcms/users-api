const crypto = require('crypto');

module.exports = {
    hash(algorithm, text, exit_type) {
        return crypto.createHash(algorithm).update(text).digest(exit_type);
    }
};