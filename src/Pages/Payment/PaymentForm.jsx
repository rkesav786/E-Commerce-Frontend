import React, { useEffect, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const [message, setMessage] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  // Fetch the client secret from the backend
  useEffect(() => {
    const fetchClientSecret = async () => {
      const response = await fetch(
        "http://localhost:5000/create-payment-intent",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ amount: 1000, currency: "usd" }), // Adjust amount and currency
        }
      );

      const { clientSecret } = await response.json();
      setClientSecret(clientSecret);
    };

    fetchClientSecret();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    if (!stripe || !elements) {
      setMessage("Stripe has not loaded properly!");
      return;
    }

    const { error, paymentIntent } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      }
    );

    if (error) {
      setMessage(error.message);
    } else if (paymentIntent && paymentIntent.status === "succeeded") {
      setMessage("Payment successful!");
    }

    setIsProcessing(false);
  };

  const cardStyle = {
    style: {
      base: {
        fontSize: "16px",
        color: "#495057",
        "::placeholder": {
          color: "#6c757d",
        },
      },
      invalid: {
        color: "#dc3545",
        iconColor: "#dc3545",
      },
    },
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow-lg p-4 w-100" style={{ maxWidth: "400px" }}>
        <h2 className="text-center mb-4">Complete Your Payment</h2>
        <form onSubmit={handleSubmit} className="d-grid gap-3">
          <div className="form-group">
            <CardElement className="form-control" options={cardStyle} />
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={!stripe || !elements || isProcessing}
          >
            {isProcessing ? "Processing..." : "Pay Now"}
          </button>
        </form>
        {message && (
          <p
            className={`mt-3 text-center ${
              message.includes("successful") ? "text-success" : "text-danger"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default PaymentForm;
