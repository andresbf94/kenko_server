const { model, Schema } = require ('mongoose');

const pedidoSchema = new Schema({

  users_id: { 
    type: Schema.Types.ObjectId, 
    ref: 'Usuario', 
    required:true 
  },
  direccionEntrega: {
    type: String,
    required:true
  },
  estado: {
    type:String,
    default: 'enviado'
  },
  productos: [
    {
      producto: {
        type: Schema.Types.ObjectId,
        ref: 'Producto',
        required: true,
      },
      unidades: {
        type: Number,
        required: true,
      },
    }
  ],
}, { timestamps: true });

module.exports = model('pedido', pedidoSchema);