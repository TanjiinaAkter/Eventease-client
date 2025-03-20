import { FaCalendar, FaDollarSign } from "react-icons/fa";
import { MdOutlinePendingActions, MdShoppingBag } from "react-icons/md";
import useEventRoleBased from "../../../hooks/useEventRoleBased";
import { useEffect, useState } from "react";

const AdminDashboard = () => {
  const [eventsCount, setEventsCount] = useState(0);
  const [paymentByRole] = useEventRoleBased();
  // console.log(paymentByRole);
  const revenue = paymentByRole.reduce(
    (acc, total) => acc + total.totalPrice,
    0
  );

  useEffect(() => {
    // each payment>eventDetails>eventId gulo niye array create korlam.....[event1, event2, event3, event4, event1]
    const mapEvents = paymentByRole.flatMap((payment) =>
      payment.eventDetails.map((eve) => eve.eventId)
    );

    // new map nilam , normally seta {} thake , eita obj na but obj type e
    const getCountOfEvent = new Map();

    // proti ta event er upor loop chalacchi and key value pair kortesi event count kore , key=event value=event koyta seta.. foreach er code theke onek ta ei typer output pabo...
    // Map(3) {
    //   1 => 3,
    //   2 => 3,
    //   3 => 1
    // }
    mapEvents.forEach((eventId) => {
      getCountOfEvent.set(eventId, (getCountOfEvent.get(eventId) || 0) + 1);
    });
    // 1=>3 emn thaktese ja obj ba array kichui na tai obj baniye nicchi
    const objCreatForEvent = Object.fromEntries(getCountOfEvent);
    // obj is converting to array because sort function work for array only
    const topPerforming = Object.entries(objCreatForEvent).sort(
      ([, a], [, b]) => b - a
    );
    // array ta ke ekta obj banai nibo
    const sortedEventObj = Object.fromEntries(topPerforming);

    // obj theke maximum number konta seta ber kore nicchi karon pore compare korbo koyta ei number er ase
    const maxCount = Math.max(...Object.values(sortedEventObj));
    const maxCountLength = Object.values(sortedEventObj).filter(
      (value) => value === maxCount
    ).length;
    console.log("final ", maxCountLength);
    setEventsCount(maxCountLength);
  }, [paymentByRole]);

  const pendingOrder = paymentByRole.filter(
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
            <h2 className="text-xl text-white">Total Orders</h2>
            <h1 className="text-3xl text-[#44cfbf] font-semibold text-center mt-2">
              {paymentByRole.length}
            </h1>
          </div>
          <div>
            <MdShoppingBag className="text-[#44cfbf] text-2xl" />
          </div>
        </div>
        <div className="flex justify-center md:justify-between items-start gap-3 pb-3 text-center w-full md:w-auto sm:border-b-[1px] md:border-r-[1px] md:pr-12 md:border-r-[#6a6d6a]">
          <div>
            <h2 className="text-xl text-white">Revenue</h2>
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
            <h2 className="text-xl text-white">Pending Orders</h2>
            <h1 className="text-3xl text-[#44cfbf] font-semibold text-center mt-2">
              {pendingOrder.length}
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
            <h2 className="text-xl text-white">Active Events</h2>
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
        <div className=" card-box flex p-5 bg-[#1b303087] transition-all hover:shadow-md shadow-[#383938] duration-300 gap-3 justify-between items-center">
          <div className="flex flex-wrap space-y-4 justify-between gap-3 items-center">
            <div className="pt-2">
              <img
                className="object-cover h-[4rem] w-[4rem] rounded-full border-4  border-white"
                src="https://i.ibb.co.com/4RNsn51T/chuttersnap-a-En-H4h-J-Mrs-unsplash.jpg"
                alt=""
              />
            </div>
            <div>
              <h2 className="text-base text-white">User name</h2>
              <p className="text-base text-white">EVENT name </p>
            </div>
          </div>
          <div className="flex flex-c flex-wrap gap-3 justify-center items-center">
            <div className="badge badge-sm font-semibold badge-ghost">$320</div>
            <div className="badge badge-sm font-semibold text-[#e3a20a] border-none bg-[#e4f360]">
              pending
            </div>
          </div>
        </div>
        {/* ==============  card-box =========== */}
        <div className=" card-box flex p-5 bg-[#1b303087] transition-all hover:shadow-md shadow-[#383938] duration-300 gap-3 justify-between items-center">
          <div className="flex flex-wrap space-y-4 justify-between gap-3 items-center">
            <div className="pt-2">
              <img
                className="object-cover h-[4rem] w-[4rem] rounded-full border-4  border-white"
                src="https://i.ibb.co.com/4RNsn51T/chuttersnap-a-En-H4h-J-Mrs-unsplash.jpg"
                alt=""
              />
            </div>
            <div>
              <h2 className="text-base text-white">User name</h2>
              <p className="text-base text-white">EVENT name </p>
            </div>
          </div>
          <div className="flex flex-c flex-wrap gap-3 justify-center items-center">
            <div className="badge badge-sm font-semibold badge-ghost">$320</div>
            <div className="badge badge-sm font-semibold text-[#e3a20a] border-none bg-[#e4f360]">
              pending
            </div>
          </div>
        </div>
      </div>
      {/* FOURTH DIV   */}
      <div className="mt-12 border border-[#4b4d4c]  mx-auto   p-5 rounded-md bg-[#0f1c1c]">
        <h2 className="text-xl mb-4 text-white">Top Performing Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
          {/* ==============  card-box =========== */}
          <div className=" card-box flex p-5 bg-[#1b303087] transition-all hover:shadow-md shadow-[#383938] duration-300 gap-3 justify-between items-center">
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
                  Gaming Expo Unlimited 2024
                </h2>
                <p className="text-base text-white">Orders : 6</p>
              </div>
            </div>
            <div className="flex flex-c flex-wrap gap-3 justify-center items-center">
              <div className="text-white font-semibold ">$320</div>
            </div>
          </div>
          {/* ==============  card-box =========== */}
          <div className=" card-box flex p-5 bg-[#1b303087] transition-all hover:shadow-md shadow-[#383938] duration-300 gap-3 justify-between items-center">
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
                  Gaming Expo Unlimited 2024
                </h2>
                <p className="text-base text-white">Orders : 6</p>
              </div>
            </div>
            <div className="flex flex-c flex-wrap gap-3 justify-center items-center">
              <div className="text-white font-semibold ">$320</div>
            </div>
          </div>
          {/* ==============  card-box =========== */}
          <div className=" card-box flex p-5 bg-[#1b303087] transition-all hover:shadow-md shadow-[#383938] duration-300 gap-3 justify-between items-center">
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
                  Gaming Expo Unlimited 2024
                </h2>
                <p className="text-base text-white">Orders : 6</p>
              </div>
            </div>
            <div className="flex flex-c flex-wrap gap-3 justify-center items-center">
              <div className="text-white font-semibold ">$320</div>
            </div>
          </div>
          {/* ==============  card-box =========== */}
          <div className=" card-box flex p-5 bg-[#1b303087] transition-all hover:shadow-md shadow-[#383938] duration-300 gap-3 justify-between items-center">
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
                  Gaming Expo Unlimited 2024
                </h2>
                <p className="text-base text-white">Orders : 6</p>
              </div>
            </div>
            <div className="flex flex-c flex-wrap gap-3 justify-center items-center">
              <div className="text-white font-semibold ">$320</div>
            </div>
          </div>
          {/* ==============  card-box =========== */}
          <div className=" card-box flex p-5 bg-[#1b303087] transition-all hover:shadow-md shadow-[#383938] duration-300 gap-3 justify-between items-center">
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
                  Gaming Expo Unlimited 2024
                </h2>
                <p className="text-base text-white">Orders : 6</p>
              </div>
            </div>
            <div className="flex flex-c flex-wrap gap-3 justify-center items-center">
              <div className="text-white font-semibold ">$320</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
