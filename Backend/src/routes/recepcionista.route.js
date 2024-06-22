const { Router } = require('express');
const RecepcionistaController = require('../controllers/recepcionista.controller');

const router = Router();

router.post('/decidir', RecepcionistaController.Decidir);

module.exports = router;
