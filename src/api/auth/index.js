const express = require('express');
const passport = require('passport');

const loginHandler = require('./handlers/login');
const signUpHandler = require('./handlers/signUp');
const userLogout = require('./handlers/logout');

const router = express.Router();

router.post('/login', loginHandler);
router.post('/sign-up', signUpHandler);
router.get('/logout', userLogout);
// router.get('/logout', async (req, res) => {
//   await req.logout();
//   req.session = null;
//   res.clearCookie('test');
//   res.clearCookie('test.sig');
//   return res.redirect('/');
// });

// router.get('/logout', function(req, res){
//   req.logout();
//   //   req.session = null;
// //   res.clearCookie('test');
// //   res.clearCookie('test.sig');
// //   return res.redirect('/');
// });

module.exports = router;
