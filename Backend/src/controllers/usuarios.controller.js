//aca se trabajo con lo sparametros mandados
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



const getUser = async (req, res) => {
    const { id } = req.body;
    const user = usuarios[id];
    if (user) {
        res.json({
            status: true,
            msg: "si existe el usuario",
            user
        });
    }else{
        res.json({
            status: false,
            msg: "el usuario no existe",
            user
        });
    }
}

module.exports = {
    getUser
}
