const { Router } = require('express');
const RecepcionistaController = require('../controllers/recepcionista.controller');

const router = Router();

router.post('/tabla', RecepcionistaController.TablaSolicitud);

router.post('/aceptarSolicitud', RecepcionistaController.aceptarSolicitud);

router.post('/borrarSolicitud', RecepcionistaController.borrarSolicitud);

module.exports = router;
