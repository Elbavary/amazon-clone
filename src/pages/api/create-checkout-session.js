const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
  const { items, email } = req.body;

  const transformedItems = items.map(item => ({
    quantity: 1,
    price_data: {
      currency: 'gbp',
      unit_amount: item.price * 100,
      product_data: {
        description: item.description,
        name: item.title,
        images: [item.image],
      },
    },
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    shipping_options: [{ shipping_rate: 'shr_1M3QMqJQROm0tzoK5GwJ7z5O' }],
    shipping_address_collection: {
      allowed_countries: ['BG', 'US', 'CA'],
    },
    line_items: transformedItems,
    mode: 'payment',
    success_url: `${process.env.HOST}/success`,
    cancel_url: `${process.env.HOST}/checkout`,
    metadata: {
      email,
      images: JSON.stringify(items.map(item => item.image)),
    },
  });

  res.status(200).json({ id: session.id });
};
