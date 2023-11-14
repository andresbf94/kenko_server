const express = require('express');                 // Importa la biblioteca de Express
const cors = require('cors');                       // Importa la biblioteca CORS
require('dotenv').config();                         // Importa y configura la biblioteca dotenv para cargar las variables de entorno
require('./config/db');                             // Conexion a la base de datos
                                        
const app = express();                              // Crea el servidor

app.use(cors());                                    // Condigura el Middleware CORS en la aplicación, permitiendo solicitudes de cualquier origen
app.use(express.json());                            // Configuracion para poder recivir archivos json y tratarlos como objetos
app.use(express.urlencoded({extended: false}));     // Configura el middleware para analizar los cuerpos de las solicitudes codificados en URL
app.use('/uploads', express.static('uploads'));     // Configura la ruta /uploads para servir archivos estaticos desde el dirctorio "uploads"
app.use('/api', require('./routes/api'));           // Para delegar las peticiones a api.js

const PORT = process.env.PORT || 3000;              // Puerto que usa

app.listen(PORT, () => {
    console.log('Server runing on port:', PORT)
})

