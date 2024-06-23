const { checkUserExists, getItemsByElement,insertData,deleteUsername,deleteItemByCriteria } = require('../config/db.mongo');
const fs = require('fs');
const path = require('path');

const crearUsuarios = async (req, res) => {
    const { username, password, confirmPassword, email, name, type } = req.body;

    // Check if passwords match
    if (password !== confirmPassword) {
        return res.status(400).json({
            status: false,
            msg: 'LA CONTRASEÑA NO COINCIDE'
        });
    }

    // Check if the username already exists in the MongoDB collection
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
        type,
        element: 'usuario'
    };

    // aca se agrega y se mira el error
    const result = await insertData('Usuarios', newUser);

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
        user: {
            username: newUser.username,
            email: newUser.email,
            name: newUser.name,
            type: newUser.type,
            element: newUser.element
        }
    });
};


const crearViajes = async (req, res) => {
    const { agencia, origen, destino, dias, precio } = req.body;


    // rl usuario
    const newUser = {
        agencia,
        origen,
        destino,
        dias,
        precio,
        element: 'viajes'
    };

    // aca se agrega y se mira el error
    const result = await insertData('Usuarios', newUser);

    if(result instanceof Error) {
        return res.status(400).json(
            {
                status: false,
                msg: 'Error al registrar viaje',
                data: result
            });
    };

    res.json({
        status: true,
        msg: 'SE HA REGISTRADO CORRECTAMENTE EL VIAJE :) ',
        user: {
            agencia: newUser.agencia,
            origen: newUser.origen,
            destino: newUser.destino,
            element: newUser.element
        }
    });
};



const crearAutos = async (req, res) => {
    const { agencia, marca, placa,modelo, precio, ciudad } = req.body;


    // rl usuario
    const newUser = {
        agencia,
        marca,
        placa,
        modelo,
        precio,
        ciudad,
        element: 'autos'
    };

    // aca se agrega y se mira el error
    const result = await insertData('Usuarios', newUser);

    if(result instanceof Error) {
        return res.status(400).json(
            {
                status: false,
                msg: 'Error al registrar viaje',
                data: result
            });
    };

    res.json({
        status: true,
        msg: 'SE HA REGISTRADO CORRECTAMENTE EL VIAJE :) ',
        user: {
            agencia: newUser.agencia,
            origen: newUser.origen,
            destino: newUser.destino,
            element: newUser.element
        }
    });
};


const borrarUser = async (req, res) => {
    try {
        const { username} = req.body;
        // Delete user with default element 'usuario'
        const result = await deleteUsername('Usuarios', username, 'usuario');
        
        if(result instanceof Error) {
            return res.status(400).json(
                {
                    status: false,
                    msg: 'Error al borrar el usuario',
                    data: result
                });
        };
        
        if (!result) {
            return res.status(400).json({
                status: false,
                msg: 'Error al borrar el usuario',
                data: result
            });
        }

        res.json({
            status: true,
            msg: "se ha borrado el usuario ",
            user: {
                username
            }
        });

    } catch (error) {
        console.error('Error borrarUser: ', error);
        throw error;
    }
};


const borrarViajes = async (req, res) => {
    try {
        const { agencia, origen, destino, dias, precio } = req.body;
        const criteria = { agencia, origen, destino, dias, precio, element: 'viajes' };
        const result = await deleteItemByCriteria('Usuarios', criteria);

        if (result instanceof Error) {
            return res.status(400).json({
                status: false,
                msg: 'Error al borrar el viaje',
                data: result
            });
        }

        if (!result) {
            return res.status(400).json({
                status: false,
                msg: 'Error al borrar el viaje',
                data: result
            });
        }

        res.json({
            status: true,
            msg: "se ha borrado el viaje",
            criteria
        });
    } catch (error) {
        console.error('Error borrarViajes: ', error);
        throw error;
    }
};

const borrarAutos = async (req, res) => {
    try {
        const { agencia, marca, placa, modelo, precio, ciudad } = req.body;
        const criteria = { agencia, marca, placa, modelo, precio, ciudad, element: 'autos' };
        const result = await deleteItemByCriteria('Usuarios', criteria);

        if (result instanceof Error) {
            return res.status(400).json({
                status: false,
                msg: 'Error al borrar el auto',
                data: result
            });
        }

        if (!result) {
            return res.status(400).json({
                status: false,
                msg: 'Error al borrar el auto',
                data: result
            });
        }

        res.json({
            status: true,
            msg: "se ha borrado el auto",
            criteria
        });
    } catch (error) {
        console.error('Error borrarAutos: ', error);
        throw error;
    }
};


const TablaHistorial = async (req, res) => {
    try {
        //-------------> tiene las solicitudes
        const items = await getItemsByElement('Usuarios', 'historial');

        res.json({
            status: true,
            msg: 'Items encontrados exitosamente',
            items: items
        });
        
    } catch (error) {
        console.error('Error Actualizar: ', error);
        res.status(500).json({
            status: false,
            msg: 'Error al buscar items',
            items: []
        });
    }
};

module.exports = {
    crearUsuarios,
    crearViajes,
    crearAutos,
    borrarUser,
    borrarAutos,
    borrarViajes,
    TablaHistorial
};
