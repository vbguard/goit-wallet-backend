const Wallet = require('../../../models/wallet');

module.exports = async (req, res) => {
  const userId = req.user._id;
  const wallet = await Wallet.findOne({ createdBy: userId })
    .populate('transactions')
    .lean();

  return res.json({
    totalBalance: wallet.total,
    data: wallet.transactions,
  });
};
