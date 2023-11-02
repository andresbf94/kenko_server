const { model, Schema } = require ('mongoose');

const reservaSchema = new Schema({
    nombre: String,
    correo: String,
    numPer: Number,
    hora: String,
    fecha: Date,
    observaciones: String 
});

module.exports = model( 'reserva', reservaSchema);