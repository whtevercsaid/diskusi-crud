var express = require('express');
var router = express.Router();
const { komentController } = require('../controllers');

router.get('/get', komentController.getKomentar);
router.get('/get/:id_user', komentController.getKomentarById);
router.post('/post', komentController.postKomentar);
router.post('/update/:id', komentController.updateKomentar);
router.post('/delete/:id', komentController.deleteKomentar);
module.exports = router;