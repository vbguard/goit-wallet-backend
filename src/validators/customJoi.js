const Joi = require('@hapi/joi');
const objectId = require('../validators/extensions/objectId');

module.exports = Joi.extend(objectId);
