import { useEffect, useState } from "react";
import RouteTitle from "../../components/RouteTitle";
import useCarts from "../../hooks/useCarts";
import useSingleUserDetail from "../../hooks/useSingleUserDetail";
import Payment from "../Payment/Payment";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const [discount, setDiscount] = useState(0);
  const { user } = useAuth();
  const [userinfo] = useSingleUserDetail();
  const [finalCalculation, setFinalCalculation] = useState(0);
  // const location = useLocation();
  // const discount = location.state.discount;
  console.log(userinfo);
  const [allcarts, refetch] = useCarts();
  console.log("allcarts ddhadka;sdjdlasd", allcarts);

  const [toggle, setToggle] = useState(1);
  useEffect(() => {
    if (allcarts && allcarts.length > 0) {
      const finalCalculation = allcarts.reduce(
        (acc, item) => acc + (item.totalprice || item.price),
        0
      );

      if (finalCalculation > 300) {
        setDiscount(10);
        const minusPercentage = (finalCalculation * 10) / 100;
        const value = finalCalculation - minusPercentage;
        setFinalCalculation(value);
      } else {
        if (finalCalculation < 300) {
          setFinalCalculation(finalCalculation);
          setDiscount(0);
        }
      }
      // if we do not use this below  else then totalprice will be show as >300 , because we just give condition if >300 but not other conditions like if card will empty what to show
    } else {
      setFinalCalculation(0); // Set to 0 if the cart is empty
      setDiscount(0); // Reset discount if cart is empty
    }
  }, [allcarts]);
  const handleTab = (id) => {
    setToggle(id);
  };
  const handleManualOrderPlace = () => {
    setPaymentSuccess(false);
    if (user && user?.email) {
      const payment = {
        eventDetails: allcarts,
        paymentMethod: "pay_at_venue",
        transactionId: null,
        eventIds: allcarts.map((cart) => cart.eventId),
        cartIds: allcarts.map((cart) => cart._id),
        email: user?.email,
        userName: user?.displayName,
        totalPrice: finalCalculation,
        orderStatus: "Pending",
        paymentStatus: "Unpaid",
        date: new Date(),
        quantity: allcarts.reduce((acc, cart) => acc + cart.quantity, 0),
      };
      console.log("payment", payment);
      axiosSecure
        .post(`/payments`, payment)
        .then((res) => {
          console.log(res.data);
          if (res.data.insertedId) {
            setPaymentSuccess(true);
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Thank you for your order confirmation!!",
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
  };
  return (
    <div className="mx-auto bg-[#0a1316]  ">
      <RouteTitle
        routetitle={"Checkout"}
        routesubtitle={"Complete your bookings "}></RouteTitle>
      <div className="w-[97%] mx-auto pb-12 grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="card bg-[#0f1c1c]  p-6  w-full border border-[#4c4f4e] shrink-0 shadow-2xl">
          <h2 className="text-2xl border-l-4 pl-3 pb-2 border-l-[#b58753] font-semibold text-white mb-1">
            Contact Information
          </h2>
          <p className="text-lg mb-3  text-white">
            Verify your contact details for the tickets
          </p>
          <form className="form">
            <div className="form-group">
              <label className="text-gray-300 " htmlFor="name">
                Your Name
              </label>
              <input
                defaultValue={userinfo.name}
                readOnly
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="text-white w-full p-3 mt-2 rounded-md border-[#4c4f4e]"
                required
              />
            </div>
            <div className="form-group my-2">
              <label className="text-gray-300 " htmlFor="email">
                Email
              </label>
              <input
                defaultValue={userinfo.email}
                readOnly
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="text-white w-full p-3  mt-2 rounded-md border-[#4c4f4e]"
                required
              />
            </div>
            <div className="form-group my-2">
              <label className="text-gray-300 " htmlFor="phone">
                Phone number
              </label>
              <input
                defaultValue={userinfo.phone}
                readOnly
                type="text"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                className="text-white w-full p-3  mt-2 rounded-md border-[#4c4f4e]"
                required
              />
            </div>
          </form>
        </div>

        <div className="card bg-[#0f1c1c]  p-6  w-full border border-[#4c4f4e] shrink-0 shadow-2xl">
          <h2 className="border-l-4 pl-3 pb-2   border-l-[#b58753] text-2xl font-semibold text-white mb-1">
            Payment Method
          </h2>
          <p className="text-lg mb-3  text-white">Choose how you want to pay</p>

          <div>
            <ul className="text-white flex flex-row text-xl gap-4">
              <li onClick={() => handleTab(1)}>
                <input
                  className={` ${
                    toggle === 1 ? "text-cyan-600" : "text-white-200"
                  } text-white`}
                  type="radio"
                  name="paymentMethod"
                  id=""
                />
                Pay At Venue
              </li>
              <li onClick={() => handleTab(2)}>
                <input
                  className={` ${
                    toggle === 2 ? "text-cyan-600" : "text-white-200"
                  } text-white`}
                  type="radio"
                  name="paymentMethod"
                  id=""
                />{" "}
                Pay By Stripe
              </li>
            </ul>

            {/*  PAYMENT AT VENUE */}
            <div className={toggle === 1 ? "block text-white" : "hidden"}>
              <div className="artist-card mt-8 bg-[#192f2f] border  border-[#b58753]   mb-4 px-4 mx-auto w-full red ">
                <div className="artist-card mt-8 bg-[#192f2f]  mb-4 p-4 mx-auto w-full red ">
                  <h2 className="text-[#44cfbf] text-lg">
                    Complete Your Order
                  </h2>
                  <p>Review your ticket details before confirming</p>
                  {allcarts.map((item) => (
                    <div
                      key={item._id}
                      className="flex justify-between items-center gap-3">
                      <div>
                        <h3 className="text-[#44cfbf] mt-8  text-base">
                          {item.name}
                        </h3>
                        <p className="tip text-[#b8c3b8] text-start mb-1">
                          Quantity - {item.quantity} tickets
                        </p>
                        <p className="tip text-[#b8c3b8] text-start mb-2">
                          Price per ticket: ${item.price}
                        </p>
                      </div>
                      <p className="font-semibold">
                        ${item.price * item.quantity}
                      </p>
                    </div>
                  ))}
                  <p className="font-semibold text-[#b8c3b8] my-2">
                    Getting discount :{" "}
                    <span className="text-yellow-400 "> {discount}%</span>
                  </p>
                  <hr className="h-[1px] w-full text-[#6a6d6a]" />
                  <div className="flex justify-between items-center">
                    <h2 className=" text-lg mt-2 text-[#44cfbf]">
                      Total Amount
                    </h2>
                    <p className="text-[#b58753] font-semibold text-lg">
                      $ {finalCalculation}
                    </p>
                  </div>
                  <div
                    className={`w-full grid mt-7 ${
                      allcarts.length === 0
                        ? "cursor-not-allowed bg-gray-700"
                        : ""
                    }`}>
                    <button
                      disabled={allcarts.length === 0}
                      onClick={handleManualOrderPlace}
                      className={`grid  justify-center items-center text-center ${
                        allcarts.length > 0
                          ? "button-style"
                          : "px-3 py-2 rounded-lg hover:scale-[98%] duration-500 transition-all hover:bg-gray-500 text-white font-semibold bg-teal-600 cursor-not-allowed"
                      }`}>
                      {allcarts.length > 0 ? "Place order" : " Order Placed"}
                    </button>
                  </div>
                  {paymentSuccess && (
                    <p className="text-green-600 my-2 font-semibold">
                      Your order has been placed successfully. Please pay at the
                      venue.!
                    </p>
                  )}
                </div>
              </div>
            </div>
            {/*  PAYMENT WITH STRIPE */}
            <div className={toggle === 2 ? "block text-white" : "hidden"}>
              <div className="artist-card mt-8 bg-[#192f2f] border  border-[#b58753] px-4  mb-4 mx-auto w-full red ">
                <div className="artist-card mt-8 bg-[#192f2f]  mb-4 p-4 mx-auto w-full red ">
                  <h2 className="text-[#44cfbf] text-lg">
                    Complete Your Order
                  </h2>
                  <p>Review your ticket details before confirming</p>
                  {allcarts.map((item) => (
                    <div
                      key={item._id}
                      className="flex justify-between items-center gap-3">
                      <div>
                        <h3 className="text-[#44cfbf] mt-8  text-base">
                          {item.name}
                        </h3>
                        <p className="tip text-[#b8c3b8] text-start mb-1">
                          Quantity - {item.quantity} tickets
                        </p>
                        <p className="tip text-[#b8c3b8] text-start mb-2">
                          Price per ticket: ${item.price}
                        </p>
                      </div>
                      <p className="font-semibold">
                        ${item.price * item.quantity}
                      </p>
                    </div>
                  ))}
                  <p className="font-semibold text-[#b8c3b8] my-2">
                    Getting discount :
                    <span className="text-yellow-400"> {discount}%</span>
                  </p>
                  <hr className="h-[1px] w-full text-[#6a6d6a]" />
                  <div className="flex justify-between items-center">
                    <h2 className=" text-lg mt-2 text-[#44cfbf]">
                      Total Amount
                    </h2>
                    <p className="text-[#b58753] font-semibold text-lg">
                      $ {finalCalculation}
                    </p>
                  </div>
                </div>

                <h2 className="text-[#44cfbf] px-4">Card Payment</h2>
                <p className="px-4">Enter your card details securely</p>

                {/* <hr className="h-[1px] my-5 w-full text-[#6a6d6a]" /> */}

                <Payment state={{ finalCalculation }}></Payment>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
