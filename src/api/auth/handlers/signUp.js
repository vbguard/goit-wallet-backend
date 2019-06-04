const User = require('src/models/user');
const Wallet = require('src/models/wallet');

module.exports = async (req, res) => {
  const { name, email, password } = req.body;

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
