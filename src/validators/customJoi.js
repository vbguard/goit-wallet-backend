const Joi = require('@hapi/joi');
const objectId = require('src/validators/extensions/objectId');

module.exports = Joi.extend(objectId);
