var express = require('express');
var router = express.Router();
const { masterController } = require('../controllers');

router.get('/principle', masterController.masterPrinciple);
router.get('/area', masterController.masterArea);
router.get('/distributor', masterController.masterDistributor);

module.exports = router;