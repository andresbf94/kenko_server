const { model, Schema } = require ('mongoose');

const productoSchema = new Schema({
  nombre: String,
  descripcion: String,
  precio: Number,
  imagen: String,
  categoria: String
}, { timestamps: true });

module.exports = model('producto', productoSchema);