const { loginFind } = require('../config/db.mongo');

const fs = require('fs');
const path = require('path');


const getUser = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await loginFind('Usuarios', username, password);

        if (user) {
            res.json({
                status: true,
                msg: "si existe el usuario",
                user: {
                    type: user.type,
                    username: user.username,
                    email: user.email,
                    name: user.name
                }
            });
        } else {
            res.status(400).json({
                status: false,
                msg: "el usuario no existe",
                user: null
            });
        }
    } catch (error) {
        console.error('Error getUser: ', error);
        res.status(500).json({
            status: false,
            msg: "Error interno del servidor",
            user: null
        });
    }
};

module.exports = {
    getUser
};
