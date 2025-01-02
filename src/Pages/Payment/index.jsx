import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "./PaymentForm";

const stripePromise = loadStripe(
  "pk_test_51QckJyGIu8d3Ca1ceVNtde8g5tuXTXwetz9rFylpJvgPAyxdsaEouTvJm00aghzsfZnM9J2Pcx8w0Zm4YD3GPmVP00jumFIL8m"
); // Replace with your Publishable Key

const Payment = () => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm />
    </Elements>
  );
};

export default Payment;
