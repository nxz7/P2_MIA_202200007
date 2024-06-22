const { Router } = require('express');
const TuristaController = require('../controllers/turista.controller');

const router = Router();

router.post('/actualizar', TuristaController.Actualizar);
router.post('/solicitudAuto', TuristaController.SolicitudAuto);
router.post("/solicitudViaje", TuristaController.SolicitudViaje);


module.exports = router;
