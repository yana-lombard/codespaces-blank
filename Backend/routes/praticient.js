const express = require('express');
const router = express.Router();
const praticientController = require('../controllers/praticientController');

router.get('/', praticientController.getAllPraticients);
router.post('/', praticientController.createPraticient);
router.get('/:id', praticientController.getOnePraticient);
router.put('/:id', praticientController.modifyPraticient);
router.delete('/:id', praticientController.deletePraticient);

module.exports = router;