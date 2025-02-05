const UserOrders = () => {
  return (
    <div className="mx-auto w-full p-4 bg-[#0a1316] min-h-screen h-full">
      <div className="md:w-[70%] mx-auto mb-5 text-center md:text-start">
        <h2 className="text-white text-xl">My Orders</h2>
        <p className="text-gray-400">
          View and manage your event ticket orders
        </p>
      </div>

      <div className="mt-8 border border-[#4b4d4c] flex flex-col md:w-[70%] mx-auto gap-4 p-5 rounded-md bg-[#0f1c1c]">
        <div className="overflow-x-auto">
          <table className="table-auto w-full min-w-[600px] text-white text-sm sm:text-base">
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
              <tr className="border-b-[1px] border-[#4c4f4e] text-center">
                <td className="px-3 py-2">1</td>
                <td className="px-3 py-2">20250205-2866</td>
                <td className="px-3 py-2">1</td>
                <td className="px-3 py-2">$40.00</td>
                <td className="px-3 py-2">$40.00</td>
                <td className="badge badge-secondary mr-2">pending</td>
                <td className="px-3 py-2 bg-red-600 my-2">pending</td>
                <td className="px-3 py-2 ">see details</td>
              </tr>
              {/* row 2 */}
              <tr className="border-b-[1px] border-[#4c4f4e] text-center">
                <td className="px-3 py-2">2</td>
                <td className="px-3 py-2">20250205-2866</td>
                <td className="px-3 py-2">Desktop Support Technician</td>
                <td className="px-3 py-2">Purple</td>
              </tr>
              {/* row 3 */}
              <tr className="text-center">
                <td className="px-3 py-2">3</td>
                <td className="px-3 py-2">Brice Swyre</td>
                <td className="px-3 py-2">Tax Accountant</td>
                <td className="px-3 py-2">Red</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserOrders;
