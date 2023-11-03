const express = require('express');     // Exporta la libreria de express
const cors = require('cors');           
require('dotenv').config();             // Exporta el .env
require('./config/db');                 // Conexion a la base de datos

const app = express();                  // Creamos el servidor

app.use(cors());

app.use(express.json());        // Configuracion para poder recivir archivos json y tratarlos como objetos
app.use(express.urlencoded({extended: false}));
app.use('/uploads', express.static('uploads'));
app.use('/api', require('./routes/api'));       // Para delegar las peticiones a api.js


const PORT = process.env.PORT || 3000;      // Puerto que usa

app.listen(PORT, () => {
    console.log('Server runing on port:', PORT)
})

