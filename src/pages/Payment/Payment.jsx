import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { useLocation } from "react-router-dom";
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
  const location = useLocation();
  const finalCalculation = location.state.finalCalculation;

  return (
    <div className="flex my-8 justify-center items-center ">
      {/* <button className="button-style">Pay Now</button> */}
      <Elements stripe={stripePromise}>
        {/* amader checkout info dicchi jeno stripe amader payment information niye checkout er kaj korte pare */}
        <CheckoutForm state={{ finalCalculation }}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
