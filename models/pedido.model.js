const { model, Schema } = require ('mongoose');

const pedidoSchema = new Schema({
  users_id: { type: Schema.Types.ObjectId, ref: 'Usuario' },
  direccionEntrega: String,
  productos: [
    {
      producto: { type: Schema.Types.ObjectId, ref: 'Producto' },
      cantidad: Number,
    },
  ],
}, { timestamps: true });

module.exports = model('pedido', pedidoSchema);