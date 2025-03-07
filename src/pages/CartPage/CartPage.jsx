import Header from "../Shared/Header/Header";
import emoji from "../../assets/Animation - 1738737330342.gif";
import { Link } from "react-router-dom";
import useCarts from "../../hooks/useCarts";
import SingleCartItem from "../singleCartItem/singleCartItem";
import { useEffect, useState } from "react";
const CartPage = () => {
  const [totalTicketQuantity, setTotalTicketQuantity] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  const [allcarts] = useCarts();
  const [discount, setDiscount] = useState(0);

  const [finalCalculation, setFinalCalculation] = useState();
  // SUBTOTAL AND DISCOUNT CALCULATION
  useEffect(() => {
    const getsum = allcarts.reduce((acc, item) => {
      return acc + (item.totalprice || item.price);
    }, 0);
    setSubtotal(getsum);
    if (getsum > 300) {
      setDiscount(10);
      const discount = (getsum * 10) / 100;
      const afterDiscount = getsum - discount;
      setFinalCalculation(parseFloat(afterDiscount).toFixed(1));
    } else {
      setDiscount(0);
      setFinalCalculation(getsum);
    }
    // total ticket count
    const ticketsCount = allcarts
      .map((cart) => cart.quantity)
      .reduce((acc, item) => acc + item, 0);
    setTotalTicketQuantity(ticketsCount);
  }, [allcarts]);

  return (
    <div className="bg-[#0a1316] pb-12">
      <Header></Header>
      <div className="text-white mx-auto w-[94%] px-6 pb-12 md:w-full">
        <h1 className="text-2xl font-semibold">Your Cart </h1>
        <p className="text-xl font-semibold mb-12">1 item in your bag</p>
        {allcarts.length >= 1 ? (
          <div className="grid z-10 relative grid-cols-1 md:grid-cols-4 gap-4 space-y-5">
            {/* FIRST CARD */}
            {allcarts.map((cart) => (
              <SingleCartItem key={cart._id} cart={cart}></SingleCartItem>
            ))}
            {/*SUBTOTAL */}
            <div className="md:col-span-1  lg:absolute lg:right-4 space-y-4  p-4 border-[#4c4f4e] border-2 lg:w-[20rem] rounded-xl col-span-full flex overflow-hidden z-50 flex-col">
              <p className="text-white pb-4">- ORDER SUMMERY -</p>
              <div className="flex justify-between items-center gap-2">
                <p className="text-lg ">Subtotal</p>

                <hr className="h-[1px] border-dashed text-[#b58753] mx-auto w-[40%] " />

                <p className="text-sm">$ {subtotal}</p>
              </div>
              <div className="flex justify-between items-center gap-2">
                <p className="text-lg ">Tax</p>

                <hr className="h-[1px] border-dashed text-[#b58753] mx-auto w-[40%] " />

                <p className="text-sm">$ 00</p>
              </div>
              <div className="flex justify-between items-center gap-2">
                <p className="text-lg ">Discount</p>

                <hr className="h-[1px] border-dashed text-[#b58753] mx-auto w-[40%] " />

                <p className="text-sm">{discount}%</p>
              </div>
              <hr className="w-full h-[1px] bg-gray-400 " />
              <div className="flex justify-between items-center gap-2">
                <p className="text-lg ">Total</p>

                <hr className="h-[1px] border-dashed text-[#b58753] mx-auto w-[40%] " />

                <p className="text-sm">{finalCalculation}</p>
              </div>
              <Link
                to="/dashboard/checkout"
                state={{
                  totalTicketQuantity,
                  finalCalculation,
                  discount,
                }}>
                <button className="my-4 button-style">
                  Proceed to checkout
                </button>
              </Link>
            </div>

            {/*Cart item na thakle */}
          </div>
        ) : (
          <div className="artist-card border border-[#3b3a39] flex justify-center items-center bg-[#0f1c1c] mb-4 p-4 mx-auto  w-[60%]  red ">
            <div className="text-[#44cfbf] space-y-6">
              <div className="flex justify-center items-center my-7 w-full">
                <img
                  className="w-[8rem] h-[8rem] object-cover  text-red-600"
                  src={emoji}
                  alt=""
                />
              </div>
              <h3 className="text-[#44cfbf] mt-8 text-center text-2xl">
                Your cart is empty
              </h3>
              <p className="tip text-[#6a6d6a] text-center mb-2">
                Looks like you have not added any events to your cart yet.
              </p>
              <div className="flex justify-center my-5 items-center">
                <Link to="/events">
                  <button className="button-style">Browse Events</button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
