// ACA SE CREA CON EXPRESS
const express = require('express');
const app = express();
const cors = require('cors');

//limite

app.use(express.json({limit: '50mb'}));
app.use(cors())


// ROUTES --- ruta principal
app.get('/', (req, res) =>{
    res.json({
        status: "1",
        msg: "hola, pruebas pagina!!!"
    })
})

//GET USER SE USA PARA VERIFICAR SI EL USUARIO EXISTE Y EL TIPO
// solo la ruta de los usuarios 3200/usuarios
app.use('/usuarios', require('./routes/usuarios.route.js'));

//REGISTRAR A LOS USUARIOS TIPO USUARIO  3200/register
app.use('/register', require('./routes/register.route.js'));


module.exports = app;