const mongoose = require('mongoose');

const { Schema } = mongoose;

const TYPES = {
  INCOME: 'INCOME',
  COST: 'COST',
};

const CATEGORIES = {
  MAIN_EXPENSES: 'MAIN_EXPENSES',
  FOOD: 'FOOD',
  CAR: 'CAR',
  ENTERTAINMENT: 'ENTERTAINMENT',
  SELF_CARE: 'SELF_CARE',
  CHILD_CARE: 'CHILD_CARE',
  HOUSEHOLD_PRODUCTS: 'HOUSEHOLD_PRODUCTS',
  EDUCATION: 'EDUCATION',
  OTHER_EXPENSES: 'OTHER_EXPENSES',
  REGULAR_INCOME: 'REGULAR_INCOME',
  IRREGULAR_INCOME: 'IRREGULAR_INCOME',
};

const walletItemSchema = new Schema(
  {
    date: {
      type: Date,
      required: true,
    },
    type: {
      type: String,
      required: true,
      enum: Object.values(TYPES),
    },
    category: {
      type: String,
      required: true,
      enum: Object.values(CATEGORIES),
    },
    comments: {
      type: String,
    },
    amount: {
      type: Number,
      required: true,
    },
    balanceAfter: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

walletItemSchema.statics.TYPES = TYPES;
walletItemSchema.statics.CATEGORIES = CATEGORIES;

const WalletItem = mongoose.model('WalletItem', walletItemSchema);

module.exports = WalletItem;
