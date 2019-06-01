const express = require('express');
const getAllHandler = require('./handlers/getAll');

const router = express.Router();

router.get('/', getAllHandler);

module.exports = router;
