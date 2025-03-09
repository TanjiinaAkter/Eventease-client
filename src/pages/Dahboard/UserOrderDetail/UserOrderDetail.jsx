import { IoCalendarOutline } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import useAxiosPublic from "../../../hooks/useAxiosPublic";
const UserOrderDetail = () => {
  const location = useLocation();
  const payment = location.state.payment;
  const {
    _id,
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
  console.log(storeEvent);
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
        <div className="my-5 grid grid-cols-1 text-white  font-semibold md:grid-cols-3 gap-4">
          <div className="bg-gray-500 hover:bg-teal-600 transition-all ease-in-out duration-700  rounded-sm p-4 text-white">
            <h2>Total Amount</h2>
            <h1 className="text-[1.4rem] ">{totalPrice}</h1>
          </div>
          <div className="bg-gray-500 hover:bg-teal-600  transition-all ease-in-out duration-700 rounded-sm p-4">
            <h2>Ticket Quantity</h2>
            <h1 className="text-[1.4rem]  ">{quantity}</h1>
          </div>
          <div className="bg-gray-500 hover:bg-teal-500 transition-all ease-in-out duration-700 rounded-sm p-4">
            <h2>Payment Method</h2>
            <h1 className="text-[1.4rem] ">{paymentMethod}</h1>
          </div>
        </div>
        <div>
          <div>
            <div className="flex justify-normal items-center text-gray-400 text-[1.1rem] my-2 font-semibold gap-2">
              <IoCalendarOutline className="text-teal-500"></IoCalendarOutline>
              <p className="text-white">Order Items</p>
            </div>
          </div>
          <div className="flex flex-col flex-wrap space-y-3">
            {storeEvent.map((event) => (
              <div
                key={event._id}
                className=" card-box flex flex-wrap md:flex-nowrap p-5 bg-[#1b303087] transition-all hover:shadow-lg shadow-[#383938] duration-300 gap-3 justify-between items-center">
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
                <div className="flex flex-wrap md:flex-nowrap gap-3 justify-center items-center">
                  <div className="badge badge-md font-semibold badge-ghost">
                    ${event.ticketprice}
                  </div>
                  <div className="badge sm:badge-lg md:badge-lg text-nowrap font-semibold text-white border-none bg-[#0BDA51]">
                    {event.category}
                  </div>
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
