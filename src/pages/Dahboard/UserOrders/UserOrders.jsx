import { MdCancel } from "react-icons/md";
import RouteTitle from "../../../components/RouteTitle";
import useSinglePaymentUser from "../../../hooks/useSinglePaymentUser";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const UserOrders = () => {
  let serial = 1;
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [userpayments, refetch] = useSinglePaymentUser();
  console.log("userpayments user er payments ", userpayments);

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
  return (
    <div className="mx-auto w-full p-4 bg-[#0a1316] min-h-screen h-full">
      <RouteTitle
        routetitle={"Update Your Profile"}
        routesubtitle={
          "Keep your information up-to-date for a seamless experience."
        }></RouteTitle>

      <div className="mt-8 border -[#4b4d4c]border flex flex-col md:w-full mx-auto gap-4 px-3 py-5 rounded-md bg-[#0f1c1c]">
        <div className="overflow-auto">
          <table className="table-auto w-full min-w-[600px]  text-white text-sm sm:text-base">
            {/* head */}
            <thead className="text-nowrap">
              <tr className="border-b-[2px] text-[#44cfbf] text-center my-8 text-[1rem] border-[#b58753]">
                <th className="px-2 py-2">#</th>
                <th className="px-2 py-2">Transaction Id</th>
                <th className="px-2 py-2">Payment method </th>
                <th className="px-2 py-2">Event</th>
                <th className="px-2 py-2 text-nowrap">Ticket Quantity</th>
                <th className="px-2 py-2">Total Amount</th>
                <th className="px-2 py-2">Payment Status</th>
                <th className="px-2 py-2">Order Status</th>
                <th className="px-2 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {userpayments.map((payment) =>
                payment.eventDetails.length > 0 ? (
                  <tr
                    key={payment._id}
                    className="border-b-[1px]  border-[#4c4f4e]  text-center">
                    <td className="px-1 py-4">{serial++}</td>
                    <td className="px-1 py-4">{payment.transactionId}</td>
                    <td className="px-1 py-4">{payment.paymentMethod}</td>
                    <td className="px-1 py-4">{payment.eventIds.length}</td>
                    <td className="px-1 py-4">{payment.quantity}</td>
                    <td className="px-1 py-4">${payment.totalPrice}</td>
                    <td className="px-1 py-4 ">
                      {payment.paymentStatus === "Paid" && (
                        <span className="px-5 py-[1px] hover:bg-gray-700 duration-300 transition-all font-semibold  bg-green-600 text-white rounded-full">
                          {payment.paymentStatus}
                        </span>
                      )}
                      {payment.paymentStatus === "Unpaid" && (
                        <span className="px-3 py-[1px] hover:bg-gray-700 duration-300 transition-all font-semibold  bg-red-600 text-white rounded-full">
                          {payment.paymentStatus}
                        </span>
                      )}
                    </td>
                    <td className="px-3 py-2">
                      {payment.orderStatus === "Completed" && (
                        <span className="px-2 py-[1px] font-semibold bg-green-900 text-white rounded-full">
                          {payment.orderStatus}
                        </span>
                      )}
                      {payment.orderStatus === "Pending" && (
                        <span className="px-2 py-[1px] font-semibold bg-yellow-600 text-white rounded-full">
                          {payment.orderStatus}
                        </span>
                      )}
                      {payment.orderStatus === "Canceled" && (
                        <span className="px-2 py-[1px] font-semibold    bg-[#dc3545] text-white rounded-full">
                          {payment.orderStatus}
                        </span>
                      )}
                      {payment.orderStatus === "Confirmed" && (
                        <span className="px-2 py-[1px] font-semibold    bg-[#28a745] text-white rounded-full">
                          {payment.orderStatus}
                        </span>
                      )}
                    </td>

                    <td className="px-3 py-2">
                      <div className="flex justify-center items-center gap-5">
                        <Link
                          to={`/dashboard/orderdetail/${payment._id}`}
                          state={{ payment: payment }}>
                          <span className="px-5 hover:bg-gray-700 transition-all duration-500 hover:text-white py-1 font-semibold cursor-pointer bg-teal-300 text-[#0c0606] rounded-md">
                            Details
                          </span>
                        </Link>
                        {/* TO DO: user can delete if paymentstatus is paid unless btn will be disabled */}
                        <button
                          onClick={() => handleDelete(payment)}
                          className="w-10 h-10 hover:bg-gray-500 rounded-md flex justify-center items-center">
                          <MdCancel className="text-[27px] text-red-600" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ) : (
                  ""
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserOrders;
