const router = require('express').Router();
const productoController = require('../../controllers/productos.controller');
const { checkToken } = require('../../middleware/userAuth');

// Rutas para gestionar productos
router.get('/', productoController.getAllProductos);
router.get('/:productoId', productoController.getProductoById);
router.post('/', productoController.createProducto);
router.put('/:productoId', checkToken, productoController.updateProducto);
router.delete('/:productoId', productoController.deleteProductoById);

module.exports = router;