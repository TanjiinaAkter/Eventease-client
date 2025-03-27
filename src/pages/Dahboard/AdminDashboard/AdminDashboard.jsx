import { FaCalendar, FaDollarSign } from "react-icons/fa";
import { MdOutlinePendingActions, MdShoppingBag } from "react-icons/md";
// import useEventRoleBased from "../../../hooks/useEventRoleBased";
import { useEffect, useState } from "react";
import usePaymentByRole from "../../../hooks/usePaymentByRole";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const AdminDashboard = () => {
  const [eventsMatched, setEventsMatched] = useState([]);
  const [topEventCount, setTopEventCount] = useState(0);
  // const [matchedEvents, setMatchedEvents] = useState([]);
  const [paymentDetailsByRole] = usePaymentByRole();
  const [allpayments, setAllPayments] = useState([]);
  console.log("payments", allpayments);
  const payments = paymentDetailsByRole.data || []; // Ensure it's an array

  const [revenue, setRevenue] = useState(0);
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
  // =============================== TOTAL REVENUE ==================================//
  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
  const [data, setData] = useState([]);
  const [dataOrder, setDataOrder] = useState([]);

  useEffect(() => {
    if (allpayments && allpayments.length > 0) {
      const formatDate = (date) => date.toISOString().split("T")[0];
      const last7Days = [];
      for (let i = 6; i >= 0; i--) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        last7Days.push(formatDate(date));
      }
      console.log("last7Days", last7Days);
      const revenueData = last7Days.map((dateString) => {
        const dailyPayments = allpayments.filter(
          (payment) => formatDate(new Date(payment.date)) === dateString
        );
        const dailyRevenue = dailyPayments.reduce(
          (sum, payment) => sum + payment.totalPrice,
          0
        );
        return { name: dateString, revenue: dailyRevenue };
      });
      const dailyOrder = last7Days.map((dateString) => {
        //filter kore khuje quantityOfOrder e je koyta pacchi seta store kortesi
        const quantityOfOrder = allpayments.filter((payment) => {
          const splitss = payment.date.split("T")[0];

          return splitss === dateString;
        });

        return { name: dateString, order: quantityOfOrder.length };
      });

      setData(revenueData);
      setDataOrder(dailyOrder);
    }
  }, [allpayments]);
  console.log("dailyOrder data is here", dataOrder);
  useEffect(() => {
    if (allpayments && allpayments.length > 0) {
      // reduce niyechi karon map nile array return korto new kore, reduce same kaj kortese array na kore
      const totalRevenue = allpayments?.reduce((total, payment) => {
        return total + payment.totalPrice;
      }, 0);
      setRevenue(totalRevenue);
    }
  }, [allpayments]);

  // =============================== PENDING ORDERS ==================================//
  console.log(dataOrder);
  const pendingOrder = allpayments.filter(
    (payment) => payment.orderStatus === "Pending"
  );
  // console.log(pendingOrder.length);
  // =============================== TOP PERFORMANCE COUNT + TOP EVSNTS  ======================//
  useEffect(() => {
    if (allpayments && allpayments.length > 0) {
      const arrEve = allpayments.flatMap((payment) => {
        return payment.eventDetails.filter((eve) => eve.eventId);
      });
      const storeEvent = {};
      arrEve.forEach((event) => {
        storeEvent[event.eventId] = (storeEvent[event.eventId] || 0) + 1;
      });

      const topEventMaxNumber = Math.max(...Object.values(storeEvent));
      // console.log(topEventMaxNumber);
      const topEventLength = Object.values(storeEvent).filter(
        (event) => event === topEventMaxNumber
      ).length;
      // console.log(topEventLength);
      setTopEventCount(topEventLength);

      //console.log(Object.entries(storeEvent));
      //Object.entries diye array baniye niyechi
      const matchedEvents = Object.entries(storeEvent).map(
        ([eventId, value]) => {
          const newdddd = new Map();
          allpayments.map((payment) => {
            payment.eventDetails.filter((eve) => {
              if (eve.eventId === eventId) {
                newdddd.set(eventId, eve);
              }
            });
          });

          return { eventId, value, eventDetails: [...newdddd.values()] };
        }
      );
      setEventsMatched(matchedEvents);
      console.log(matchedEvents);
    }
  }, [allpayments]);
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  return (
    <div className="mx-auto w-full p-4 bg-[#0a1316] min-h-screen h-full">
      <div className=" mx-auto mb-5 text-center md:text-start">
        <h2 className="text-[#44cfbf] text-xl">Admin Dashboard</h2>
        <p className="text-[#b58753]">View and manage your events</p>
      </div>

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
              {topEventCount}
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
      {/* EITA HOBE CHART  DIV */}
      <div className="mt-12 w-full  mb-4 border border-[#4d4b4b] flex flex-row flex-wrap  mx-auto  gap-4 p-5 rounded-md bg-[#0f1c1c]">
        <div className="w-full">
          <h2 className="text-xl text-white uppercase mb-2">Revenue Trend -</h2>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart barSize={50} data={data}>
              <CartesianGrid strokeDasharray="1 1" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              {/* <Bar dataKey="name" fill="#b58753"  barSize={50} /> */}
              <Bar dataKey="revenue" fill="#44cfbf" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="w-full">
          <h2 className="text-xl text-white uppercase mt-2">
            Orders Overview -
          </h2>
          <ResponsiveContainer width={"100%"} height={300}>
            <BarChart
              width={500}
              height={300}
              data={dataOrder}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}>
              <XAxis dataKey="name" />
              <YAxis />
              <Bar
                dataKey="order"
                fill="#8884d8"
                shape={<TriangleBar />}
                label={{ position: "top" }}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* ==============  REVENUE TREND =========== */}
      </div>
      {/* SECOND DIV */}

      {/* THIRD DIV --Recent Orders */}
      <div className="mt-12 border border-[#4b4d4c] flex flex-col flex-wrap  mx-auto  gap-4 p-5 rounded-md bg-[#0f1c1c]">
        <h2 className="text-xl text-white">Recent Orders</h2>
        {/* ==============  card-box =========== */}
        <div className="flex gap-3 flex-col">
          {payments.slice(-3).map((payment) => {
            //[0] disi karon slice always array return kore kintu eventDetails a event array te thakle show korte error khetam tai [0] dile ['event'] na peye direct access pacchi 'event' eivabe.....without array
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
      {/* FOURTH DIV --TOP PERFORMANCE  */}
      <div className="mt-12 border border-[#4b4d4c] mx-auto p-5 rounded-md bg-[#0f1c1c]">
        <h2 className="text-xl mb-4 text-white">Top Performing Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {eventsMatched.map((eventmatch) =>
            eventmatch.eventDetails.map((event) => (
              <div
                key={event._id}
                className="card-box flex p-5 bg-[#1b303087] transition-all hover:shadow-md shadow-[#383938] duration-300 gap-3 justify-between items-center">
                <div className="flex w-full flex-col space-y-4 justify-between gap-3 items-center">
                  <div className="pt-2 w-full flex">
                    <img
                      className="object-cover h-[4rem] w-[4rem] rounded-full border-4 border-white"
                      src={event.photo} // Assuming 'details' is an array with the event details
                      alt=""
                    />
                  </div>
                  <div className="">
                    <h2 className="text-base text-white">{event.name}</h2>
                    <p className="text-lg mt-3 text-white">
                      Orders :
                      <span className="text-teal-300 pl-2 font-semibold">
                        {eventmatch.value}
                      </span>
                    </p>
                  </div>
                </div>

                <div className="flex flex-c flex-wrap gap-3 justify-center items-center">
                  <div className="text-white font-semibold"></div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
