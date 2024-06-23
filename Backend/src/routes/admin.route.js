const { Router } = require('express');
const AdminController = require('../controllers/admin.controller');

const router = Router();

router.post('/crearUsuarios', AdminController.crearUsuarios);

router.post('/crearViajes', AdminController.crearViajes);

router.post('/crearAutos', AdminController.crearAutos);

router.post('/borrarUser', AdminController.borrarUser);

module.exports = router;
