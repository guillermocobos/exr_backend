const express = require('express');
require('dotenv').config();
const cors = require('cors');

const { dbConnection } = require ('./database/config');

//Servidor Express
const app = express();

// Configurar CORS
app.use(cors());

// Lectura y parseo BODY
app.use(express.json());

// Conexion a la base de Datos
dbConnection();

// Directorio Publico
app.use (express.static('public'));

// Rutas
app.use ('/api/usuarios', require('./routes/usuario'));
app.use ('/api/login', require('./routes/auth'));
app.use ('/api/partner', require('./routes/partner'));
app.use ('/api/reserva', require('./routes/reserva'));


app.listen (process.env.PORT, () => {
    console.log('Servidor corriendo en puerto ' + process.env.PORT);
});
