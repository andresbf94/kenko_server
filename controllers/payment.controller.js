const Stripe = require ('stripe');
const stripe = new Stripe ('sk_test_51OK3b8JXBoxz3xyVMtot2l410OkNjKkfbzdMvxwSyNryUEDAhto2R1BOlUKwG1gnxQcUq1cE73h8wwpfQMwbHy8j00b5OTeXQl')
const endpointSecret = "whsec_iS5ivM1F2sY4YIYhdr6riBIY8Hk7HJ1G";

exports.createSession = async (req, res) => {
    try {
        const { totalAmount } = req.body; 

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'eur', 
                        product_data: {
                            name: 'Importe total del pedido',
                        },
                        unit_amount: totalAmount * 100, 
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: 'https://kenko-front.onrender.com/',
            cancel_url: 'https://kenko-front.onrender.com/',
        });

        return res.json(session.url);
    } catch (error) {
        console.error('Error creating checkout session:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.verifyPayment = (req, res) => {
    const sig = req.headers['stripe-signature'];
  
    let event;
  
    try {
        console.log(req.body)
      event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
    } catch (err) {
      res.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }
  
    // Manejar el evento
    switch (event.type) {
      case 'payment_intent.succeeded':
        const paymentIntentSucceeded = event.data.object;
        console.log('pago realizado hostiaaaaa')
        break;
      // ... manejar otros tipos de eventos
      default:
        console.log(`Unhandled event type ${event.type}`);
    }
  
    // Devolver una respuesta 200 para confirmar la recepción del evento
    res.send();
  };