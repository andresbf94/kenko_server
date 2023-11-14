const { model, Schema } = require('mongoose');

const productoSchema = new Schema({
  nombre: {
    type: String,
    required: true
  },
  descripcion: {
    type: String,
    required: true
  },
  precio: {
    type: Number,
    required: true
  },
  imagen: {
    type: String,
    required: true
  },
  categoria: {
    type: String,
    required: true
  }
}, { timestamps: true });

module.exports = model('producto', productoSchema);