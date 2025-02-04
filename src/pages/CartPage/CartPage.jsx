import { FaMinusCircle } from "react-icons/fa";
import Header from "../Shared/Header/Header";
import { IoLocation } from "react-icons/io5";
import { FaCirclePlus } from "react-icons/fa6";
const CartPage = () => {
  return (
    <div className="bg-[#132323]">
      <Header></Header>
      <div className="text-white mx-auto w-[94%] px-6 md:w-full">
        <h1 className="text-2xl font-semibold">Your Cart </h1>
        <p className="text-xl font-semibold mb-12">1 item in your bag</p>
        <div className="grid relative grid-cols-1 md:grid-cols-4 gap-4">
          {/* FIRST CARD */}
          <div className="col-span-full md:col-span-3 p-4 hover:shadow-md transition-all duration-300 ease-in-out hover:shadow-[#44cfbf] border border-[#44cfbf] bg-black rounded-xl hover:drop-shadow-2xl ">
            {/* Table Header */}
            <div className="hidden md:flex justify-between items-center text-white border-b border-gray-600 pb-2">
              <h2 className="w-1/5 text-center">Ticket</h2>
              <h2 className="w-1/5 text-center">Location</h2>
              <h2 className="w-1/5 text-center">Price</h2>
              <h2 className="w-1/5 text-center">Quantity</h2>
              <h2 className="w-1/5 text-center">Total Price</h2>
            </div>

            {/* Cart Item */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-4">
              {/* Image */}
              <img
                className="w-36 h-28 md:w-24 md:h-32 object-cover rounded-lg"
                src="https://i.ibb.co/4RNsn51T/chuttersnap-a-En-H4h-J-Mrs-unsplash.jpg"
                alt="Gaming Expo Ticket"
              />

              {/* Ticket Info */}
              <div className="flex flex-col justify-evenly text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <IoLocation className="text-lg text-[#44cfbf]" />
                  <h2 className="text-sm md:text-base">
                    Gaming Expo Unlimited 2024
                  </h2>
                </div>
                <h3 className="text-sm md:text-base text-gray-300">12/02/25</h3>
              </div>

              {/* Price */}
              <p className="text-sm md:text-base text-center font-semibold">
                $ 300
              </p>

              {/* Quantity Controls */}
              <div className="flex items-center gap-2">
                <button className="text-[#44cfbf] text-lg">
                  <FaCirclePlus />
                </button>
                <input
                  className="w-12 px-2 py-1 text-white text-center rounded-md border border-gray-400"
                  type="number"
                  defaultValue={1}
                  min={1}
                />
                <button className="text-red-500 text-lg">
                  <FaMinusCircle />
                </button>
              </div>

              {/* Total Price */}
              <p className="text-sm md:text-base text-center font-semibold">
                $ 2300
              </p>
            </div>
          </div>
          {/*SUBTOTAL */}
          <div className="md:col-span-1 space-y-4  p-4 border-[#4c4f4e] border-2 rounded-xl col-span-full flex  flex-col">
            <p className="text-white pb-4">- ORDER SUMMERY -</p>
            <div className="flex justify-between items-center gap-2">
              <p className="text-lg ">Subtotal</p>

              <hr className="h-[1px] border-dashed text-[#b58753] mx-auto w-[40%] " />

              <p className="text-sm">$ 4300</p>
            </div>
            <div className="flex justify-between items-center gap-2">
              <p className="text-lg ">Tax</p>

              <hr className="h-[1px] border-dashed text-[#b58753] mx-auto w-[40%] " />

              <p className="text-sm">$ 00</p>
            </div>
            <div className="flex justify-between items-center gap-2">
              <p className="text-lg ">Discount</p>

              <hr className="h-[1px] border-dashed text-[#b58753] mx-auto w-[40%] " />

              <p className="text-sm">43%</p>
            </div>
            <hr className="w-full h-[1px] bg-gray-400 " />
            <div className="flex justify-between items-center gap-2">
              <p className="text-lg ">Total</p>

              <hr className="h-[1px] border-dashed text-[#b58753] mx-auto w-[40%] " />

              <p className="text-sm">45999</p>
            </div>
            <button className="my-4">Proceed to checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
