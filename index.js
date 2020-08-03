const express = require('express');
require('dotenv').config();
const cors = require('cors');

const { dbConnection } = require ('./database/config');

//Servidor Express
const app = express();

// Configurar CORS
app.use(cors());

// Conexion a la base de Datos
dbConnection();




app.listen (process.env.PORT, () => {
    console.log('Servidor corriendo en puerto ' + process.env.PORT);
});
