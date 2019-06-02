const WalletItem = require('src/models/walletItem');
const Balance = require('src/models/balance');

const { COST, INCOME } = WalletItem.TYPES;
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
} = WalletItem.CATEGORIES;

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
  const { date, type, category, comments, amount } = req.body;

  try {
    const amountNumber = Number(amount);

    const balance = await Balance.getOrCreate();

    if (!ALLOWED_CATEGORIES[type].includes(category)) {
      return res
        .status(412)
        .json({ message: 'Provided category is not allowed for provided type' });
    }

    if (type === COST && amountNumber > balance.total) {
      return res.status(412).json({ message: 'Insufficient funds for this operation' });
    }

    const balanceAfter =
      type === COST ? +balance.total - amountNumber : +balance.total + amountNumber;

    const walletItem = new WalletItem({
      date,
      type,
      category,
      comments,
      amount: amountNumber,
      balanceAfter,
    });

    balance.total = balanceAfter;

    if (type === COST) {
      balance.costs += amountNumber;
    }
    if (type === INCOME) {
      balance.income += amountNumber;
    }

    const [savedWalletItem, savedBalance] = await Promise.all([walletItem.save(), balance.save()]);

    res.json({ walletItem: savedWalletItem, balance: savedBalance });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
