const Transaction = require('src/models/transaction');

module.exports = async (req, res) => {
  const items = await Transaction.find();
  return res.json({
    items,
  });
};
