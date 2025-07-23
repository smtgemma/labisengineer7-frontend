import React, { useState } from "react";

import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);
    if (!cardElement) return;

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      setError(error.message || "Error occurred");
    } else {
      console.log("Payment Method Created:", paymentMethod);
      setSuccess("Payment method saved");
      // send `paymentMethod.id` to your backend for saving
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Save Card
      </button>
      {error && <p>{error}</p>}
      {success && <p>{success}</p>}
    </form>
  );
}

export default PaymentForm;
