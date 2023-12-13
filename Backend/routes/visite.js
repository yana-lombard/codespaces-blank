const express = require('express');
const router = express.Router();
const visiteController = require('../controllers/visiteController');

router.get('/', visiteController.getAllVisites);
router.post('/', visiteController.createVisite);
router.get('/:id', visiteController.getOneVisite);
router.put('/:id', visiteController.modifyVisite);
router.delete('/:id', visiteController.deleteVisite);

module.exports = router;