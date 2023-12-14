const Stripe = require ('stripe');
const stripe = new Stripe ('sk_test_51OK3b8JXBoxz3xyVMtot2l410OkNjKkfbzdMvxwSyNryUEDAhto2R1BOlUKwG1gnxQcUq1cE73h8wwpfQMwbHy8j00b5OTeXQl')

exports.createSession = async (req, res) => {
    try {
        const { totalAmount } = req.body; // Suponiendo que envías el monto total desde el cliente

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'eur', // Cambia a tu moneda local si es diferente
                        product_data: {
                            name: 'Importe total del pedido', // Cambia al nombre de tu producto
                        },
                        unit_amount: totalAmount * 100, // Convierte a euros, ya que la cifra tiene en cuenta los centimos
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