const router = require('express').Router();
const paymentController = require('./../../controllers/payment.controller');

router.post('/', paymentController.createSession);
router.post('/webhook', paymentController.verifyPayment);

module.exports = router;