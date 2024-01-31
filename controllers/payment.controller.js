require('dotenv').config();

const Stripe = require('stripe');
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const endpointSecret = process.env.STRIPE_ENDPOINT_SECRET;

exports.createSession = async (req, res) => {
    try {
        const productos = req.body.productos;
        const items = productos.map(producto => ({
            
            price: producto.producto.precioStripe,
            quantity: producto.unidades,
        })) 

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: items,
            mode: 'payment',
            success_url: 'http://localhost:4200/pedido-realizado',
            cancel_url: 'https://kenko-front-zzkv.onrender.com',
        });
        return res.json(session.url);

    } catch (error) {
        console.error('Error creating checkout session:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.verifyPayment = (req, res) => {
    const signature = req.headers['stripe-signature'];
  
    let event = req.body;
  
    try {
        console.log(req.body)
      event = stripe.webhooks.constructEvent(req.body, signature, endpointSecret);
    } catch (err) {
      res.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }
  
    // Manejar el evento
    switch (event.type) {
      case 'payment_intent.succeeded':
        const paymentIntentSucceeded = event.data.object;
        console.log('pago realizado')
        break;
      // ... manejar otros tipos de eventos
      default:
        console.log(`Unhandled event type ${event.type}`);
    }
  
    // Devolver una respuesta 200 para confirmar la recepción del evento
    res.send();
  };