const express = require('express');
const isAuthenticated = require('../middlewares/isAuthenticated');

const auth = require('./auth');
const wallet = require('./wallet');

const router = express.Router();

router.use('/auth', auth);
router.use('/wallets', isAuthenticated, wallet);

module.exports = router;
