const { model, Schema } = require('mongoose');

const usuarioSchema = new Schema({
  nombre: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  direccion: {
    type: String,
    required:true
  },
  telefono: {
    type: Number,
    required: true
  },
  rol: {
    type: String,
    default: 'regular',
  }
}, { timestamps: true });

module.exports = model('usuario', usuarioSchema);