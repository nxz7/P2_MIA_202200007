const app = require('./app');

require('dotenv').config(); // NO SE SUBEN 

const PORT = process.env.PORT || 3200;


app.listen(PORT, () => {
    console.log(`Servidor en el puerto ${PORT}`);
});