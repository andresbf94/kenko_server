const { model, Schema } = require ('mongoose');

const usuarioSchema = new Schema({
    nombre: String,
    email: String,
    contraseña: String
    
  }, { timestamps: true });

module.exports = model( 'usuario', usuarioSchema);