import { Link } from "react-router-dom";
import RouteTitle from "../../../components/RouteTitle";
import { GrUpdate } from "react-icons/gr";
import { IoHome } from "react-icons/io5";
import useEventRoleBased from "../../../hooks/useEventRoleBased";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { MdDelete } from "react-icons/md";

const OrderManagement = () => {
  const [paymentByRole, refetch] = useEventRoleBased();
  console.log(
    "paymentByRole mane ADMIN er events  payment  gulo holo ",
    paymentByRole
  );
  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        useAxiosSecure.delete(`/payments/${id}`).then((res) => {
          //console.log(res.data);
          if (res.data.deletedCount === 1) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: `${id} has been deleted from artists list.`,
              icon: "success",
            });
          }
        });
      }
    });
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
              {paymentByRole.map((payment, index) => (
                <tr
                  key={paymentByRole._id}
                  className="text-white border-b border-[#4c4f4e]">
                  <th className="px-2 py-2 whitespace-nowrap">{index + 1}</th>
                  <td className="px-2 py-2 whitespace-nowrap">
                    {payment.transactionId}
                  </td>
                  <td className="px-2 py-2 whitespace-nowrap">
                    {new Date(payment.date).toLocaleDateString("EN-GB")}
                  </td>
                  <td className="px-2 py-2 whitespace-nowrap ">
                    <div className="flex items-center justify-center gap-4">
                      <p className=" py-1 px-2  hover:bg-gray-800 transition-all duration-200 ease-in-out bg-red-600 text-white rounded-lg">
                        {payment.orderStatus}
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
                        {payment.paymentStatus}
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
