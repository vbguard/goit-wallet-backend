const Transaction = require('../../../models/transaction');
const Wallet = require('../../../models/wallet');
const User = require('../../../models/user');

const { COST, INCOME } = Transaction.TYPES;
const {
  MAIN_EXPENSES,
  FOOD,
  CAR,
  ENTERTAINMENT,
  SELF_CARE,
  CHILD_CARE,
  HOUSEHOLD_PRODUCTS,
  EDUCATION,
  OTHER_EXPENSES,
  REGULAR_INCOME,
  IRREGULAR_INCOME,
} = Transaction.CATEGORIES;

const ALLOWED_CATEGORIES = {
  [COST]: [
    MAIN_EXPENSES,
    FOOD,
    CAR,
    ENTERTAINMENT,
    SELF_CARE,
    CHILD_CARE,
    HOUSEHOLD_PRODUCTS,
    EDUCATION,
    OTHER_EXPENSES,
  ],
  [INCOME]: [REGULAR_INCOME, IRREGULAR_INCOME],
};

module.exports = async (req, res) => {
  const { date, type, category, comments, amount, id } = req.body;
  const userId = req.user._id;

  try {
    const amountNumber = Number(amount);

    const user = await User.findById(userId)
      .populate('wallet')
      .lean();
    const wallet = await Wallet.findById(user.wallet._id);

    if (!ALLOWED_CATEGORIES[type].includes(category)) {
      return res
        .status(412)
        .json({ message: 'Provided category is not allowed for provided type' });
    }

    if (type === COST && amountNumber > wallet.total) {
      return res.status(412).json({ message: 'Insufficient funds for this operation' });
    }

    const balanceAfter =
      type === COST ? +wallet.total - amountNumber : +wallet.total + amountNumber;

    const transformType = type === COST ? '-' : '+';
    const transaction = new Transaction({
      id,
      date,
      type: transformType,
      category,
      comments,
      amount: amountNumber,
      balanceAfter,
    });

    wallet.total = balanceAfter;

    if (type === COST) {
      wallet.costs += amountNumber;
    }
    if (type === INCOME) {
      wallet.income += amountNumber;
    }

    const savedTransaction = await transaction.save();

    wallet.transactions = [...wallet.transactions, savedTransaction._id];
    await wallet.save();

    res.json(savedTransaction);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
