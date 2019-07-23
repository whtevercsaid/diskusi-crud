var express = require('express');
var router = express.Router();
const { masterController } = require('../controllers');

router.get('/diskusi', masterController.showDiskusi);
router.post('/diskusi/:user_id', masterController.showDiskusiById);
router.post('/diskusi/postone', masterController.postDiskusi);
router.post('/diskusi/update/:id', masterController.updateDiskusi);
router.post('/diskusi/delete/:id', masterController.deleteDiskusi);
module.exports = router;