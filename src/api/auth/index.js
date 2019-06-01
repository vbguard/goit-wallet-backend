const express = require('express');

const loginHandler = require('./handlers/login');
const signUpHandler = require('./handlers/signUp');

const router = express.Router();

router.post('/login', loginHandler);
router.post('/sign-up', signUpHandler);

module.exports = router;
