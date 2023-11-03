const router = require('express').Router();

const { checkToken } = require ('../utils/middlewares')

router.use('/productos', require('./api/productos')); 
router.use('/pedidos', require('./api/pedidos')); 
router.use('/usuarios', require('./api/usuarios')); 
router.use('/reservas', require('./api/reservas')); 

module.exports = router;