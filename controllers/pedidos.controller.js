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

// Controlador para obtener un pedido por ID
exports.getPedidoById = async (req, res) => {
  try {
    const { pedidoId } = req.params;
    const pedido = await Pedido.findById(pedidoId);
    res.json(pedido);
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