const auth = require('src/validators/auth');
const transactions = require('src/validators/transactions');

module.exports = {
  ...auth,
  ...transactions,
};
