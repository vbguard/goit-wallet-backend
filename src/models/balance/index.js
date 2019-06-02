const mongoose = require('mongoose');
const { isEmpty } = require('lodash');

const { Schema } = mongoose;

const balanceSchema = new Schema(
  {
    total: {
      type: Number,
      default: 0,
    },
    costs: {
      type: Number,
      default: 0,
    },
    income: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

balanceSchema.statics.getOrCreate = async function getOrCreate() {
  const balance = await this.find();

  if (isEmpty(balance)) {
    return new this().save();
  }

  return balance[0];
};

const Balance = mongoose.model('Balance', balanceSchema);

module.exports = Balance;
