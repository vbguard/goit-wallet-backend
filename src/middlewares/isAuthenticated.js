const jwt = require('jsonwebtoken');
const { ACCESS_TOKEN_SECRET } = require('../config');

module.exports = async (req, res, next) => {
  const { authorization } = req.headers;

  try {
    const splittedAuthHeader = authorization && authorization.split(' ');
    const authToken = splittedAuthHeader && splittedAuthHeader[1];

    if (!authToken) return res.status(401).json({ message: 'Unauthorized' });

    req.user = jwt.verify(authToken, ACCESS_TOKEN_SECRET);

    return next();
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};
