import { NextApiResponse } from 'next';
import { NextApiRequest } from 'next';
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe('sk_test_51NcD77DSEDOgSbikFL4ugZVp5f4IuiSI7Oy5OcdyRUtfKotxSxGJ11V6FNZnSJEtm2UhTa2ek8a3gcW10zRscwdG004rmMwfe8', {
});

const calculateOrderAmount = (items: any[]) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1400;
};

export default async function handlePost(req: NextApiRequest, res: NextApiResponse) {
  console.log('QUERPAPSDASDJASDSJ');
  if (req.method !== 'POST') {
    return NextResponse.json({ error: 'Method Not Allowed2' });
  }

  const { items } = req.body;

  try {
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(items),
      currency: 'eur',
      automatic_payment_methods: {
        enabled: true,
      },
    });

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error('Error creating PaymentIntent:', error);
    return NextResponse.json({ error: 'Internal Server Error' });
  }
}