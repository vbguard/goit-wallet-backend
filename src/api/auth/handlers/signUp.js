const User = require('../../../models/user');

module.exports = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = new User({
      name,
      email,
      password,
    });

    const savedUser = await user.save();

    const plainUser = savedUser.toObject();

    return res.json(plainUser);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
