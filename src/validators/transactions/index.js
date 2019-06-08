const Joi = require('../../validators/customJoi');
const Transaction = require('../../models/transaction');

module.exports = {
  '/wallets/transactions': {
    POST: Joi.object({
      date: Joi.date().required(),
      type: Joi.string()
        .valid(Object.values(Transaction.TYPES))
        .required(),
      category: Joi.string()
        .valid(Object.values(Transaction.CATEGORIES))
        .required(),
      amount: Joi.number().required(),
      comments: Joi.string()
        .valid('')
        .optional(),
    }),
  },
};
