const User = require('../../../models/user');
const Wallet = require('../../../models/wallet');

module.exports = async (req, res) => {
  const { name, email, password } = req.body;

  if (password.length < 6)
    return res.status(400).json({ message: 'Password must be at least 6 characters' });
  const validUser = await User.findOne({ email });

  if (validUser) return res.status(400).json({ message: 'Email already exist!' });

  try {
    const user = new User({
      name,
      email,
      password,
    });

    const savedUser = await user.save();

    const wallet = new Wallet({
      createdBy: savedUser._id,
    });

    await wallet.save();

    const plainUser = savedUser.toObject();

    return res.json(plainUser);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
