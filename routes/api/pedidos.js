const router = require('express').Router();
const pedidoController = require('../../controllers/pedidos.controller');
const { checkToken } = require('../../utils/middlewares');

// Rutas para gestionar pedidos
router.get('/', pedidoController.getAllPedidos);
router.get('/:pedidoId', pedidoController.getPedidoById);
router.post('/', pedidoController.createPedido);
router.put('/:pedidoId', checkToken,  pedidoController.updatePedido);
router.delete('/:pedidoId', pedidoController.deletePedidoById)

module.exports = router;