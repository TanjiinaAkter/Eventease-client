import { FaCalendar, FaDollarSign } from "react-icons/fa";
import { MdOutlinePendingActions, MdShoppingBag } from "react-icons/md";
// import useEventRoleBased from "../../../hooks/useEventRoleBased";
import { useEffect, useState } from "react";
import usePaymentByRole from "../../../hooks/usePaymentByRole";

const AdminDashboard = () => {
  const [eventsCount, setEventsCount] = useState(0);
  const [matchedEvents, setMatchedEvents] = useState([]);
  // const [paymentByRole] = useEventRoleBased();
  const [paymentDetailsByRole] = usePaymentByRole();
  const [allpayments, setAllPayments] = useState([]);
  // console.log(paymentByRole, paymentDetailsByRole.data);
  const payments = paymentDetailsByRole.data || []; // Ensure it's an array
  console.log("payments", allpayments);
  const [revenue, setRevenue] = useState(0);
  console.log("revenue", revenue);
  // REVENUE CALCULATION
  useEffect(() => {
    if (paymentDetailsByRole.data && paymentDetailsByRole.data.length > 0) {
      // Filter payments that have eventDetails with eventId, mane eventDetails [] thakle seta bad dibo
      const paymentsWithEventId = paymentDetailsByRole.data.filter(
        (payment) => {
          return (
            payment.eventDetails &&
            payment.eventDetails.some((event) => event.eventId)
          );
        }
      );

      console.log(paymentsWithEventId); // This will log payments with eventDetails that have an eventId
      setAllPayments(paymentsWithEventId);
    }
  }, [paymentDetailsByRole]);
  useEffect(() => {
    if (allpayments && allpayments.length > 0) {
      // reduce niyechi karon map nile array return korto new kore, reduce same kaj kortese array na kore
      const totalRevenue = allpayments?.reduce((total, payment) => {
        if (payment.eventDetails && payment.eventDetails.length > 0) {
          return (
            total +
            payment.eventDetails.reduce((acc, event) => {
              console.log("Event Price:", event.price);
              console.log("Event Quantity:", event.quantity);
              return acc + (event.price * event.quantity || 0);
            }, 0)
          );
        }
        return total;
      }, 0);

      setRevenue(totalRevenue);
    }
  }, [allpayments]);
  useEffect(() => {
    const eventCount = {}; // ইভেন্টের সংখ্যা গোনার জন্য একটা অবজেক্ট নিচ্ছি... frequency count kori

    // 1. eventId গুনছি
    allpayments.forEach((payment) => {
      payment.eventDetails.forEach((eve) => {
        eventCount[eve.eventId] = (eventCount[eve.eventId] || 0) + 1;
      });
    });

    console.log("Step 1 - Event Count:", eventCount);
    /*
      ধরুন, allpayments-এর ডেটা এমন:
      allpayments = [
        { eventDetails: [{ eventId: "A" }, { eventId: "B" }] },
        { eventDetails: [{ eventId: "A" }, { eventId: "C" }] },
        { eventDetails: [{ eventId: "A" }, { eventId: "B" }] }
      ];
      
      তাহলে eventCount হবে:
      {
        A: 3,
        B: 2,
        C: 1
      }
    */

    // 2. সবচেয়ে বেশি কয়বার হয়েছে, তা বের করা
    const maxCount = Math.max(...Object.values(eventCount));
    console.log("Step 2 - Max Count:", maxCount);
    /*
      eventCount = { A: 3, B: 2, C: 1 }
      তাহলে maxCount = 3
    */

    setEventsCount(
      Object.values(eventCount).filter((count) => count === maxCount).length
    );
    console.log(
      "Step 3 - Max Count Length:",
      Object.values(eventCount).filter((count) => count === maxCount).length
    );
    /*
      maxCount = 3
      যেসব ইভেন্ট 3 বার এসেছে তা বের করছি:
      Object.values(eventCount).filter(count => count === 3) => [3]
      তাহলে সেটের মান হবে 1 (কারণ A একাই 3 বার এসেছে)
    */

    // 3. eventId + count + eventDetails নিচ্ছি
    const matchedEvents = Object.entries(eventCount).map(
      ([eventId, count]) => ({
        eventId,
        count,
        details: allpayments.flatMap((payment) =>
          payment.eventDetails.filter((eve) => eve.eventId === eventId)
        ),
      })
    );

    console.log("Step 4 - Matched Events:", matchedEvents);
    /*
      Output হবে:
      [
        { eventId: "A", count: 3, details: [{ eventId: "A" }, { eventId: "A" }, { eventId: "A" }] },
        { eventId: "B", count: 2, details: [{ eventId: "B" }, { eventId: "B" }] },
        { eventId: "C", count: 1, details: [{ eventId: "C" }] }
      ]
    */

    setMatchedEvents(matchedEvents);
  }, [allpayments]);

  const pendingOrder = allpayments.filter(
    (payment) => payment.orderStatus === "Pending"
  );
  // console.log(pendingOrder.length);
  return (
    <div className="mx-auto w-full p-4 bg-[#0a1316] min-h-screen h-full">
      <div className=" mx-auto mb-5 text-center md:text-start">
        <h2 className="text-[#44cfbf] text-xl">Admin Dashboard</h2>
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
              {allpayments.length}
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
              {pendingOrder.length}
            </h1>
            <p className="px-3 py-[1px] mt-4  bg-[#23ce2e] text-[#ffffff] flex  rounded-2xl">
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
              {eventsCount}
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
        <div className="flex gap-3 flex-col">
          {payments.slice(-3).map((payment) => {
            const lasttwo = payment?.eventDetails?.slice(-1)[0];
            return (
              <div
                key={payment._id}
                className=" card-box flex p-5 bg-[#1b303087] transition-all hover:shadow-md shadow-[#383938] duration-300 gap-3 justify-between items-center">
                <div className="flex flex-wrap space-y-4 justify-between gap-3 items-center">
                  <div className="pt-2">
                    <img
                      className="object-cover h-[4rem] w-[4rem] rounded-full border-4  border-white"
                      src={lasttwo?.photo}
                      alt=""
                    />
                  </div>
                  <div>
                    <h2 className="text-base text-white">{lasttwo.name}</h2>
                    <p className="text-base text-white">{lasttwo.startdate}</p>
                  </div>
                </div>
                <div className="flex flex-c flex-wrap gap-3 justify-center items-center">
                  <div className="badge badge-sm font-semibold badge-ghost">
                    $ {lasttwo.price}
                  </div>
                  <div className="badge badge-md font-semibold text-[#fffff6] border-none bg-[#0bda51]">
                    {payment.paymentStatus}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* FOURTH DIV   */}
      <div className="mt-12 border border-[#4b4d4c] mx-auto p-5 rounded-md bg-[#0f1c1c]">
        <h2 className="text-xl mb-4 text-white">Top Performing Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {matchedEvents?.map((event) => (
            <div
              key={event.eventId}
              className="card-box flex p-5 bg-[#1b303087] transition-all hover:shadow-md shadow-[#383938] duration-300 gap-3 justify-between items-center">
              <div className="flex flex-wrap space-y-4 justify-between gap-3 items-center">
                <div className="pt-2">
                  <img
                    className="object-cover h-[4rem] w-[4rem] rounded-full border-4 border-white"
                    src={event.details[0]?.photo} // Assuming 'details' is an array with the event details
                    alt={event.details[0]?.name}
                  />
                </div>
                <div>
                  <h2 className="text-base text-white">
                    {event.details[0]?.name}
                  </h2>
                  <p className="text-base text-white">Orders: {event.count}</p>
                </div>
              </div>

              <div className="flex flex-c flex-wrap gap-3 justify-center items-center">
                <div className="text-white font-semibold">
                  ${event.details[0]?.price}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
