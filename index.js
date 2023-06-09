const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { dbConnection } = require('./database/config');

// Crear el servidor express
const app = express();

// Base de datos
dbConnection();

//CORS
app.use(cors());

// Directorio publico
app.use(express.static('public'));

// Lectura y parseo del body
app.use(express.json());

// Rutas
app.use('/api/auth', require('./routes/auth'));

// todo: CRUD: Eventos


// Escuchar peticion 
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${4000}`);
});
