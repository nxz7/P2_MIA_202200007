const { Router } = require('express');
const { check } = require('express-validator');
const fs = require('fs');
const path = require('path');
const validateAttributes = require('../middleware/validateAttributes');
require('dotenv').config();

const router = Router();
const usuariosController = require('../controllers/usuarios.controller');

// Ruta principal
router.get('/', (req, res) => {
    res.json({
        status: "1",
        msg: "usuario"
    });
});

// Ruta para obtener todos los usuarios
router.get('/getUsers', (req, res) => {
    const usersFilePath = path.join(__dirname, '../users.json');
    const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
    res.json({
        status: "1",
        msg: "Lista de usuarios",
        users
    });
});

router.post('/getUser', [
    check('username', 'ingresar el username').not().isEmpty(),
    check('password', 'ingresar el password').not().isEmpty(),
    validateAttributes
], usuariosController.getUser);

router.get('/getUser2/:username', (req, res) => {
    const { username } = req.params;
    const usersFilePath = path.join(__dirname, '../users.json');
    const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
    const user = users.find(user => user.username === username);
    if (user) {
        res.json({
            status: true,
            msg: "si existe",
            user
        });
    } else {
        res.json({
            status: false,
            msg: "no existe",
            user: null
        });
    }
});

module.exports = router;
