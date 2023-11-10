const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const originalSecretKey = 'Techwens';
const secretKey = crypto.createHash('sha256').update(originalSecretKey).digest('hex');

const loginController = (username) => {
    if (!username) {
        console.log('no username')
      return false;
    }
    const user = { id: 1, username };
    const token = jwt.sign(user, secretKey, { expiresIn: '1h' });
    return token;
};

module.exports = loginController;
