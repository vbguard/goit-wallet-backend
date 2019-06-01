const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
      validate: { validator: validator.isEmail, message: '{VALUE} is not a valid email' },
    },
    password: { type: String, required: true },
    name: { type: String, required: true },
  },
  {
    timestamps: true,
    toObject: {
      virtuals: true,
      versionKey: false,
      transform: (_, ret) => {
        // eslint-disable-next-line no-param-reassign
        delete ret.id;
        // eslint-disable-next-line no-param-reassign
        delete ret.password;
        return ret;
      },
    },
  },
);

userSchema.methods.comparePasswords = async function comparePasswords(password) {
  try {
    return await bcrypt.compare(password, this.password);
  } catch (error) {
    return null;
  }
};

userSchema.pre('save', function preUserSave(done) {
  if (!this.isModified('password')) {
    return done();
  }
  return bcrypt
    .hash(this.password, 10)
    .then(hash => {
      this.password = hash;
      done();
    })
    .catch(err => done(err));
});

const User = mongoose.model('User', userSchema);

module.exports = User;
