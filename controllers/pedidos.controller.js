// controllers/pedido.controller.js
const Pedido = require('../models/pedido.model');

// Controlador para obtener todos los pedidos
exports.getAllPedidos = async (req, res) => {
  try {
    const pedidos = await Pedido.find();
    res.json(pedidos);
  } catch (error) {
    res.json({ error: error.message });
  }
};

// Controlador para obtener un pedido por su ID
exports.getPedidoById = async (req, res) => {
  try {
    const { pedidoId } = req.params;
    const pedido = await Pedido.findById(pedidoId);
    res.json(pedido);
  } catch (error) {
    res.json({ error: error.message });
  }
};

// Controlador para obtener un pedido por el id de un usuario
exports.getPedidosByUserId = async (req, res) => {
  try {
    const { userId } = req.params;
    const pedidos = await Pedido.find({ user_id: userId });
    res.json(pedidos);
  } catch (error) {
    res.json({ error: error.message });
  }
};

// Controlador para crear un nuevo pedido
exports.createPedido = async (req, res) => {
  try {    
    const pedido = await Pedido.create(req.body);
    res.json(pedido);
  } catch (error) {
    res.json({ error: error.message });
  }
};

// Controlador para modificar un pedido
exports.updatePedido = async (req, res) => {
  try {
    const { pedidoId } = req.params;
    const updatePedido = await Pedido.findByIdAndUpdate(
      pedidoId,
      { $set: req.body },
      { new: true }
    );
  if(!updatePedido){
    return res.status(404).json({ message: 'Pedido no encontrado'});
  }
  res.json(updatePedido);
  } catch (error) {
    res.json({ error: error.message});
  }
}

// Controlador para eliminar pedidos
exports.deletePedidoById = async (req, res) =>{
  try {
    const { pedidoId } = req.params;
    const pedido = await Pedido.findByIdAndDelete(pedidoId);
    if(!pedido){
      return res.json({ message: 'Pedido no encontrado' })
    }
    res.json(pedido);   
  } catch (error) {
    res.json({ error: error.message})
  }
}