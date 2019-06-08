const auth = require('../validators/auth');
const transactions = require('../validators/transactions');

module.exports = {
  ...auth,
  ...transactions,
};
