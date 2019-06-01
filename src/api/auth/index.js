const express = require('express');
const loginHandler = require('./handlers/login');

const router = express.Router();

router.post('/login', loginHandler);

module.exports = router;
