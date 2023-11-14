const router = require('express').Router();
const usuarioController = require('../../controllers/usuarios.controller');

// Rutas para gestionar usuarios
router.get('/', usuarioController.getAllUsuarios);
router.get('/:usuarioId', usuarioController.getUsuarioById);
router.post('/register', usuarioController.registerUsuario);
router.post('/login', usuarioController.loginUsuario);
router.put('/:usuarioId', usuarioController.updateUsuario);
router.delete('/:usuarioId', usuarioController.deleteUsuarioById);

module.exports = router;
