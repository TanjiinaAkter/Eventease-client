import { Link } from "react-router-dom";

const UserOrders = () => {
  return (
    <div className="mx-auto w-full p-4 bg-[#0a1316] min-h-screen h-full">
      <div className="md:w-[70%] mx-auto mb-5 text-center md:text-start">
        <h2 className="text-white text-xl">My Orders</h2>
        <p className="text-gray-400">
          View and manage your event ticket orders
        </p>
      </div>

      <div className="mt-8 border border-[#4b4d4c] flex flex-col md:w-full mx-auto gap-4 p-5 rounded-md bg-[#0f1c1c]">
        <div className="overflow-auto">
          <table className="table-auto w-full min-w-[600px]  text-white text-sm sm:text-base">
            {/* head */}
            <thead>
              <tr className="border-b-[1px] text-[#44cfbf] text-[1rem] border-white">
                <th className="px-3 py-2">#</th>
                <th className="px-3 py-2">Order Number</th>
                <th className="px-3 py-2">Event</th>
                <th className="px-3 py-2">Quantity</th>
                <th className="px-3 py-2">Total Amount</th>
                <th className="px-3 py-2">Payment Status</th>
                <th className="px-3 py-2">Order Status</th>
                <th className="px-3 py-2"> Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr className="border-b-[1px]  border-[#4c4f4e] text-center">
                <td className="px-3 py-4">1</td>
                <td className="px-3 py-4">20250205-2866</td>
                <td className="px-3 py-4">1</td>
                <td className="px-3 py-4">$40.00</td>
                <td className="px-3 py-4">$40.00</td>
                <td className="px-3 py-4 ">
                  {" "}
                  <span className="px-2 py-[1px] font-semibold  bg-green-600 text-white rounded-full">
                    paid
                  </span>
                </td>
                <td className="px-3 py-2">
                  <span className="px-2 py-[1px] font-semibold bg-[#d7797c] text-[#eb1920] rounded-full">
                    cancelled
                  </span>
                </td>

                <Link to="/">
                  <td className="px-3 py-2 ">View details</td>
                </Link>
              </tr>
              {/* row 2 */}
              <tr className="border-b-[1px]  border-[#4c4f4e] text-center">
                <td className="px-3 py-4">2</td>
                <td className="px-3 py-4">20250205-2866</td>
                <td className="px-3 py-4">4</td>
                <td className="px-3 py-4">$60.00</td>
                <td className="px-3 py-4">$120.00</td>
                <td className="px-3 py-4 ">
                  {" "}
                  <span className="px-2 py-[1px] font-semibold  bg-red-600 text-white rounded-full">
                    unpaid
                  </span>
                </td>
                <td className="px-3 py-2">
                  <span className="px-2 py-[1px] font-semibold bg-[#e4f360] text-[#ff8d13] rounded-full">
                    pending
                  </span>
                </td>

                <Link to="/">
                  <td className="px-3 py-2 ">View details</td>
                </Link>
              </tr>
              {/* row 3 */}
              <tr className="border-b-[1px]  border-[#4c4f4e] text-center">
                <td className="px-3 py-4">2</td>
                <td className="px-3 py-4">20250205-2866</td>
                <td className="px-3 py-4">4</td>
                <td className="px-3 py-4">$60.00</td>
                <td className="px-3 py-4">$120.00</td>
                <td className="px-3 py-4 ">
                  {" "}
                  <span className="px-2 py-[1px] font-semibold  bg-red-600 text-white rounded-full">
                    unpaid
                  </span>
                </td>
                <td className="px-3 py-2">
                  <span className="px-2 py-[1px] font-semibold bg-[#6892d4] text-[#0c5ee2] rounded-full">
                    confirmed
                  </span>
                </td>

                <Link to="/">
                  <td className="px-3 py-2 ">View details</td>
                </Link>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserOrders;
