const { Router } = require('express');
const { check } = require('express-validator');
const validateAttributes = require('../middleware/validateAttributes');
const registerController = require('../controllers/register.controller');
require('dotenv').config();

const router = Router();
//  register/register
router.post('/register', [
    check('username', 'Username es obligatorio').not().isEmpty(),
    check('password', 'Password es obligatorio').not().isEmpty(),
    check('confirmPassword', 'Confirmacion password es obligatorio').not().isEmpty(),
    check('email', 'email es obligatorio').isEmail(),
    check('name', 'nombre es obligatorio').not().isEmpty(),
    validateAttributes
], registerController.registerUser);

module.exports = router;
