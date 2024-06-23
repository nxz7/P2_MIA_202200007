const { Router } = require('express');
const RecepcionistaController = require('../controllers/recepcionista.controller');

const router = Router();

router.post('/tabla', RecepcionistaController.TablaSolicitud);

//router.post('/aceptar', RecepcionistaController.Aceptar);

//router.post('/rechazar', RecepcionistaController.Aceptar);

module.exports = router;
