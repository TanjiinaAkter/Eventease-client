import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import RouteTitle from "../../../components/RouteTitle";
import useEventRoleBased from "../../../hooks/useEventRoleBased";
import { GrUpdate } from "react-icons/gr";
import { RxCross2 } from "react-icons/rx";

const VendorOrderManagement = () => {
  //VENDOR CREATED EVENTS GET

  const [paymentByRole, refetch] = useEventRoleBased();
  console.log(
    "paymentByRole mane vendor er events jei payment gulate included ache oi full payments obj gulo holo ",
    paymentByRole
  );

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
                <th className="px-1 py-3 text-lg md:text-base  whitespace-nowrap">
                  #
                </th>
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
              {paymentByRole.map((payment, index) =>
                payment.eventDetails.map((eDetail) => (
                  <tr
                    key={eDetail._id}
                    className="text-white border-b border-[#4c4f4e]">
                    <th className="px-2 py-2 whitespace-nowrap">{index + 1}</th>
                    <td className="px-2 py-2 whitespace-nowrap">
                      {payment._id}
                    </td>

                    <td className="px-2 py-2 whitespace-nowrap">
                      {eDetail.eventId}
                    </td>

                    <td className="px-2 py-2 whitespace-nowrap">
                      {new Date(payment.date).toLocaleDateString("en-GB")}
                    </td>
                    <td className="px-2 py-2 whitespace-nowrap">
                      {eDetail.quantity}
                    </td>
                    <td className="px-2 py-2 whitespace-nowrap ">
                      <div className="flex items-center justify-center gap-4">
                        <p className=" py-1 px-2  hover:bg-gray-800 transition-all duration-200 ease-in-out bg-red-600 text-white rounded-lg">
                          {/* {eDetail._id} */} Pending ha
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
                    <td className="px-2 py-2 whitespace-nowrap ">
                      <div className="flex items-center justify-end gap-4">
                        <p className=" py-1 px-2 hover:bg-gray-800 transition-all duration-200 ease-in-out bg-green-600 text-white rounded-lg">
                          {/* {eDetail._id} */} pending pa
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
                    <td className=" py-2 whitespace-nowrap">
                      $ {eDetail.price * eDetail.quantity}
                    </td>

                    <td className="px-2 py-2 whitespace-nowrap flex justify-center items-center gap">
                      {/* to={`/dashboard/orderdetail/${payment._id}`} */}

                      <button className=" py-2 px-2  bg-red-600 hover:bg-gray-400 rounded-full text-white ">
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
