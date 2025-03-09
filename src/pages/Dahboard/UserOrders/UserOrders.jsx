import { MdDelete } from "react-icons/md";
import RouteTitle from "../../../components/RouteTitle";
import useSinglePaymentUser from "../../../hooks/useSinglePaymentUser";

const UserOrders = () => {
  // TO DO : COLOR CHANGE TO PAID UNPAID
  const [userpayments] = useSinglePaymentUser();
  console.log("userpayments", userpayments);
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
              {userpayments.map((payment) => (
                <tr
                  key={payment._id}
                  className="border-b-[1px]  border-[#4c4f4e]  text-center">
                  <td className="px-1 py-4">1</td>
                  <td className="px-1 py-4">{payment.transactionId}</td>
                  <td className="px-1 py-4">{payment.paymentMethod}</td>
                  <td className="px-1 py-4">{payment.eventIds.length}</td>
                  <td className="px-1 py-4">{payment.quantity}</td>
                  <td className="px-1 py-4">${payment.totalPrice}</td>
                  <td className="px-1 py-4 ">
                    <span className="px-5 py-[1px] hover:bg-gray-700 duration-300 transition-all font-semibold  bg-green-600 text-white rounded-full">
                      {payment.paymentStatus}
                    </span>
                  </td>
                  <td className="px-3 py-2">
                    <span className="px-2 py-[1px] font-semibold bg-[#d7797c] text-[#eb1920] rounded-full">
                      {payment.orderStatus}
                    </span>
                  </td>

                  <td className="px-3 py-2">
                    <div className="flex justify-center items-center gap-5">
                      <span className="px-5 hover:bg-gray-700 transition-all duration-500 hover:text-white py-1 font-semibold cursor-pointer bg-teal-300 text-[#0c0606] rounded-md">
                        Details
                      </span>
                      <span className="w-8 h-8 hover:bg-gray-600 rounded-full flex justify-center items-center">
                        <MdDelete className="text-[27px] text-red-600" />
                      </span>
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

export default UserOrders;
