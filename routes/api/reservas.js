const router = require('express').Router();
const reservaController = require('../../controllers/reservas.controller');

// Rutas para gestionar reservas
router.get('/', reservaController.getAllReservas);
router.get('/:reservaId', reservaController.getReservaById);
router.post('/', reservaController.createReserva);

module.exports = router;