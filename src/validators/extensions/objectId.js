const { isMongoId } = require('validator');

module.exports = joi => ({
  base: joi.string(),
  name: 'string',
  language: {
    objectId: 'must be a valid ObjectId',
  },
  rules: [
    {
      name: 'objectId',
      validate(_, value, state, options) {
        if (!isMongoId(value)) {
          return this.createError('string.objectId', { value }, state, options);
        }

        return value;
      },
    },
  ],
});
