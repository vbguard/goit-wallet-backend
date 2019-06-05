const Joi = require('src/validators/customJoi');

module.exports = {
  '/auth/login': {
    POST: Joi.object({
      email: Joi.string()
        .email()
        .required(),
      password: Joi.string().required(),
    }),
  },
  '/auth/sign-up': {
    POST: Joi.object({
      email: Joi.string()
        .email()
        .required(),
      password: Joi.string().required(),
      name: Joi.string(),
    }),
  },
};
