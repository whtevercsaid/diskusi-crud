var express = require('express');
var router = express.Router();
const { masterController } = require('../controllers');

router.get('/get', masterController.showDiskusi);
router.get('/get/:user_id', masterController.showDiskusiById);
router.post('/post', masterController.postDiskusi);
router.post('/update/:id', masterController.updateDiskusi);
router.post('/delete/:id', masterController.deleteDiskusi);
module.exports = router;