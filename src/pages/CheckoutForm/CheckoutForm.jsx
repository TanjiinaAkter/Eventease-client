import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import useCarts from "../../hooks/useCarts";
import Swal from "sweetalert2";

const CheckoutForm = () => {
  const [finalCalculation, setFinalCalculation] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [allcarts, refetch] = useCarts();
  useEffect(() => {
    if (allcarts && allcarts.length > 0) {
      const finalCalculation = allcarts.reduce(
        (acc, item) => acc + (item.totalprice || item.price),
        0
      );
      console.log(finalCalculation);
      if (finalCalculation > 300) {
        setDiscount(10);
        const minusPercentage = (finalCalculation * 10) / 100;
        const value = finalCalculation - minusPercentage;
        console.log("value after discount", value);
        setFinalCalculation(value);
      } else {
        setFinalCalculation(finalCalculation);
        setDiscount(0);
      }
    } else {
      setFinalCalculation(finalCalculation);
      setDiscount(0);
    }
  }, [allcarts, discount, finalCalculation]);
  const navigate = useNavigate();

  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const { user } = useAuth();
  const [transactionId, setTransactionId] = useState("");
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const axiosSecure = useAxiosSecure();
  // const location = useLocation();
  // const finalCalculation = location.state.finalCalculation;

  // console.log(
  //   clientSecret,
  //   "transactionId",
  //   transactionId,
  //   "allcarts",
  //   allcarts
  // );

  useEffect(() => {
    if (finalCalculation > 0) {
      axiosSecure
        .post("/create-payment-intent", {
          price: finalCalculation,
        })
        .then((res) => {
          console.log("clientSecret", res.data.clientSecret);
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
    setPaymentSuccess("");
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

        // NOW SAVE PAYMENT IN THE DATABASE
        const payment = {
          eventDetails: allcarts,
          paymentMethod: "stripe",
          transactionId: paymentIntent.id,
          eventIds: allcarts.map((cart) => cart.eventId),
          cartIds: allcarts.map((cart) => cart._id),
          email: user?.email,
          userName: user?.displayName,
          totalPrice: finalCalculation,
          orderStatus: "Confirmed",
          paymentStatus: "Paid",
          date: new Date(),
          quantity: allcarts.reduce((acc, cart) => acc + cart.quantity, 0),
        };
        console.log(payment, "ghgghhhh");
        axiosSecure
          .post("/payments", payment)
          .then((res) => {
            console.log(res.data);
            if (res.data.insertedId) {
              setPaymentSuccess(true);
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Thank you for your payment!!",
                showConfirmButton: false,
                timer: 1500,
              });

              axiosSecure
                .delete(`/carts/userdelete/${user?.email}`)
                .then((res) => {
                  if (res.data.deletedCount > 0) {
                    console.log(res.data);
                    refetch();
                    navigate("/dashboard/checkout");
                  }
                })
                .catch((error) => {
                  console.log(error);
                });
            }
          })
          .catch((error) => {
            console.log(error);
          });
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
            {allcarts.length < 1 ? "Paid" : " Pay"}
          </button>
          {error && <p className="text-red-600 font-semibold">**{error}!</p>}
          {paymentSuccess && (
            <p className="text-green-600 my-2 font-semibold">
              Your transaction id is {transactionId}!
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
