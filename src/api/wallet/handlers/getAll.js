const Wallet = require('../../../models/wallet');

module.exports = async (req, res) => {
  try {
    const userId = req.user._id;
    const wallet = await Wallet.findOne({ createdBy: userId })
      .populate('transactions')
      .lean();

    return res.json({
      totalBalance: wallet.total,
      data: wallet.transactions,
    });
  } catch (error) {
    return res.json({
      message: error.message,
    });
  }
};
