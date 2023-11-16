const router = require('express').Router();
const mailController = require('../controllers/mail.controller')
const { checkToken } = require ('../utils/middlewares')

router.use('/productos', require('./api/productos')); 
router.use('/pedidos', require('./api/pedidos')); 
router.use('/usuarios', require('./api/usuarios')); 
router.use('/reservas', require('./api/reservas')); 

router.post('/mails',  mailController.sendEmail) // Como es solo una ruta la pongo en este archivo directamente

module.exports = router;