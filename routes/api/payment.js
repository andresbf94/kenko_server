const router = require('express').Router();
const paymentController = require('./../../controllers/payment.controller');
const express = require('express');

router.post('/', paymentController.createSession);
router.post('/webhook', (req, res) => paymentController.verifyPayment(req, res));

module.exports = router;