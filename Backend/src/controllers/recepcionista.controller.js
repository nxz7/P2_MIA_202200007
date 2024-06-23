const { getItemsByElement } = require('../config/db.mongo');

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

module.exports = {
    TablaSolicitud
};
