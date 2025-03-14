import { IoCalendarOutline } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { MdCancel } from "react-icons/md";
const UserOrderDetail = () => {
  const location = useLocation();
  const payment = location.state.payment;
  const {
    _id,
    transactionId,
    paymentMethod,
    totalPrice,
    date,
    orderStatus,
    paymentStatus,
    eventIds,
    quantity,
  } = payment;

  console.log(payment);
  const axiosPublic = useAxiosPublic();
  const { data: eventsPublic = [] } = useQuery({
    queryKey: ["eventsPublic"],
    queryFn: async () => {
      const res = await axiosPublic.get("/events");
      console.log(res.data);
      return res.data;
    },
  });

  const [storeEvent, setStoreEvent] = useState([]);
  useEffect(() => {
    if (eventsPublic.length > 0) {
      const matched = eventsPublic.filter((event) =>
        eventIds.includes(event._id)
      );
      setStoreEvent(matched);
    }
  }, [eventIds, eventsPublic]);
  console.log(eventsPublic);
  const formateDate = (date) => {
    console.log(date);
    const datenew = new Date(date);
    const day = String(datenew.getDate()).padStart(2, "0");
    const month = String(datenew.getMonth() + 1).padStart(2, "0");
    const year = datenew.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="mx-auto w-full  md:w-[70%] my-12  bg-[#0a1316] min-h-screen ">
      <div className="card p-8 space-y-6 text-black bg-[#192f2f]  card-lg shadow-sm">
        <div className=" flex flex-wrap justify-between gap-4">
          <div>
            <h1 className="md:text-2xl capitalize font-bold text-teal-500">
              Order #{_id}
            </h1>
            <div className="flex justify-normal items-center text-gray-400 text-[1.1rem] my-2 font-semibold gap-2">
              <IoCalendarOutline className="text-teal-500"></IoCalendarOutline>
              <p className="text-white">{formateDate(date)}</p>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <span className="px-6  py-[1px] w-full font-semibold bg-[#ffc107] text-[#000000] rounded-md">
              {orderStatus}
            </span>
            <span className="px-6 py-[1px] font-semibold bg-[#ffc107] text-[#000000] rounded-md">
              Payment: {paymentStatus}
            </span>
          </div>
        </div>
        <hr />
        <div className="my-5 grid grid-cols-1 text-white  font-semibold lg:grid-cols-3 gap-4">
          <div className="bg-[#2c3f49] hover:bg-teal-600 transition-all ease-in-out duration-700  rounded-sm p-4 text-white">
            <h2> Total Amount after discount</h2>
            <h1 className="text-[1.4rem] ">{totalPrice}</h1>
          </div>
          <div className="bg-[#2c3f49] hover:bg-teal-600  transition-all ease-in-out duration-700 rounded-sm p-4">
            <h2>Ticket Quantity</h2>
            <h1 className="text-[1.4rem]  ">{quantity}</h1>
          </div>
          <div className="bg-[#2c3f49] hover:bg-teal-500 transition-all ease-in-out duration-700 rounded-sm p-4">
            <h2>Payment Method</h2>
            <h1 className="text-[1.4rem] ">{paymentMethod}</h1>
          </div>
        </div>
        <div className="flex w-full ">
          <div className="bg-[#2c3f49] text-white font-semibold w-full hover:bg-teal-500 transition-all ease-in-out duration-700 rounded-sm p-4">
            <h2>Transaction ID -</h2>
            <h1 className="text-[.9rem] md:text-[1.4rem] ">
              {transactionId ? transactionId : "null"}
            </h1>
          </div>
        </div>
        <div>
          <div>
            <div className="flex justify-normal items-center text-gray-400 text-[1.1rem] my-2 font-semibold gap-2">
              <IoCalendarOutline className="text-teal-500"></IoCalendarOutline>
              <p className="text-white">Order Items</p>
            </div>
          </div>
          <div className="flex flex-col flex-wrap space-y-3 ">
            {storeEvent.map((event) => (
              <div className="border border-gray-700 p-3 " key={event._id}>
                <div className=" card-box justify-center flex flex-wrap md:flex-nowrap p-5 bg-[#1b303087] transition-all duration-300 gap-3 lg:justify-between items-center">
                  <div className="flex flex-wrap space-y-4 justify-between gap-3 items-center">
                    <div className="pt-2 flex sm:justify-center sm:items-center md:justify-start md:items-center sm:w-full mx-auto">
                      <img
                        className="object-cover h-[4rem] w-[4rem] rounded-full border-4  border-white"
                        src={event.eventimage}
                        alt=""
                      />
                    </div>
                    <div className=" text-center md:text-start">
                      <h2 className=" text-xl w-full text-white">
                        {event.eventtitle}
                      </h2>
                      <p className=" text-xl text-white">
                        {event.eventstartdate}
                      </p>
                    </div>
                  </div>
                  <div className="flex  gap-3 justify-center flex-col items-center">
                    <div className="flex row flex-wrap justify-center items-center lg:justify-normal lg:items-start lg:flex-nowrap gap-3">
                      <div className="badge badge-md font-semibold badge-ghost">
                        ${event.ticketprice}
                      </div>
                      <div className="badge sm:badge-lg md:badge-lg text-nowrap font-semibold text-white border-none bg-[#0BDA51]">
                        {event.category}
                      </div>
                    </div>
                    <div className="badge w-full cursor-pointer hover:bg-gray-600 py-4  text-nowrap font-semibold text-white border-none bg-[#da490b]">
                      Cancel order
                    </div>
                  </div>
                </div>
                <div className=" flex flex-row items-center gap-2 font-semibold text-yellow-400 border-none ">
                  {/* TO DO: order status hobe specific vendor er kora */}
                  <MdCancel className="text-red-600 text-xl" />
                  <p className="text-lg text-wrap">
                    Order status: deleted(your order has been deleted by vendor
                    : shehrin)
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserOrderDetail;
