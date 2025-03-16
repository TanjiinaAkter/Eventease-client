import { IoCalendarOutline } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import useaxiosSecure from "../../../hooks/useAxiosSecure";
import { MdCancel } from "react-icons/md";
import Swal from "sweetalert2";
import useSinglePaymentUser from "../../../hooks/useSinglePaymentUser";
import useAuth from "../../../hooks/useAuth";
const UserOrderDetail = () => {
  const [cancelMsg, setCancelMsg] = useState(false);
  const { user } = useAuth();
  const [payment, setPayment] = useState([]);
  const location = useLocation();
  const getPaymentId = location.state?.payment;
  const [userpayments, refetch] = useSinglePaymentUser();
  console.log("userpayments user er payments ", userpayments, payment);
  const axiosSecure = useaxiosSecure();
  useEffect(() => {
    if (userpayments.length > 0) {
      const payment = userpayments.find(
        (payment) => payment._id === getPaymentId._id
      );

      setPayment(payment);
      if (payment && payment.eventDetails) {
        const isCanceled = payment.eventDetails.some(
          (event) => event.orderStatus === "Canceled"
        );
        setCancelMsg(isCanceled);
      }
    }
  }, [userpayments, getPaymentId]);
  const handleCancelOrder = (event) => {
    console.log(event.eventId, event.orderStatus);
    if (user && user?.email) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Cancel this event booking !",
      }).then((result) => {
        if (result.isConfirmed) {
          axiosSecure
            .patch(
              `/payments/singleevent/paymentid/${payment._id}/eventid/${event.eventId}`,
              {
                orderStatus: "Canceled",
              }
            )
            .then((res) => {
              console.log(res.data);
              if (res.data.modifiedCount === 1) {
                setCancelMsg(true);
                refetch();
                Swal.fire({
                  title: "Canceled!",
                  text: `${event._id} has been Canceled from the Order list.`,
                  icon: "success",
                });
              }
            })
            .catch((error) => {
              setCancelMsg(false);
              console.log(error);
            });
        }
      });
    }
  };
  return (
    <div className="mx-auto w-full  md:w-[70%] my-12  bg-[#0a1316] min-h-screen ">
      <div
        key={payment._id}
        className="card p-8 space-y-6 text-black bg-[#192f2f]  card-lg shadow-sm">
        <div className=" flex flex-wrap justify-between gap-4">
          <div>
            <h1 className="md:text-2xl capitalize font-bold text-teal-500">
              Order #{payment._id}
            </h1>
            <div className="flex justify-normal items-center text-gray-400 text-[1.1rem] my-2 font-semibold gap-2">
              <IoCalendarOutline className="text-teal-500"></IoCalendarOutline>
              <p className="text-white">
                {" "}
                {new Date(payment.date).toLocaleDateString("EN-GB")}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <span className="px-6  py-[1px] w-full font-semibold bg-[#ffc107] text-[#000000] rounded-md">
              {payment.orderStatus ? payment?.orderStatus : "No status"}
            </span>
            <span className="px-6 py-[1px] font-semibold bg-[#ffc107] text-[#000000] rounded-md">
              Payment: {payment.paymentStatus}
            </span>
          </div>
        </div>
        <hr />
        <div className="my-5 grid grid-cols-1 text-white  font-semibold lg:grid-cols-3 gap-4">
          <div className="bg-[#2c3f49] hover:bg-teal-600 transition-all ease-in-out duration-700  rounded-sm p-4 text-white">
            <h2> Total Amount after discount</h2>
            <h1 className="text-[1.4rem] ">{payment.totalPrice}</h1>
          </div>
          <div className="bg-[#2c3f49] hover:bg-teal-600  transition-all ease-in-out duration-700 rounded-sm p-4">
            <h2>Ticket Quantity</h2>
            <h1 className="text-[1.4rem]  ">{payment.quantity}</h1>
          </div>
          <div className="bg-[#2c3f49] hover:bg-teal-500 transition-all ease-in-out duration-700 rounded-sm p-4">
            <h2>Payment Method</h2>
            <h1 className="text-[1.4rem] ">{payment.paymentMethod}</h1>
          </div>
        </div>
        <div className="flex w-full ">
          <div className="bg-[#2c3f49] text-white font-semibold w-full hover:bg-teal-500 transition-all ease-in-out duration-700 rounded-sm p-4">
            <h2>Transaction ID -</h2>
            <h1 className="text-[.9rem] md:text-[1.4rem] ">
              {payment.transactionId ? payment.transactionId : "null"}
            </h1>
          </div>
        </div>
        <div>
          <div>
            <div className="flex justify-normal items-center text-gray-400 text-[1.1rem] my-2 font-semibold gap-2">
              <IoCalendarOutline className="text-teal-500 text-xl"></IoCalendarOutline>
              <p className="text-white text-2xl mb-3">Order Items</p>
            </div>
          </div>
          {/* // FROM HERE */}
          <div className="flex flex-col flex-wrap space-y-3 ">
            {payment.eventDetails?.map((event) => (
              <div key={event._id} className="border border-gray-700 p-3 ">
                <div className=" card-box justify-center flex flex-wrap md:flex-nowrap p-5 bg-[#1b303087] transition-all duration-300 gap-3 lg:justify-between items-center">
                  <div className="flex flex-wrap space-y-4 justify-between gap-3 items-center">
                    <div className="pt-2 flex sm:justify-center sm:items-center md:justify-start md:items-center sm:w-full mx-auto">
                      <img
                        className="object-cover h-[4rem] w-[4rem] rounded-full border-4  border-white"
                        src={event.photo}
                        alt=""
                      />
                    </div>
                    <div className=" text-center md:text-start space-y-2">
                      <h2 className=" text-xl w-full text-white">
                        {event.name}
                      </h2>
                      <p className=" text-lg text-white">
                        {new Date(event.startdate).toLocaleDateString("EN-GB")}
                      </p>
                      <p className=" text-lg w-full text-white">
                        Price: {event.price}
                      </p>
                      <p className=" text-lg w-full text-white">
                        Quantity: {event.quantity}
                      </p>
                    </div>
                  </div>
                  <div className="flex  gap-3 justify-center flex-col items-center">
                    <div className="flex row flex-wrap justify-center items-center lg:justify-normal lg:items-start lg:flex-nowrap gap-3">
                      <div className="badge badge-md font-semibold badge-ghost">
                        ${event.price}
                      </div>
                      <div className="badge sm:badge-lg md:badge-lg text-nowrap font-semibold text-white border-none bg-[#0BDA51]">
                        Total: {event.price * event.quantity}
                      </div>
                    </div>
                    {payment.paymentStatus === "Paid" ? (
                      <div>
                        <p className="text-amber-400 justify-self-center">
                          This order has been paid and cannot be canceled
                        </p>
                      </div>
                    ) : (
                      <button
                        disabled={cancelMsg}
                        onClick={() => handleCancelOrder(event)}
                        className={`badge w-full cursor-pointer hover:bg-gray-600 py-4  text-nowrap font-semibold text-white border-none bg-[#da150b] ${
                          cancelMsg
                            ? "bg-gray-600 text-white cursor-not-allowed"
                            : ""
                        } `}>
                        <MdCancel className="text-white text-xl" />{" "}
                        {cancelMsg ? "Canceled" : " Cancel order"}
                      </button>
                    )}
                  </div>
                </div>
                <div className=" flex flex-row items-center gap-2 font-semibold text-yellow-400 border-none ">
                 
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
