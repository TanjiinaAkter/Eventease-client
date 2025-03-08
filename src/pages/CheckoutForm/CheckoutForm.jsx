import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

const CheckoutForm = () => {
  const { user } = useAuth();
  const [transactionId, setTransactionId] = useState("");
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const axiosSecure = useAxiosSecure();
  const location = useLocation();
  const finalCalculation = location.state.finalCalculation;
  console.log(clientSecret, "transactionId", transactionId);

  useEffect(() => {
    if (finalCalculation > 0) {
      axiosSecure
        .post("/create-payment-intent", {
          price: finalCalculation,
        })
        .then((res) => {
          // console.log(res.data.clientSecret);
          if (res.data.clientSecret) {
            setClientSecret(res.data.clientSecret);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [finalCalculation, axiosSecure]);

  //1. BASIC WORK FROM GITHUB
  const stripe = useStripe();
  const elements = useElements();
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    // ekhane amra payment method create kortesi je ki type payment hobe, amra card payment kortesi so type card
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("payment-error", error);
      setError(error.message);
    } else {
      console.log("payment method", paymentMethod);
      setError("");
    }

    // NOW JUST CONFIRM PAYMENT
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "Anonymous",
            email: user?.email || "Anonymous",
          },
        },
      });
    if (confirmError) {
      console.log("error", confirmError);
    } else {
      console.log("payment-intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("transaction id", paymentIntent.id);
        setTransactionId(paymentIntent.id);
      }
    }
  };
  return (
    <div className="w-full border rounded-md bg-white border-amber-50 p-6">
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "efef00",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div className=" w-full grid mt-7">
          <button
            className="px-3 py-2 rounded-lg hover:scale-[98%] duration-500 transition-all hover:bg-gray-500 text-white font-semibold bg-teal-600 "
            disabled={!stripe || !elements}>
            Pay
          </button>
          {error && <p className="text-red-600 font-semibold">**{error}!</p>}
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
