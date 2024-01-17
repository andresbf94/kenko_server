const router = require('express').Router(); 
const usuarioController = require('../../controllers/usuarios.controller');
const { checkToken } = require('../../middleware/userAuth');

// Rutas para gestionar usuarios
router.get('/', usuarioController.getAllUsuarios);
router.get('/:usuarioId', checkToken, usuarioController.getUsuarioById);
router.post('/register', usuarioController.registerUsuario); 
router.post('/login', usuarioController.loginUsuario);
router.put('/:usuarioId', checkToken, usuarioController.updateUsuario);
router.delete('/:usuarioId', checkToken, usuarioController.deleteUsuarioById);

module.exports = router;
