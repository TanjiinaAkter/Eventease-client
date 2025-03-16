import { useState } from "react";
import { FaMinusCircle } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import useCarts from "../../hooks/useCarts";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const SingleCartItem = ({ cart }) => {
  const { user } = useAuth();
  const [, refetch] = useCarts();
  const axiosSecure = useAxiosSecure();
  console.log(cart);
  const { name, photo, startdate, enddate, price, eventId, quantity } = cart;
  const [newprice, setNewPrice] = useState(() => price * quantity);
  // ====== quantity || 1 neyar karon only quantity dile NaN ashbe tai handle korte 1 ditesi
  const [newQuantity, setNewQuantity] = useState(quantity || 1);
  const addTo = () => {
    const newQuantityAdd = newQuantity + 1;
    setNewQuantity(newQuantityAdd);
    const updatedPrice = newQuantityAdd * price;
    setNewPrice(updatedPrice);
    return forSingleCartItemPatch(newQuantityAdd, updatedPrice, cart);
  };

  const minusTo = () => {
    // TO AVOID NEGETIVE VALUE
    if (newQuantity > 1) {
      const newQuantityMinus = newQuantity - 1;
      const updatedPrice = newQuantityMinus * price;
      setNewQuantity(newQuantityMinus);
      setNewPrice(updatedPrice);
      return forSingleCartItemPatch(newQuantityMinus, updatedPrice, cart);
    }
  };

  const forSingleCartItemPatch = (newQuantity, newprice, cart) => {
    console.log(newQuantity, newprice, cart.eventId);
    if (user && user?.email) {
      axiosSecure
        .patch(`/carts/single/${cart._id}`, {
          quantity: newQuantity,
          totalprice: newprice,
          eventId: eventId,
        
        })
        .then((res) => {
          console.log(res.data);
          refetch();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  const handleDelete = (cart) => {
    console.log(cart);

    if (user && user?.email) {
      Swal.fire({
        title: "Are you sure ,you want to remove this event from cart?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          axiosSecure
            .delete(`/carts/single/${cart._id}`)
            .then((res) => {
              console.log(res.data);
              if (res.data.deletedCount === 1) {
                refetch();
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success",
                });
              }
            })
            .catch((error) => {
              console.log(error);
            });
        }
      });
    }
  };
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
          <button
            onClick={minusTo}
            className="text-[#44cfbf] button-style text-lg">
            <FaMinusCircle />
          </button>
          <input
            className="w-16 px-2 py-1 text-white text-center rounded-md border border-gray-400"
            type="number"
            value={newQuantity || 1}
            min={1}
            readOnly
          />
          <button onClick={addTo} className="text-red-500 button-style text-lg">
            <FaCirclePlus />
          </button>
        </div>

        {/* Total Price */}
        <div className="flex items-center justify-center gap-4">
          <p className="text-sm md:text-base text-center font-semibold">
            ${newprice}
          </p>
          <span className="rounded-full hover:bg-white duration-500 flex justify-center items-center hover:scale-105 w-10 h-10">
            <MdDelete
              onClick={() => handleDelete(cart)}
              className="text-[26px] text-red-600"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default SingleCartItem;
