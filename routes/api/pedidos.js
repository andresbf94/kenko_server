const router = require('express').Router();
const pedidoController = require('../../controllers/pedidos.controller');

// Rutas para gestionar pedidos
router.get('/', pedidoController.getAllPedidos);
router.get('/:pedidoId', pedidoController.getPedidoById);
router.post('/', pedidoController.createPedido);

module.exports = router;