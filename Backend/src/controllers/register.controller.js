const { checkUserExists, insertData } = require('../config/db.mongo');
const { uploadFile } = require('../config/bucket');
const { uploadFile2 } = require('../config/bucket');
const fs = require('fs');
const path = require('path');

const registerUser = async (req, res) => {
    const { imagen, path, username, password, confirmPassword, email, name } = req.body;
//imagen, path
    // Check if passwords match
    if (password !== confirmPassword) {
        return res.status(400).json({
            status: false,
            msg: 'LA CONTRASEÑA NO COINCIDE'
        });
    }
//---------------------------- pRUEBA
    await uploadFile2(path, imagen);
    const ruta_aws = `https://appweb-202200007-p2.s3.amazonaws.com/${path}`;

//------------------------------------------

    // VER SI EXISTE
    const existingUser = await checkUserExists('Usuarios', username);
    if (existingUser) {
        return res.status(400).json({
            status: false,
            msg: 'ese username ya existe'
        });
    }

    // rl usuario
    const newUser = {
        username,
        password,
        email,
        name,
        type: 'turista',
        element: 'usuario'
    };

    // aca se agrega y se mira el error
    const result = await insertData('Usuarios', newUser);

    //--------------------
    
//---------------------
    if(result instanceof Error) {
        return res.status(400).json(
            {
                status: false,
                msg: 'Error al registrar usuario',
                data: result
            });
    };

    res.json({
        status: true,
        msg: 'SE HA REGISTRADO CORRECTAMENTE EL USUARIO',
        image: ruta_aws,
        user: {
            username: newUser.username,
            email: newUser.email,
            name: newUser.name,
            type: newUser.type,
            element: newUser.element
        }
    });
};


module.exports = {
    registerUser
};
