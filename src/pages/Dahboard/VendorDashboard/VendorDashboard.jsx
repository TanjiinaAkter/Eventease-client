import { FaCalendar, FaDollarSign } from "react-icons/fa";
import { MdOutlinePendingActions, MdShoppingBag } from "react-icons/md";
import usePaymentByRole from "../../../hooks/usePaymentByRole";
import { useEffect, useState } from "react";

const VendorDashboard = () => {
  const [paymentDetailsByRole] = usePaymentByRole();
  console.log("vendors events", paymentDetailsByRole);
  const [revenue, setRevenue] = useState(0);
  const [topCount, setTopCount] = useState(0);
  const [totalEvents, setTotalEvents] = useState(0);
  console.log("vendor er payments", paymentDetailsByRole.data);
  const [pendingOrder, setPendingOrder] = useState(0);
  console.log(pendingOrder);
  const [topPerformance, setTopPerformance] = useState([]);
  console.log(topPerformance);
  // REVENUE CALCULATION
  useEffect(() => {
    // TOTAL ORDER CALCULATION
    if (paymentDetailsByRole.data && paymentDetailsByRole.data.length > 0) {
      const events = paymentDetailsByRole.data
        .flatMap((payment) => payment.eventDetails || []) // Flatten the eventDetails arrays from all payments
        .filter((event) => event.eventId).length; // Only keep events that have an eventId // Get the count of those events

      console.log("events", events); // This will give you the total count of eventIds
      setTotalEvents(events);
    }
    // REVENUE CALCULATION
    if (paymentDetailsByRole.data && paymentDetailsByRole.data.length > 0) {
      const totalRevenue = paymentDetailsByRole?.data
        ?.reduce((total, payment) => {
          const eventRevenue = payment.eventDetails?.reduce(
            (acc, event) =>
              acc +
              event.price * event.quantity -
              (event.price * event.quantity * 10) / 100,
            0
          );
          return total + eventRevenue;
        }, 0)
        .toFixed(2);

      setRevenue(totalRevenue);
    }
    // PENDING  CALCULATION
    if (paymentDetailsByRole?.data && paymentDetailsByRole?.data.length > 0) {
      const pendingOrders = paymentDetailsByRole?.data.flatMap((payment) => {
        return payment.eventDetails?.filter(
          (event) => event.orderStatus === "Pending"
        );
      });

      setPendingOrder(pendingOrders.length);
    }
    // ACTIVE EVENTS CALCULATION
    if (paymentDetailsByRole?.data && paymentDetailsByRole?.data.length > 0) {
      const eventCount = {};
      paymentDetailsByRole?.data?.forEach((payment) => {
        payment.eventDetails.forEach((eve) => {
          eventCount[eve.eventId] = (eventCount[eve.eventId] || 0) + 1;
        });
      });
      const maxCount = Math.max(...Object.values(eventCount));
      const findMaxEventMatch = Object.values(eventCount).filter(
        (count) => count === maxCount
      ).length;
      setTopCount(findMaxEventMatch);
      const matchedEvents = Object.entries(eventCount).map(
        ([eventId, count]) => {
          const newArrayCreate = new Map();
          paymentDetailsByRole?.data.map((payment) => {
            payment.eventDetails.filter((event) => {
              if (event.eventId === eventId) {
                newArrayCreate.set(event.eventId, event);
              }
            });
          });
          return { eventId, count, eventDetails: [...newArrayCreate.values()] };
        }
      );

      setTopPerformance(matchedEvents);
    }
  }, [paymentDetailsByRole.data]);
  console.log(paymentDetailsByRole);
  return (
    <div className="mx-auto w-full p-4 bg-[#0a1316] min-h-screen h-full">
      <div className=" mx-auto mb-5 text-center md:text-start">
        <h2 className="text-[#44cfbf] text-xl">Vendor Dashboard</h2>
        <p className="text-[#b58753]">View and manage your events</p>
      </div>
      {/* EITA HOBE CHART  DIV */}
      <div className="mt-12 mb-4 border border-[#4b4d4c] flex flex-col flex-wrap  mx-auto  gap-4 p-5 rounded-md bg-[#0f1c1c]">
        <h2 className="text-xl text-white">BAR CHART HOBE</h2>
        {/* ==============  card-box =========== */}
      </div>
      {/* SECOND DIV */}

      <div className=" flex flex-wrap border border-[#4b4d4c]  mx-auto w-full justify-center md:justify-around gap-4 p-7 rounded-md bg-[#0f1c1c]">
        <div className="flex justify-center md:justify-between items-start gap-3 pb-3 text-center w-full md:w-auto sm:border-b-[1px] md:border-r-[1px] md:pr-12 md:border-r-[#6a6d6a]">
          <div>
            <h2 className="text-xl text-[#b58753]">Total Orders</h2>
            <h1 className="text-3xl text-[#44cfbf] font-semibold text-center mt-2">
              {totalEvents}
            </h1>
          </div>
          <div>
            <MdShoppingBag className="text-[#44cfbf] text-2xl" />
          </div>
        </div>
        <div className="flex justify-center md:justify-between items-start gap-3 pb-3 text-center w-full md:w-auto sm:border-b-[1px] md:border-r-[1px] md:pr-12 md:border-r-[#6a6d6a]">
          <div>
            <h2 className="text-xl text-[#b58753]">Revenue</h2>
            <h1 className="text-3xl text-[#44cfbf] font-semibold text-center mt-2">
              $ {revenue}
            </h1>
          </div>
          <div>
            <FaDollarSign className="text-[#44cfbf] text-2xl" />
          </div>
        </div>
        <div className="flex justify-center md:justify-between items-start gap-3 pb-3 text-center w-full md:w-auto sm:border-b-[1px] md:border-r-[1px] h-full md:pr-12 md:border-r-[#6a6d6a]">
          <div>
            <h2 className="text-xl text-[#b58753]">Pending Orders</h2>
            <h1 className="text-3xl text-[#44cfbf] font-semibold text-center mt-2">
              {pendingOrder}
            </h1>
            <p className="px-3 py-[1px] mt-4  bg-[#23ce2e] text-white flex  rounded-2xl">
              needs attention
            </p>
          </div>
          <div>
            <MdOutlinePendingActions className="text-[#44cfbf] text-2xl" />
          </div>
        </div>
        <div className="flex justify-center md:justify-between items-start gap-3 pb-3 text-center w-full md:w-auto sm:border-b-[1px] md:border-r-[1px] md:pr-12 md:border-r-[#6a6d6a]">
          <div>
            <h2 className="text-xl text-[#b58753]">Active Events</h2>
            <h1 className="text-3xl text-[#44cfbf] font-semibold text-center mt-2">
              {topCount}
            </h1>
            <p className="px-3 py-[1px] mt-4  text-white bg-[#63706388] flex  rounded-2xl">
              top performing
            </p>
          </div>
          <div>
            <FaCalendar className="text-[#44cfbf] text-2xl" />
          </div>
        </div>
      </div>
      {/* THIRD DIV */}
      <div className="mt-12 border border-[#4b4d4c] flex flex-col flex-wrap  mx-auto  gap-4 p-5 rounded-md bg-[#0f1c1c]">
        <h2 className="text-xl text-white">Recent Orders</h2>
        {/* ==============  card-box =========== */}

        {paymentDetailsByRole?.data?.slice(-3).map((payment) => {
          const lastOne = payment?.eventDetails?.slice(-1)[0];
          return (
            <div
              key={payment._id}
              className=" card-box flex p-5 bg-[#1b303087] transition-all hover:shadow-md shadow-[#383938] duration-300 gap-3 justify-between items-center">
              <div className="flex flex-wrap space-y-4 justify-between gap-3 items-center">
                <div className="pt-2">
                  <img
                    className="object-cover h-[4rem] w-[4rem] rounded-full border-4  border-white"
                    src={lastOne.photo}
                    alt=""
                  />
                </div>
                <div>
                  <h2 className="text-base text-white">{lastOne.name}</h2>
                  <p className="text-base text-white">{lastOne.startdate}</p>
                </div>
              </div>
              <div className="flex flex-c flex-wrap gap-3 justify-center items-center">
                <div className="badge badge-sm font-semibold badge-ghost">
                  $ {lastOne.price}
                </div>
                <div className="badge badge-sm font-semibold text-[#e3a20a] border-none bg-[#e4f360]">
                  pending
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* FOURTH DIV   */}

      <div className="mt-12 border border-[#4b4d4c]  mx-auto   p-5 rounded-md bg-[#0f1c1c]">
        <h2 className="text-xl mb-4 text-white">Top Performing Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
          {/* ==============  card-box =========== */}

          {topPerformance.map((top) =>
            top.eventDetails.map((event) => (
              <div
                key={event._id}
                className=" card-box flex p-5 bg-[#1b303087] transition-all hover:shadow-md shadow-[#383938] duration-300 gap-3 justify-between items-center">
                <div className="flex flex-col  flex-wrap flex-1 space-y-4 justify-between gap-3 items-start">
                  <div className="pt-2 ">
                    <img
                      className="object-cover h-[4rem] w-[4rem] rounded-full border-4  border-white"
                      src={event.photo}
                      alt=""
                    />
                  </div>
                  <div className=" ">
                    <h2 className="text-base text-white">{event.name}</h2>
                    <p className="text-base text-white">Orders : {top.count}</p>
                  </div>
                </div>
                <div className="flex  gap-3 justify-center items-center">
                  <p className="text-white font-semibold ">$ {event.price}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default VendorDashboard;
