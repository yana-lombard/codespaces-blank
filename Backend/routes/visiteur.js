const express = require('express');
const router = express.Router();
const visiteurController = require('../controllers/visiteurController');

router.get('/', visiteurController.getAllVisiteurs);
router.post('/', visiteurController.createVisiteur);
router.get('/:id', visiteurController.getOneVisiteur);
router.put('/:id', visiteurController.modifyVisiteur);
router.delete('/:id', visiteurController.deleteVisiteur);

module.exports = router;