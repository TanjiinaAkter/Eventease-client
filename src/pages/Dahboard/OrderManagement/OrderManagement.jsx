import { Link } from "react-router-dom";
import RouteTitle from "../../../components/RouteTitle";
import { GrUpdate } from "react-icons/gr";
import { IoHome } from "react-icons/io5";
// import useEventRoleBased from "../../../hooks/useEventRoleBased";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { MdDelete } from "react-icons/md";
import useAuth from "../../../hooks/useAuth";
import usePaymentByRole from "../../../hooks/usePaymentByRole";
import { useEffect, useState } from "react";

const OrderManagement = () => {
  const [payments, setPayments] = useState([]);
  // TO DO : JODI EVENTdEATILS e events na thake tahole oi row ta remove kore dibo
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  // const [paymentByRole, refetch] = useEventRoleBased();
  const [paymentDetailsByRole, refetch] = usePaymentByRole();
  console.log(
    "paymentDetailsByRole mane ADMIN er events  payment  gulo holo ",
    paymentDetailsByRole.data
  );

  useEffect(() => {
    if (paymentDetailsByRole.data && paymentDetailsByRole.data.length > 0) {
      // Filter payments that have eventDetails with eventId
      const paymentsWithEventId = paymentDetailsByRole.data.filter(
        (payment) => {
          return (
            payment.eventDetails &&
            payment.eventDetails.some((event) => event.eventId)
          );
        }
      );

      console.log(paymentsWithEventId); // This will log payments with eventDetails that have an eventId
      setPayments(paymentsWithEventId);
    }
  }, [paymentDetailsByRole]);
  // useEffect(() => {
  //   if (paymentDetailsByRole.data && paymentDetailsByRole.data.length > 0) {
  //     const payments = paymentDetailsByRole.data.flatMap(
  //       (payment) => payment?.eventDetails?.eventId
  //     );

  //     console.log(payments);
  //   }
  // }, [paymentDetailsByRole]);
  const handleDelete = (payment) => {
    console.log(payment._id);
    if (payment.paymentStatus === "Paid") {
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
        confirmButtonText: "Yes, cancel it!",
      }).then((result) => {
        if (result.isConfirmed) {
          axiosSecure.delete(`/payments/${payment._id}`).then((res) => {
            console.log(res.data);
            if (res.data.deletedCount === 1) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: `${payment._id} has been deleted from the payments list.`,
                icon: "success",
              });
            }
          });
        }
      });
    }
  };
  // update order status FOR WHOLE ORDER
  const handleOrderUpdate = (changeStatus, paymentId, paymentStatus) => {
    console.log(changeStatus, paymentId, paymentStatus);
    if (paymentStatus === "Paid") {
      return Swal.fire(
        "This order has already been paid. You cannot mark it as unpaid.!"
      );
    } else {
      if (user && user?.email) {
        axiosSecure
          .patch(`/payments/fullorderstatus/${paymentId}`, {
            orderStatus: changeStatus,
          })
          .then((res) => {
            console.log(res.data);
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your work has been saved",
              showConfirmButton: false,
              timer: 1500,
            });
          });
      }
    }
  };

  // update PAYMENT STATUS FOR WHOLE ORDER
  const handlePaymentStatus = (paymentStatus, paymentId, statustobeChange) => {
    console.log(paymentStatus, paymentId, statustobeChange);
    if (paymentStatus === "Paid") {
      return Swal.fire(
        "This order has already been paid. You cannot mark it as unpaid.!"
      );
    } else {
      if (user && user?.email) {
        axiosSecure
          .patch(`/payments/fullpaymentstatus/${paymentId}`, {
            paymentStatus: statustobeChange,
          })
          .then((res) => {
            console.log(res.data);
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your work has been saved",
              showConfirmButton: false,
              timer: 1500,
            });
            axiosSecure
              .patch(`/payments/fullorderstatus/${paymentId}`, {
                orderStatus: "Confirmed",
              })
              .then((res) => {
                console.log(res.data);
                refetch();
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Your work has been saved",
                  showConfirmButton: false,
                  timer: 1500,
                });
              });
          });
      }
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
      <div className="mx-auto mt-7 overflow-auto border border-[#4b4d4c] w-full flex flex-col gap-4 p-5 pb-8 rounded-md bg-[#0f1c1c]">
        <div className="">
          <table className="table-auto w-full min-w-[600px] text-white text-center">
            {/* head */}
            <thead>
              <tr className="text-[#44cfbf] bg-black rounded-b-lg">
                <th className="px-2 py-3 text-lg whitespace-nowrap">#</th>
                <th className="px-2 py-3 text-lg whitespace-nowrap">
                  Transaction ID
                </th>
                <th className="px-2 py-3 text-lg whitespace-nowrap">Date</th>
                <th className="px-2 py-3 text-lg whitespace-nowrap">Status</th>
                <th className="px-2 py-3 text-lg whitespace-nowrap">
                  Payment Status
                </th>
                <th className="px-2 py-3 text-lg whitespace-nowrap">
                  Total amount
                </th>
                <th className="px-2 py-3 text-lg whitespace-nowrap">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {payments.map((payment, index) => (
                <tr
                  key={payment._id}
                  className="text-white border-b border-[#4c4f4e]">
                  <th className="px-2 py-2 whitespace-nowrap">{index + 1}</th>
                  <td className="px-2 py-2 whitespace-nowrap">
                    {payment.transactionId || "Null"}
                  </td>
                  <td className="px-2 py-2 whitespace-nowrap">
                    {new Date(payment.date).toLocaleDateString("EN-GB")}
                  </td>
                  <td className="px-2 py-2 whitespace-nowrap ">
                    <div className="flex items-center justify-center gap-4">
                      <p className=" py-1 px-2  hover:bg-gray-800 transition-all duration-200 ease-in-out 0 text-white rounded-lg">
                        {/* {eDetail._id} */}

                        {payment.orderStatus === "Completed" && (
                          <p className="px-2 py-[1px] font-semibold hover:bg-gray-800 transition-all duration-200 ease-in-out bg-green-900 text-white rounded-full">
                            {payment.orderStatus}
                          </p>
                        )}
                        {payment.orderStatus === "Canceled" && (
                          <p className=" px-2 py-[1px] font-semibold hover:bg-gray-800 transition-all duration-200 ease-in-out bg-red-600 text-white rounded-full">
                            {payment.orderStatus}
                          </p>
                        )}
                        {payment.orderStatus === "Pending" && (
                          <p className=" px-2 py-[1px] font-semibold hover:bg-gray-800 transition-all duration-200 ease-in-out bg-yellow-600 text-white rounded-full">
                            {payment.orderStatus}
                          </p>
                        )}
                        {payment.orderStatus === "Confirmed" && (
                          <p className="px-2 py-[1px] font-semibold hover:bg-gray-800 transition-all duration-200 ease-in-out bg-green-600 text-white rounded-full">
                            {payment.orderStatus}
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
                              handleOrderUpdate(
                                "Canceled",
                                payment._id,
                                payment.paymentStatus
                              )
                            }>
                            <a className="font-semibold">Canceled</a>
                          </li>
                          <li
                            onClick={() =>
                              handleOrderUpdate(
                                "Pending",
                                payment._id,
                                payment.paymentStatus
                              )
                            }>
                            <a className="font-semibold ">Pending</a>
                          </li>
                          <li
                            onClick={() =>
                              handleOrderUpdate(
                                "Confirmed",
                                payment._id,
                                payment.paymentStatus
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
                      <p className=" py-1 px-2 hover:bg-gray-800 transition-all duration-200 ease-in-out  text-white rounded-lg">
                        {payment.paymentStatus === "Paid" && (
                          <p className="px-2 py-[1px] font-semibold hover:bg-gray-800 transition-all duration-200 ease-in-out bg-green-600 text-white rounded-full">
                            {payment.paymentStatus}
                          </p>
                        )}
                        {payment.paymentStatus === "Unpaid" && (
                          <p className="px-2 py-[1px] font-semibold hover:bg-gray-800 transition-all duration-200 ease-in-out bg-red-600 text-white rounded-full">
                            {payment.paymentStatus}
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
                              handlePaymentStatus(
                                payment.paymentStatus,
                                payment._id,
                                "Paid"
                              )
                            }>
                            <a className="font-semibold">paid</a>
                          </li>
                          <li
                            onClick={() =>
                              handlePaymentStatus(
                                payment.paymentStatus,
                                payment._id,
                                "Unpaid"
                              )
                            }>
                            <a className="font-semibold">unpaid</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </td>
                  <td className="px-2 py-2 whitespace-nowrap ">
                    $<span className="font-semibold">{payment.totalPrice}</span>
                  </td>

                  <td className="px-3 py-2">
                    <div className="flex justify-center items-center gap-5">
                      <Link
                        to={`/dashboard/ordermanagement/orderdetail/${payment._id}`}
                        state={{ payment: payment }}>
                        <span className="px-5 hover:bg-gray-700 transition-all duration-500 hover:text-white py-1 font-semibold cursor-pointer bg-teal-300 text-[#0c0606] rounded-md">
                          Details
                        </span>
                      </Link>

                      <button
                        onClick={() => handleDelete(payment)}
                        className="w-10 h-10 hover:bg-gray-500 rounded-md flex justify-center items-center">
                        <MdDelete className="text-[27px] text-red-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderManagement;
