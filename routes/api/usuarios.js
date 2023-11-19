const router = require('express').Router();
const usuarioController = require('../../controllers/usuarios.controller');
const { userValidationRules, validate } = require('../../middleware/validationsUser');
const { checkToken } = require('../../middleware/userAuth');

// Rutas para gestionar usuarios
router.get('/', usuarioController.getAllUsuarios);
router.get('/:usuarioId', checkToken, usuarioController.getUsuarioById);
router.post('/register', userValidationRules(), validate, usuarioController.registerUsuario); //Incluye validación de los campos para crear un usuario
router.post('/login', usuarioController.loginUsuario);
router.put('/:usuarioId', checkToken, usuarioController.updateUsuario);
router.delete('/:usuarioId', usuarioController.deleteUsuarioById);

module.exports = router;
