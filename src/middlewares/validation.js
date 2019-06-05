const Joi = require('@hapi/joi');
const { get } = require('lodash');
const validators = require('src/validators');

module.exports = async (req, res, next) => {
  try {
    const { url, method, body, params, query } = req;

    const data = { ...body, ...params, ...query };

    const schema = get(validators, [url, method]);

    if (!schema || !schema.isJoi) return next();

    await Joi.validate(data, schema, { abortEarly: false, convert: true });

    return next();
  } catch (e) {
    const details =
      e.details &&
      e.details.map(({ message, type, context: { key } }) => ({
        field: key,
        message: message.replace(/['"]/g, ''),
        type,
      }));

    return res.status(400).json({ message: e.message, details });
  }
};
