import { useState } from "react";
import RouteTitle from "../../components/RouteTitle";
import useCarts from "../../hooks/useCarts";
import { useLocation } from "react-router-dom";
import useSingleUserDetail from "../../hooks/useSingleUserDetail";
import Payment from "../Payment/Payment";

const CheckoutPage = () => {
  const [userinfo] = useSingleUserDetail();
  const location = useLocation();
  const finalCalculation = location.state.finalCalculation;
  const discount = location.state.discount;
  console.log(userinfo);
  const [allcarts] = useCarts();
  const [toggle, setToggle] = useState(1);
  const handleTab = (id) => {
    setToggle(id);
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
                  <div className="flex my-8 justify-center items-center ">
                    <button className="button-style">Place order</button>
                  </div>
                </div>
              </div>
            </div>
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
