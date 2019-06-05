const Wallet = require('src/models/wallet');

module.exports = async (req, res) => {
  const userId = req.user._id;

  const wallet = await Wallet.findOne({ createdBy: userId })
    .populate('transactions')
    .lean();

  return res.json({
    items: wallet.transactions,
  });
};

// //get allTransactions all users
// const Transaction = require('src/models/transaction');
//
// module.exports = async (req, res) => {
//   const items = await Transaction.find();
//   return res.json({
//     items,
//   });
// };
