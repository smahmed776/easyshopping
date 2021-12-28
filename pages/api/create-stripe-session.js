require("dotenv").config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

async function CreateStripeSession(req, res) {
if(req.method === "POST"){
    const { items } = req.body;
  
    const redirectURL =
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:3000'
        : 'https://easyshopping.vercel.app';
  
    const transformedItem = await items.map(item => 
    ({  price_data: {
        currency: 'usd',
        product_data: {
          images: [item.image],
          name: item.name,
        },
        unit_amount: Math.round(item.price * 100),
      },
      description: item.description,
      quantity: item.quantity,
    }));
  
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [...transformedItem],
      mode: 'payment',
      success_url: redirectURL + '?status=success',
      cancel_url: redirectURL + '?status=cancel',
      metadata: {
        images: items[0].image
      },
    });
  
    res.json({ id: session.id });
}
}

export default CreateStripeSession;