const express = require('express');
const getAllHandler = require('./handlers/getAll');
const createHandler = require('./handlers/create');

const router = express.Router();

router.get('/', getAllHandler);
router.post('/', createHandler);

module.exports = router;
