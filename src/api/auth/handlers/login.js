const jwt = require('jsonwebtoken');

const { ACCESS_TOKEN_SECRET, ACCESS_TOKEN_EXPIRES_IN } = require('../../../config');
const User = require('../../../models/user');

module.exports = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) return res.status(401).json({ message: 'User with such email does not exist!' });
    if (!(await user.comparePasswords(password))) {
      return res.status(401).json({ message: 'Wrong password!' });
    }

    const plainUser = user.toObject();

    const token = jwt.sign(plainUser, ACCESS_TOKEN_SECRET, {
      expiresIn: ACCESS_TOKEN_EXPIRES_IN,
    });

    return res.json({ token, user });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
