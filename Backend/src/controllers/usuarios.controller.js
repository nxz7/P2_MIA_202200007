const fs = require('fs');
const path = require('path');

const getUser = async (req, res) => {
    const { username, password } = req.body;
    const usersFilePath = path.join(__dirname, '../users.json');
    const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
    const user = users.find(user => user.username === username && user.password === password);

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
        res.json({
            status: false,
            msg: "el usuario no existe",
            user: null
        });
    }
};

module.exports = {
    getUser
};
