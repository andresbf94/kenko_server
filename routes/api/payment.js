const router = require('express').Router();
const paymentController = require('./../../controllers/payment.controller');
const express = require('express');

router.post('/', paymentController.createSession);
router.post('/webhook', express.raw({ type: 'application/json' }), paymentController.verifyPayment);

module.exports = router;