const { Router } = require('express');
const { check } = require('express-validator');
const validateAttributes = require('../middleware/validateAttributes');
require('dotenv').config(); // Recibe las variables de entorno

const router = Router();
const usuariosController = require('../controllers/usuarios.controller');

// Ruta principal
router.get('/', (req, res) => {
    res.json({
        status: "1",
        msg: "usuario"
    });
});

const usuarios = {
    1: "usuario1",
    2: "usuario2",
    3: "usuario3",
    4: "usuario4",
    5: "natalia",
    6: "usuario6",
    7: "usuario7",
    8: "usuario8",
    9: "usuario9",
    10: "usuario10"
}

// Ruta para obtener todos los usuarios
router.get('/getUsers', (req,res)=>{
    res.json({
        status: "1",
        msg: "Lista de usuarios",
        usuarios
    });
});

router.post('/getUser',[
    check('id', 'ingresar el id').not().isEmpty(),
    validateAttributes
    ],
    usuariosController.getUser
)



router.get('/getUser2/:id', (req, res) => {
    const { id } = req.params;
    const user = usuarios[id];
    if (user) {
        res.json({
            status: true,
            msg: "si existe",
            user
        });
    }else{
        res.json({
            status: false,
            msg: "no existe",
            user
        });
    }
})

module.exports = router;