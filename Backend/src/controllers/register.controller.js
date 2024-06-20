const fs = require('fs');
const path = require('path');

const registerUser = async (req, res) => {
    const { username, password, confirmPassword, email, name } = req.body;

    // ver si las contraseñas coinciden
    if (password !== confirmPassword) {
        return res.status(400).json({
            status: false,
            msg: 'LA CONTRASEÑA NO COINCIDE'
        });
    }

    const usersFilePath = path.join(__dirname, '../users.json');
    const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

    // ver si el username ya esta
    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
        return res.status(400).json({
            status: false,
            msg: 'ese username ya existe'
        });
    }

    // agregar el usuario
    const newUser = {
        username,
        password,
        email,
        name,
        type: 'user'
    };
    users.push(newUser);

    // escribirñp
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2), 'utf-8');

    res.json({
        status: true,
        msg: 'SE HA REGISTRADO CORRECTAMENTE EL USUARIO',
        user: {
            username: newUser.username,
            email: newUser.email,
            name: newUser.name,
            type: newUser.type
        }
    });
};

module.exports = {
    registerUser
};
