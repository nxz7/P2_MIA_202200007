const { getItemsByElement,deleteSolicitud,insertData } = require('../config/db.mongo');

const TablaSolicitud = async (req, res) => {
    try {
        //-------------> tiene las solicitudes
        const items = await getItemsByElement('Usuarios', 'solicitud');

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

const borrarSolicitud = async (req, res) => {
    try {
        const { username, agencia, precio } = req.body;
        const result = await deleteSolicitud('Usuarios', username, agencia, precio);

        if (!result) {
            return res.status(400).json({
                status: false,
                msg: 'Error al borrar la solicitud o la solicitud no existe',
            });
        }

        res.json({
            status: true,
            msg: "Se ha borrado la solicitud",
            criteria: {  username, agencia, precio }
        });
    } catch (error) {
        console.error('Error borrarSolicitud: ', error);
        return res.status(407).json({
            status: false,
            msg: 'Error interno del servidor',
        });
    }
};

const aceptarSolicitud = async (req, res) => {
    const {username, agencia, precio } = req.body;


    // rl usuario
    const newUser = {
        username,
        agencia,
        precio,
        element: 'historial'
    };

    // aca se agrega y se mira el error
    const result = await insertData('Usuarios', newUser);

    if(result instanceof Error) {
        return res.status(400).json(
            {
                status: false,
                msg: 'Error al confirmar la reserva',
                data: result
            });
    };



    const resultb = await deleteSolicitud('Usuarios', username, agencia, precio);

    if (!resultb) {
        return res.status(400).json({
            status: false,
            msg: 'error al borrar la solicitd luego de confirmarla',
        });
    }

    res.json({
        status: true,
        msg: 'SE HA CONFIRMADO LA RESERVA :) ',
        user: {
            agencia: newUser.agencia,
            username: newUser.username,
            precio: newUser.precio
        }
    });
};


module.exports = {
    TablaSolicitud,
    borrarSolicitud,
    aceptarSolicitud
};
