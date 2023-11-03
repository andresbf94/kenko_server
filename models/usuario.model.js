const { model, Schema } = require ('mongoose');

const usuarioSchema = new Schema({
    nombre: String,
    email: String,
    password: String,
    rol: {
      type:String,
      default: 'regular'
    }
    
  }, { timestamps: true });

module.exports = model( 'usuario', usuarioSchema);