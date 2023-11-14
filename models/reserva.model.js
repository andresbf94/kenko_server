const { model, Schema } = require('mongoose');

const reservaSchema = new Schema({
  nombre: {
    type: String,
    required: true
  },
  correo: {
    type: String,
    required: true
  },
  numPer: {
    type: Number,
    required: true
  },
  hora: {
    type: String,
    required: true
  },
  fecha: {
    type: Date,
    required: true
  },
  observaciones: String
});

module.exports = model('reserva', reservaSchema);