import { Link } from "react-router-dom";
import RouteTitle from "../../../components/RouteTitle";
import { GrUpdate } from "react-icons/gr";
import { RxCross2 } from "react-icons/rx";
import { IoHome } from "react-icons/io5";

const OrderManagement = () => {
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

      {/* Search Input */}
      <div className="flex flex-wrap my-7 gap-4">
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          <input
            type="text"
            placeholder="Type here..."
            className="input input-bordered input-info border border-[#b58753] bg-[#0f1c1c] text-white w-full md:max-w-xs placeholder:text-white"
          />
          <button className="button-style hover:scale-105">Search</button>
        </div>
      </div>

      {/* Table Wrapper */}
      <div className="mx-auto overflow-auto border border-[#4b4d4c] w-full flex flex-col gap-4 p-5 pb-8 rounded-md bg-[#0f1c1c]">
        <div className="">
          <table className="table-auto w-full min-w-[600px] text-white text-center">
            {/* head */}
            <thead>
              <tr className="text-[#44cfbf] bg-black rounded-b-lg">
                <th className="px-5 py-3 text-lg whitespace-nowrap">#</th>
                <th className="px-5 py-3 text-lg whitespace-nowrap">
                  Order Number
                </th>
                <th className="px-5 py-3 text-lg whitespace-nowrap">Date</th>
                <th className="px-5 py-3 text-lg whitespace-nowrap">Status</th>
                <th className="px-5 py-3 text-lg whitespace-nowrap">
                  Payment Status
                </th>
                <th className="px-5 py-3 text-lg whitespace-nowrap">
                  Total amount
                </th>
                <th className="px-5 py-3 text-lg whitespace-nowrap">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr className="text-white border-b border-[#4c4f4e]">
                <th className="px-5 py-2 whitespace-nowrap">1</th>
                <td className="px-5 py-2 whitespace-nowrap">20250207-4598</td>
                <td className="px-5 py-2 whitespace-nowrap">Feb 07, 2025</td>
                <td className="px-5 py-2 whitespace-nowrap ">
                  <div className="flex items-center justify-center gap-4">
                    <p className=" py-1 px-5  hover:bg-gray-800 transition-all duration-200 ease-in-out bg-red-600 text-white rounded-lg">
                      cancelled
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
                        <li>
                          <a className="font-semibold">Cancelled</a>
                        </li>
                        <li>
                          <a className="font-semibold ">pending</a>
                        </li>
                        <li>
                          <a className="font-semibold">confirmed</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-2 whitespace-nowrap ">
                  <div className="flex items-center justify-center gap-4">
                    <p className=" py-1 px-5 hover:bg-gray-800 transition-all duration-200 ease-in-out bg-green-600 text-white rounded-lg">
                      paid
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
                        <li>
                          <a className="font-semibold">paid</a>
                        </li>
                        <li>
                          <a className="font-semibold">unpaid</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-2 whitespace-nowrap">$ 12698</td>

                <td className="px-5 py-2 whitespace-nowrap flex justify-center items-center">
                  <p className=" py-2 px-2  bg-red-600 hover:bg-gray-400 rounded-full text-white ">
                    <RxCross2 className=" font-semibold text-lg " />
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderManagement;
