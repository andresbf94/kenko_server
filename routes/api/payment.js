const express = require('express');
const router = require('express').Router();
const paymentController = require('./../../controllers/payment.controller');

router.post('/', paymentController.createSession);
router.post('/webhook', express.raw({ type: 'application/json' }), paymentController.verifyPayment);


module.exports = router;