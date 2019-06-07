const mongoose = require('mongoose');

const { Schema } = mongoose;

const TYPES = {
  INCOME: '+',
  COST: '-',
};

const CATEGORIES = {
  MAIN_EXPENSES: 'Main Expenses',
  FOOD: 'Food',
  CAR: 'Car',
  ENTERTAINMENT: 'Entertainment',
  SELF_CARE: 'Self Care',
  CHILD_CARE: 'Child Care',
  HOUSEHOLD_PRODUCTS: 'Household Products',
  EDUCATION: 'Education',
  OTHER_EXPENSES: 'Other expenses',
  REGULAR_INCOME: 'Regular Income',
  IRREGULAR_INCOME: 'Irregular Income',
};

const transactionSchema = new Schema(
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

transactionSchema.virtual('wallet', {
  ref: 'Wallet',
  localField: '_id',
  foreignField: 'transactions',
  justOne: true,
});

transactionSchema.statics.TYPES = TYPES;
transactionSchema.statics.CATEGORIES = CATEGORIES;

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
