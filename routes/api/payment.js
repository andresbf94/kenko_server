const router = require('express').Router();
const paymentController = require('./../../controllers/payment.controller');


router.post('/', paymentController.createSession);

module.exports = router;