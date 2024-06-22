const { getItemsByElement } = require('../config/db.mongo');
const { insertData } = require('../config/db.mongo');

const Actualizar = async (req, res) => {
    try {
        // -------------viajes y autos
        const itemsViajes = await getItemsByElement('Usuarios', 'viajes');
        const itemsAutos = await getItemsByElement('Usuarios', 'autos');

        const items = [...itemsViajes, ...itemsAutos]; // comb

        res.json({
            status: true,
            msg: 'Items encontrados exitosamente',
            itemz: items
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

const SolicitudAuto = async (req, res) => {
    const { agencia, marca, placa, modelo, precio, ciudad, username } = req.body;


    // rl usuario
    const newUser = {
        username,
        agencia,
        marca,
        placa,
        modelo,
        precio,
        ciudad,
        element: 'solicitud'
    };

    // aca se agrega y se mira el error
    const result = await insertData('Usuarios', newUser);

    if(result instanceof Error) {
        return res.status(400).json(
            {
                status: false,
                msg: 'Error al registrar solicitud',
                data: result
            });
    };

    res.json({
        status: true,
        msg: 'SE HA REGISTRADO CORRECTAMENTE la solicitus',
        user: {
            username: newUser.username,
            element: newUser.element
        }
    });
};

const SolicitudViaje = async (req, res) => {
    const { agencia, origen, destino, dias, precio, username } = req.body;


    // rl usuario
    const newUser = {
        username,
        agencia,
        origen,
        destino,
        dias,
        precio,
        element: 'solicitud'
    };

    // aca se agrega y se mira el error
    const result = await insertData('Usuarios', newUser);

    if(result instanceof Error) {
        return res.status(400).json(
            {
                status: false,
                msg: 'Error al registrar solicitud',
                data: result
            });
    };

    res.json({
        status: true,
        msg: 'SE HA REGISTRADO CORRECTAMENTE la solicitus',
        user: {
            username: newUser.username,
            element: newUser.element
        }
    });
};



module.exports = {
    Actualizar,
    SolicitudAuto,
    SolicitudViaje
};
