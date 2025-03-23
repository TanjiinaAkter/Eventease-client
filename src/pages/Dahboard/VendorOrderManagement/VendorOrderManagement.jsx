import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import RouteTitle from "../../../components/RouteTitle";

import { GrUpdate } from "react-icons/gr";
import { RxCross2 } from "react-icons/rx";
import { useEffect, useState } from "react";
import usePaymentByRole from "../../../hooks/usePaymentByRole";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const VendorOrderManagement = () => {
  //VENDOR CREATED EVENTS GET

  const [paymentDetailsByRole, refetch] = usePaymentByRole();
  const [payments, setPayments] = useState([]);
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    if (paymentDetailsByRole?.data) {
      // console.log(paymentDetailsByRole?.data);
      setPayments(paymentDetailsByRole?.data);
    }
  }, [paymentDetailsByRole, payments]);
  //ORDER STATUS UPDATE OPERATION
  const handleCancelOrder = (
    paymentStatus,
    paymentid,
    eDetail,
    changestatus
  ) => {
    // console.log(
    //   "paymentStatus",
    //   paymentStatus,
    //   "paymentid",
    //   paymentid,
    //   "eventId",
    //   eDetail.eventId,
    //   "changestatus",
    //   changestatus
    // );
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

  // EVENT DELETE OPERATION
  const handleDelete = (eventId, paymentStatus, paymentId) => {
    console.log(eventId, paymentStatus, paymentId);
    if (paymentStatus === "Paid") {
      return Swal.fire(
        "Payment is already done, you can not cancel  this order !"
      );
    }
    if (user && user?.email) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, cancel this event order!",
      }).then((result) => {
        if (result.isConfirmed) {
          axiosSecure
            .patch(
              `/payments/paymentId/${paymentId}/vendorCreatedEventDelete/${eventId}`
            )
            .then((res) => {
              console.log(res.data);
              if (res.data.deletedCount === 1) {
                refetch();
                Swal.fire({
                  title: "Deleted!",
                  text: `${eventId} has been deleted from the payments list.`,
                  icon: "success",
                });
              }
            });
        }
      });
    }
  };
  return (
    <div className="relative z-0 bg-black w-full h-full min-h-screen p-6">
      {/* Back to Home Button */}
      <div className="flex justify-end">
        <Link to="/">
          <button className="flex button-style items-center gap-1">
            <IoHome className="text-xl" /> BACK TO HOME
          </button>
        </Link>
      </div>

      {/* Page Title */}
      <RouteTitle
        routetitle="Orders Directory"
        routesubtitle="Manage and organize Orders efficiently."
      />

      {/* Table Wrapper */}
      <div className="mx-auto mt-15 overflow-auto border border-[#4b4d4c] w-full flex flex-col gap-4 p-5 pb-8 rounded-md bg-[#0f1c1c]">
        <div className="">
          <table className="table-auto w-full min-w-[600px] text-white text-center">
            {/* head */}
            <thead>
              <tr className="text-[#44cfbf] bg-black rounded-b-lg">
                <th className="px-1  py-3 text-lg md:text-base whitespace-nowrap">
                  Order Number
                </th>

                <th className="px-1 py-3 text-lg md:text-base whitespace-nowrap">
                  event ID
                </th>
                <th className="px-1 py-3 text-lg md:text-base whitespace-nowrap">
                  Date
                </th>
                <th className="px-1 py-3 text-lg md:text-base whitespace-nowrap">
                  Quantity
                </th>
                <th className="px-1 py-3 text-lg md:text-base whitespace-nowrap">
                  Status
                </th>
                <th className="px-1  py-3 text-lg md:text-base whitespace-nowrap">
                  Payment Status
                </th>
                <th className="px-1 py-3 text-lg md:text-base ">
                  Total amount
                </th>
                <th className="px-1 py-3 text-lg md:text-base whitespace-nowrap">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment) =>
                payment.eventDetails.map((eDetail) => (
                  <tr
                    key={eDetail._id}
                    className="text-white border-b border-[#4c4f4e]">
                    <td className="px-2 py-2 whitespace-nowrap">
                      {payment._id}
                    </td>

                    <td className="px-2 py-2 whitespace-nowrap">
                      {eDetail.eventId}
                    </td>

                    <td className="px-2 py-2 whitespace-nowrap">
                      {new Date(payment.date).toLocaleDateString("EN-GB")}
                    </td>
                    <td className="px-2 py-2 whitespace-nowrap">
                      {eDetail.quantity}
                    </td>
                    <td className="px-2 py-2 whitespace-nowrap ">
                      <div className="flex items-center justify-center gap-4">
                        <p className="px-2 py-[1px] font-semibold hover:bg-gray-800 transition-all duration-200 ease-in-out 0 text-white rounded-full">
                          {/* {eDetail._id} */}
                          {eDetail.orderStatus === "Canceled" && (
                            <p className=" px-2 py-[1px] font-semibold hover:bg-gray-800 transition-all duration-200 ease-in-out bg-red-600 text-white rounded-full">
                              {eDetail.orderStatus}
                            </p>
                          )}
                          {eDetail.orderStatus === "Pending" && (
                            <p className="px-2 py-[1px] font-semibold hover:bg-gray-800 transition-all duration-200 ease-in-out bg-yellow-600 text-white rounded-full">
                              {eDetail.orderStatus}
                            </p>
                          )}
                          {eDetail.orderStatus === "Confirmed" && (
                            <p className="px-2 py-[1px] font-semibold hover:bg-gray-800 transition-all duration-200 ease-in-out bg-green-600 text-white rounded-full">
                              {eDetail.orderStatus}
                            </p>
                          )}
                        </p>
                        <div className="dropdown ">
                          <div
                            tabIndex={0}
                            role="button"
                            className="btn border border-white px-3 py-0 btn-ghost m-1">
                            <GrUpdate className="text-lg" />
                          </div>
                          <ul
                            tabIndex={0}
                            className="dropdown-content text-black content-center menu bg-base-100 absolute -top-8 right-[100%] rounded-box z-[1] w-32 md:w-52 p-1 shadow">
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
                    </td>
                    <td className="px-2 py-2 whitespace-nowrap ">
                      <div className="flex items-center justify-end gap-4">
                        {payment.paymentStatus === "Paid" && (
                          <p className="px-2 text-center py-[1px] font-semibold hover:bg-gray-800 transition-all duration-200 ease-in-out bg-green-600 text-white rounded-full">
                            {payment.paymentStatus}
                          </p>
                        )}
                        {payment.paymentStatus === "Unpaid" && (
                          <p className="px-2 text-center py-[1px] font-semibold hover:bg-gray-800 transition-all duration-200 ease-in-out bg-red-600 text-white rounded-full">
                            {payment.paymentStatus}
                          </p>
                        )}
                      </div>
                    </td>
                    <td className=" py-2 whitespace-nowrap">
                      {eDetail.price * eDetail.quantity}
                    </td>

                    <td className="px-2 py-2 whitespace-nowrap flex justify-center items-center gap">
                      {/* to={`/dashboard/orderdetail/${payment._id}`} */}

                      <button
                        // TO DO: vendor tar event delete korbe
                        onClick={() =>
                          handleDelete(
                            eDetail.eventId,
                            payment.paymentStatus,
                            payment._id
                          )
                        }
                        className=" py-2 px-2  bg-red-600 hover:bg-gray-400 rounded-full text-white ">
                        <RxCross2 className=" font-semibold text-lg " />
                      </button>
                    </td>
                  </tr>
                ))
              )}
              {/* row 1 */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default VendorOrderManagement;
