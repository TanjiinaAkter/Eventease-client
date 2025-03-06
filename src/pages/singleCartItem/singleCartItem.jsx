import { FaMinusCircle } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";

const SingleCartItem = ({ cart }) => {
  const { name, photo, startdate, enddate, price, eventId } = cart;
  return (
    <div className="col-span-full md:col-span-3 p-4 hover:shadow-md transition-all duration-300 ease-in-out hover:shadow-[#44cfbf] border border-[#44cfbf] bg-[#101d1d] rounded-xl hover:drop-shadow-2xl ">
      {/* Table Header */}
      <div className="hidden md:flex justify-between items-center text-white border-b border-gray-600 pb-2">
        <h2 className="w-1/5 text-center">Ticket</h2>
        <h2 className="w-1/5 text-center">Location</h2>
        <h2 className="w-1/5 text-center">Price</h2>
        <h2 className="w-1/5 text-center">Quantity</h2>
        <h2 className="w-1/5 text-center">Total Price</h2>
      </div>

      {/* Cart Item */}
      <div className="flex flex-col md:flex-row justify-evenly items-center gap-4 py-4">
        {/* Image */}
        <img
          className="w-36 h-28 md:w-24 md:h-32 object-cover rounded-lg"
          src={photo}
          alt="Gaming Expo Ticket"
        />

        {/* Ticket Info */}
        <div className="flex flex-col justify-evenly text-center md:text-left">
          <div className="flex items-center text-center justify-center md:justify-start gap-2">
            <IoLocation className="text-lg text-[#44cfbf]" />
            <h2 className="text-sm md:text-base">{name}</h2>
          </div>
          <h3 className="text-sm md:text-base text-gray-300 text-center ">
            {startdate} - {enddate}
          </h3>
        </div>

        {/* Price */}
        <p className="text-sm  md:text-base text-center font-semibold">
          $ {price}
        </p>

        {/* Quantity Controls */}
        <div className="flex items-center gap-2">
          <button className="text-[#44cfbf] button-style text-lg">
          <FaMinusCircle />
          </button>
          <input
            className="w-12 px-2 py-1 text-white text-center rounded-md border border-gray-400"
            type="number"
            defaultValue={1}
            min={1}
          />
          <button className="text-red-500 button-style text-lg">
            <FaCirclePlus />
          </button>
        </div>

        {/* Total Price */}
        <p className="text-sm md:text-base text-center font-semibold">$ 2300</p>
      </div>
    </div>
  );
};

export default SingleCartItem;
