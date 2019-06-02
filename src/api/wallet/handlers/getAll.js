const WalletItem = require('src/models/walletItem');

module.exports = async (req, res) => {
  const items = await WalletItem.find();
  return res.json({
    items,
  });
};
