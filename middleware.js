const jwt = require('jsonwebtoken');
const originalSecretKey = 'Techwens';
const crypto = require('crypto');
const secretKey = crypto.createHash('sha256').update(originalSecretKey).digest('hex');

const authenticateJWT = (req, res, next) => {
  //const token = req.headers['authorization'];
  const token = req.header('Authorization').substring(7);

  if (!token) {
    return res.status(403).json({ message: 'Token not provided' });
  }

  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      return res.status(401).json({ message: err.message });
    }

    req.user = user;
    next();
  });
};


module.exports = authenticateJWT;
