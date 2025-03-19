// import useEventRoleBased from "../../../hooks/useEventRoleBased";
import { IoCalendarOutline } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import usePaymentByRole from "../../../hooks/usePaymentByRole";
import { GrUpdate } from "react-icons/gr";

const AdminOrderDetail = () => {
  const { user } = useAuth();
  const [payment, setPayment] = useState([]);

  const location = useLocation();
  const getPaymentId = location?.state?.payment;

  const [paymentDetailsByRole, refetch] = usePaymentByRole();
  const axiosSecure = useAxiosSecure();
  console.log("ihfpwfffff", payment);
  useEffect(() => {
    if (paymentDetailsByRole.data && getPaymentId) {
      // location theke id niye sei payment ta payment collection theke ber kore nicchi
      const payment = paymentDetailsByRole?.data?.find(
        (payment) => payment._id === getPaymentId._id
      );
      console.log("payment insidde useefect", payment);
      setPayment(payment);
    }
  }, [paymentDetailsByRole, getPaymentId]);
  //ORDER STATUS UPDATE OPERATION
  const handleCancelOrder = (
    paymentStatus,
    paymentid,
    eDetail,
    changestatus
  ) => {
    console.log(
      "paymentStatus",
      paymentStatus,
      "paymentid",
      paymentid,
      "eventId",
      eDetail.eventId,
      "changestatus",
      changestatus
    );
    if (paymentStatus === "Paid") {
      return Swal.fire({
        title: "Payment already done! ",
        text: "you can not change order status",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Go Back!",
      });
    } else {
      if (user && user?.email) {
        Swal.fire({
          title: "Are you sure?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, Update this event booking !",
        }).then((result) => {
          if (result.isConfirmed) {
            axiosSecure
              .patch(
                `/payments/singleevent/paymentid/${paymentid}/eventid/${eDetail.eventId}`,
                {
                  orderStatus: changestatus,
                }
              )
              .then((res) => {
                console.log(res.data);
                if (res.data.modifiedCount === 1) {
                  refetch();
                  Swal.fire({
                    title: `${changestatus}`,
                    text: `${paymentid} has been ${changestatus} .`,
                    icon: "success",
                  });
                }
              })
              .catch((error) => {
                console.log(error);
              });
          }
        });
      } else {
        return;
      }
    }
  };

  return (
    <div className="mx-auto w-full  md:w-[70%] my-12  bg-[#0a1316] min-h-screen ">
      <div className="card p-8 space-y-6 text-black bg-[#192f2f]  card-lg shadow-sm">
        <div className=" flex flex-wrap justify-between gap-4">
          <div>
            <h1 className="md:text-2xl capitalize font-bold text-teal-500">
              Order #{payment._id}
            </h1>
            <div className="flex justify-normal items-center text-gray-400 text-[1.1rem] my-2 font-semibold gap-2">
              <IoCalendarOutline className="text-teal-500"></IoCalendarOutline>
              <p className="text-white">
                {new Date(payment.date).toLocaleDateString("EN-GB")}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <span className="px-6  py-[1px] w-full font-semibold bg-[#ffc107] text-[#000000] rounded-md">
              {payment.orderStatus}
            </span>
            <span className="px-6 py-[1px] font-semibold bg-[#ffc107] text-[#000000] rounded-md">
              Payment: {payment.paymentStatus}
            </span>
          </div>
        </div>
        <hr />
        <div className="my-5 grid grid-cols-1 text-white  font-semibold lg:grid-cols-3 gap-4">
          <div className="bg-[#2c3f49] hover:bg-teal-600 transition-all ease-in-out duration-700  rounded-sm p-4 text-white">
            <h2>Total Amount after discount</h2>
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
            <h1 className="text-[.9rem] md:text-[1.4rem]  ">
              {payment.transactionId ? payment.transactionId : "null"}
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
            {payment.eventDetails?.map((eDetail) => (
              <div className="border border-gray-700 p-3 " key={eDetail._id}>
                <div className=" card-box justify-center flex flex-wrap md:flex-nowrap p-5 bg-[#1b303087] transition-all duration-300 gap-3 lg:justify-between items-center">
                  <div className="flex flex-wrap space-y-4 justify-between gap-3 items-center">
                    <div className="pt-2 flex sm:justify-center sm:items-center md:justify-start md:items-center sm:w-full mx-auto">
                      <img
                        className="object-cover h-[4rem] w-[4rem] rounded-full border-4  border-white"
                        src={eDetail?.photo}
                        alt=""
                      />
                    </div>
                    <div className=" text-center md:text-start space-y-2">
                      <h2 className=" text-xl w-full text-white">
                        {eDetail?.name}
                      </h2>
                      <p className=" text-xl text-white">
                        {eDetail?.startdate}
                      </p>
                      <p className=" text-lg text-white">
                        Price: {eDetail.price}
                      </p>
                      <p className=" text-lg text-white">
                        Quantity: {eDetail.quantity}
                      </p>
                    </div>
                  </div>
                  <div className="flex   gap-3 justify-center flex-col items-center">
                    <div className="flex row flex-wrap justify-center items-center lg:justify-normal lg:items-start lg:flex-nowrap gap-3">
                      <div className="badge badge-md font-semibold badge-ghost">
                        ${eDetail.price}
                      </div>
                      <div className="badge sm:badge-lg md:badge-lg text-nowrap font-semibold text-white border-none bg-[#0BDA51]">
                        Total :{" "}
                        {eDetail?.totalprice ||
                          eDetail.price * eDetail.quantity}
                      </div>
                    </div>
                    {/* ORDER STATUS UPDATE */}
                    <div className="flex items-center justify-center gap-4">
                      {eDetail.orderStatus === "Canceled" && (
                        <p className=" py-1 px-2  hover:bg-gray-800 transition-all duration-200 ease-in-out bg-red-600 text-white rounded-lg">
                          {eDetail.orderStatus}
                        </p>
                      )}
                      {eDetail.orderStatus === "Pending" && (
                        <p className=" py-1 px-2  hover:bg-gray-800 transition-all duration-200 ease-in-out bg-yellow-600 text-white rounded-lg">
                          {eDetail.orderStatus}
                        </p>
                      )}
                      {eDetail.orderStatus === "Confirmed" && (
                        <p className=" py-1 px-2  hover:bg-gray-800 transition-all duration-200 ease-in-out bg-green-600 text-white rounded-lg">
                          {eDetail.orderStatus}
                        </p>
                      )}

                      <div className="dropdown ">
                        <div
                          tabIndex={0}
                          role="button"
                          className="btn border bg-white hover:bg-gray-800 hover:text-white border-white px-2 py-0 btn-ghost m-1">
                          <GrUpdate className="text-lg" />
                        </div>
                        <ul
                          tabIndex={0}
                          className="dropdown-content text-black content-center menu bg-base-100 absolute -top-8 right-[100%] rounded-box  z-[1] w-32 md:w-52 p-1 shadow">
                          <li
                            onClick={() =>
                              handleCancelOrder(
                                payment.paymentStatus,
                                payment._id,
                                eDetail,
                                "Canceled"
                              )
                            }>
                            <a className="font-semibold">Canceled</a>
                          </li>
                          <li
                            onClick={() =>
                              handleCancelOrder(
                                payment.paymentStatus,
                                payment._id,
                                eDetail,
                                "Pending"
                              )
                            }>
                            <a className="font-semibold ">Pending</a>
                          </li>
                          <li
                            onClick={() =>
                              handleCancelOrder(
                                payment.paymentStatus,
                                payment._id,
                                eDetail,
                                "Confirmed"
                              )
                            }>
                            <a className="font-semibold">Confirmed</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className=" flex flex-row items-center gap-2 font-semibold text-yellow-400 border-none "> */}
                {/* TO DO: order status hobe specific vendor er kora */}
                {/* <MdCancel className="text-red-600 text-xl" />
                  <p className="text-lg text-wrap">
                    Order status: deleted(your order has been deleted by vendor
                    : shehrin)
                  </p>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminOrderDetail;
