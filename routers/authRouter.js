var express = require('express');
var router = express.Router();
const { authController } = require('../controllers');

router.post('/login', authController.login);
router.post('/keeplogin',authController.keeplogin);

module.exports = router;