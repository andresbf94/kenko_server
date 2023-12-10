const router = require('express').Router();
const paymentController = require('./../../controllers/payment.controller');

router.post('/', paymentController.createSession);
router.get('/sucess', (req, res) => res.send('sucess'))


module.exports = router;