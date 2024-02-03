'use client'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import CheckoutForm from "../ui/carrito/FormStripe";

const stripePromise = loadStripe('pk_test_51NcD77DSEDOgSbikQNox1JpHuDaULlz3QiR50FFevOZiHeBLzClIdQ3xrrmZP4hjS0KLtLhu6t16WAsYv8Y85pPx00XdVTX6VA');

export default function App() {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    const fetchClientSecret = async () => {
      try {
        const response = await fetch("/api/checkout", {
        });

        if (!response.ok) {
          throw new Error("Failed to fetch client secret");
        }

        const data = await response.json();
        setClientSecret(data.clientSecret);
      } catch (error) {
        console.error("Error fetching client secret:", error);
      }
    };

    fetchClientSecret();
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="App">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}
