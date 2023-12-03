const router = require('express').Router();
const pedidoController = require('../../controllers/pedidos.controller');
const { checkToken } = require('../../middleware/userAuth');

// Rutas para gestionar pedidos
router.get('/', pedidoController.getAllPedidos);
router.get('/usuario/:id', pedidoController.getPedidosByUserId); // Mueve esta línea arriba
router.get('/:pedidoId', pedidoController.getPedidoById);
router.post('/', pedidoController.createPedido);
router.put('/:pedidoId', pedidoController.updatePedido);
router.delete('/:pedidoId', pedidoController.deletePedidoById);

module.exports = router; 