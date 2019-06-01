const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');

const { Schema } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    validate: { validator: validator.isEmail, message: '{VALUE} is not a valid email' },
  },
  password: { type: String, required: true },
  name: { type: String, required: true },
});

userSchema.methods.comparePasswords = function comparePasswords(password) {
  return bcrypt.compare(password, this.password);
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
