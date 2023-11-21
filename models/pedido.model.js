const { model, Schema } = require ('mongoose');

const pedidoSchema = new Schema({

  user_id: { 
    type: Schema.Types.ObjectId, 
    ref: 'Usuario', 
    required:true 
  },
  direccion: {
    type: String,
    required:true
  },
  estado: {
    type:String,
    default: 'enviado'
  },
  productos: [
    {
      producto : {
        type: Object,
        ref: 'Producto',
        required: true,
      },
      unidades: {
        type: Number,
        required: true,
      }      
    }
  ],
}, { timestamps: true });

module.exports = model('pedido', pedidoSchema);