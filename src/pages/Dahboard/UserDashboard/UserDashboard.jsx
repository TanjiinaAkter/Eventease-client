import { useEffect, useState } from "react";
import useSinglePaymentUser from "../../../hooks/useSinglePaymentUser";
import useAllevents from "../../../hooks/useAllevents";

const UserDashboard = () => {
  const [userpayments] = useSinglePaymentUser();
  const [allevents] = useAllevents();
  const [payments, setPayments] = useState([]);
  const [pendingOrders, setPendingOrders] = useState(0);
  const [cancelOrders, setcancelOrders] = useState(0);
  const [confirmedOrders, setConfirmedOrders] = useState(0);
  console.log(allevents);
  // console.log(
  //   "userpayments info",
  //   payments,
  //   pendingOrders,
  //   cancelOrders,
  //   confirmedOrders
  // );
  useEffect(() => {
    if (userpayments) {
      const bla = userpayments?.filter(
        (payment) => payment?.eventDetails?.length > 0
      );

      setPayments(bla);
      const pending = bla.filter(
        (payment) => payment.orderStatus === "Pending"
      ).length;

      const confirmed = bla.filter(
        (payment) => payment.orderStatus === "Confirmed"
      ).length;

      const canceled = bla.filter(
        (payment) => payment.orderStatus === "Canceled"
      ).length;

      setPendingOrders(pending);
      setConfirmedOrders(confirmed);
      setcancelOrders(canceled);
    }
  }, [userpayments]);
  const today = new Date();
  const futureEvents = allevents.filter((event) => {
    const eventGet = new Date(event.eventstartdate);
    return eventGet > today;
  });
  console.log(futureEvents);
  return (
    <div className="mx-auto w-full p-8 bg-[#0a1316] min-h-screen h-full">
      <div className=" flex flex-wrap border border-[#4b4d4c]  mx-auto justify-evenly items-center gap-4 p-7 rounded-md bg-[#0f1c1c]">
        <div className=" pb-3 text-center  sm:border-b-[1px] md:border-r-[1px] md:pr-12 md:border-r-[#6a6d6a]">
          <h2 className="text-xl text-[#b58753]">Cancelled Orders</h2>
          <h1 className="text-3xl text-[#44cfbf] font-semibold text-center mt-2">
            {cancelOrders}
          </h1>
        </div>
        <div className=" pb-3 text-center  sm:border-b-[1px] md:border-r-[1px] md:pr-12 md:border-r-[#6a6d6a]">
          <h2 className="text-xl text-[#b58753]">Confirmed Orders</h2>
          <h1 className="text-3xl  font-semibold text-[#44cfbf] text-center mt-2">
            {confirmedOrders}
          </h1>
        </div>
        <div className="">
          <h2 className="text-xl text-[#b58753]">Pending Orders</h2>
          <h1 className="text-3xl  font-semibold text-[#44cfbf]  mt-2 text-center">
            {pendingOrders}
          </h1>
        </div>
      </div>
      <div className="mt-12 border border-[#4b4d4c] flex flex-col flex-wrap  mx-auto  gap-4 p-5 rounded-md bg-[#0f1c1c]">
        <h2 className="text-xl text-white">Recent Orders</h2>
        {/* ==============  card-box =========== */}
        <div className="flex gap-3 flex-col">
          {/* payment e 2 ta thakle 2 ta thekei dekhabe */}
          {payments.slice(-3).map((payment) => {
            // slice(-1) korle new akta array create hobe setake access korte [0] disi jehetu amra ektai slice kore nisi so event.name  eveabe likhar subidhar jonno [0] nisi
            const lastEventFromEventDetails = payment.eventDetails.slice(-1)[0];

            return (
              <div
                key={payment._id}
                className=" card-box flex p-5 bg-[#1b303087] transition-all hover:shadow-md shadow-[#383938] duration-300 gap-3 justify-between items-center">
                <div className="flex flex-wrap space-y-4 justify-between gap-3 items-center">
                  <div className="pt-2">
                    <img
                      className="object-cover h-[4rem] w-[4rem] rounded-full border-4  border-white"
                      src="https://i.ibb.co.com/4RNsn51T/chuttersnap-a-En-H4h-J-Mrs-unsplash.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <h2 className="text-base text-white">
                      {lastEventFromEventDetails.name}
                    </h2>
                    <p className="text-base text-white">
                      {new Date(payment.date).toLocaleDateString("EN-GB")}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 justify-center items-center">
                  <div className="badge sm:badge-sm md:badge-md font-semibold badge-ghost">
                    $ {lastEventFromEventDetails.price}
                  </div>
                  <div className="badge sm:badge-sm md:badge-md  font-semibold text-white border-none bg-[#0BDA51]">
                    {payment.paymentStatus}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Upcoming Events */}
      <div className="mt-12 border border-[#4b4d4c] flex flex-col flex-wrap  mx-auto  gap-4 p-5 rounded-md bg-[#0f1c1c]">
        <h2 className="text-xl text-white">Upcoming Events</h2>
        {/* ==============  card-box =========== */}
        {futureEvents.slice(0, 4).map((event) => (
          <div
            key={event._id}
            className=" card-box flex p-5 bg-[#1b303087] transition-all hover:shadow-md shadow-[#383938] duration-300 gap-3 justify-between items-center">
            <div className="flex flex-wrap space-y-4 justify-between gap-3 items-center">
              <div className="pt-2">
                <img
                  className="object-cover h-[4rem] w-[4rem] rounded-full border-4  border-white"
                  src={event.eventimage}
                  alt=""
                />
              </div>
              <div>
                <h2 className="text-base text-white">{event.eventtitle}</h2>
                <p className="text-base text-white">{event.eventstartdate}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 justify-center items-center">
              <div className="badge sm:badge-sm md:badge-md font-semibold badge-ghost">
                $320
              </div>
              <div className="badge badge-md font-semibold text-white border-none bg-[#0b8bda]">
                {event.venue}
              </div>
            </div>
          </div>
        ))}
        {/* ==============  card-box =========== */}
      </div>
    </div>
  );
};

export default UserDashboard;
