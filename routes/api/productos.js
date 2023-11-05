const router = require('express').Router();
const productoController = require('../../controllers/productos.controller');

// Rutas para gestionar productos
router.get('/', productoController.getAllProductos);
router.get('/:productoId', productoController.getProductoById);
router.post('/', productoController.createProducto);

module.exports = router;