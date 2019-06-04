const express = require('express');
const getAllHandler = require('./handlers/getAll');
const createHandler = require('./handlers/create');

const router = express.Router();

router.get('/transactions', getAllHandler);
router.post('/transactions', createHandler);

module.exports = router;
