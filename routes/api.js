const router = require('express').Router();
const mailController = require('../controllers/mail.controller')
const { checkToken } = require ('../middleware/userAuth')
const Stripe = require ('stripe');
const express = require('express');
const stripe = new Stripe ('sk_test_51OK3b8JXBoxz3xyVMtot2l410OkNjKkfbzdMvxwSyNryUEDAhto2R1BOlUKwG1gnxQcUq1cE73h8wwpfQMwbHy8j00b5OTeXQl')
const endpointSecret = "whsec_iS5ivM1F2sY4YIYhdr6riBIY8Hk7HJ1G";


router.use('/productos', require('./api/productos')); 
router.use('/pedidos', require('./api/pedidos')); 
router.use('/usuarios', require('./api/usuarios')); 
router.use('/reservas', require('./api/reservas')); 
router.use('/pagos', require('./api/payment'));
router.use('/webhook', express.raw({type: 'application/json'}), async (req, res) => {
    const sig = req.headers['stripe-signature'];
  
    let event;
  
    try {
      event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
    } catch (err) {
      response.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }
  
    // Handle the event
    switch (event.type) {
      case 'payment_intent.succeeded':
        const paymentIntentSucceeded = event.data.object;
        // Then define and call a function to handle the event payment_intent.succeeded
        break;
      // ... handle other event types
      default:
        console.log(`Unhandled event type ${event.type}`);
    }
  
    // Return a 200 response to acknowledge receipt of the event
    res.send();
  });
  

router.post('/mails',  mailController.sendEmail) // Como es solo una ruta la pongo en este archivo directamente

module.exports = router;