var express = require('express');
var router = express.Router();
const { productController } = require('../controllers');

router.get('/master', productController.master);
router.get('/master/principle', productController.masterPrinciple);
router.get('/master/area', productController.masterArea);
router.get('/master/distributor', productController.masterDistributor);

module.exports = router;