const express = require('express');

const loginHandler = require('./handlers/login');
const signUpHandler = require('./handlers/signUp');
const userLogout = require('./handlers/logout');

const router = express.Router();

router.post('/login', loginHandler);
router.post('/sign-up', signUpHandler);
router.get('/logout', userLogout);

module.exports = router;
