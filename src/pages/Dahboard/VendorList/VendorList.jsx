import { HiDotsHorizontal } from "react-icons/hi";
import { MdDelete } from "react-icons/md";
import RouteTitle from "../../../components/RouteTitle";
import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";
import { LuPlus } from "react-icons/lu";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useVendors from "../../../hooks/useVendors";
import { CgUnavailable } from "react-icons/cg";

const VendorList = () => {
  const axiosSecure = useAxiosSecure();

  const [vendors, vendorrefetch] = useVendors();
  console.log("vendors are here ", vendors);
  const handleDelete = (vendor) => {
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
        axiosSecure.delete(`/vendors/${vendor.email}`).then((res) => {
          console.log("sdadnldad", res.data.result.deletedCount);
          if (res.data.result.deletedCount === 1) {
            vendorrefetch();
            Swal.fire({
              title: "Deleted!",
              text: `${vendor.name} has been deleted.`,
              icon: "success",
            });

            axiosSecure
              .patch(`/users/role/${vendor.userId}`, {
                role: "User",
              })
              .then((res) => {
                console.log(res.data);
              })
              .catch((error) => {
                console.log(error);
              });
          }
        });
      }
    });
  };
  return (
    <div className="relative z-0  bg-black w-full h-full min-h-screen p-6">
      <div className="flex justify-end">
        <Link to="/">
          <button className="flex button-style justify-start items-center gap-1">
            <IoHome className="text-xl"></IoHome> BACK TO HOME
          </button>
        </Link>
      </div>
      <RouteTitle
        routetitle={"Vendor Directory "}
        routesubtitle={
          "Manage and organize Vendor  profiles efficiently."
        }></RouteTitle>
      {/* SEARCH AND ADD NEW BUTTON */}
      <div className="flex  flex-wrap my-7 justify-between items-center gap-4">
        <div className="flex flex-wrap items-center gap-2">
          <input
            type="text"
            id="text"
            placeholder="Type here.."
            className="input input-bordered !py-[22px] input-info border !border-[#b58753] bg-[#0f1c1c] text-white w-full max-w-xs placeholder:text-white"
          />
          <button className="button-style hover:scale-105">Search</button>
        </div>
        <div className="flex relative justify-center items-center gap-2">
          <Link to="/dashboard/addvendor">
            <button className="button-style hover:scale-105 !text-[#daa05d] font-semibold !py-[10px] !px-6 !bg-white flex hover:!text-white !border-none">
              Add New <LuPlus />
            </button>
          </Link>
        </div>
      </div>
      {/* TABLE STARSTS */}
      <div className="mx-auto overflow-auto border border-[#4b4d4c] w-full flex flex-col gap-4 p-5 pb-8 rounded-md bg-[#0f1c1c] ">
        <div className="overflow-visible ">
          <table className="table-auto   w-full min-w-[600px] text-white text-sm sm:text-base">
            {/* head */}
            <thead className="text-white ">
              <tr className="border-b-[1px] text-[#44cfbf] text-[1.2rem] border-white">
                <th className="px-2 py-2 whitespace-nowrap">#</th>
                <th className="px-2 py-2 whitespace-nowrap">Company name</th>
                <th className="px-2 py-2 whitespace-nowrap">Description</th>
                <th className="px-2 py-2 whitespace-nowrap"> Contact Email</th>
                <th className="px-2 py-2 whitespace-nowrap"> Contact Phone</th>
                <th className="px-2 py-2 whitespace-nowrap">Created At </th>
                <th className="px-2 py-2 whitespace-nowrap">Action </th>
              </tr>
            </thead>
            <tbody className="">
              {/* row 1 */}
              {vendors.length > 0 ? (
                vendors.map((vendor, index) => (
                  <tr
                    key={vendor._id}
                    className="border-b border-[#4c4f4e] text-center">
                    <th>{index + 1}</th>
                    <td className="px-3 py-2  whitespace-nowrap">
                      {vendor.company} {vendor.userId}
                    </td>
                    <td className="px-3 py-2  whitespace-nowrap">
                      {vendor.description}
                    </td>
                    <td className="px-3 py-2  whitespace-nowrap">
                      {vendor.email}
                    </td>
                    <td className="px-3 py-2  whitespace-nowrap">
                      {vendor.phone}
                    </td>
                    <td className="px-3 py-2  whitespace-nowrap">
                      {new Date(vendor.createdAt).toLocaleDateString("en-GB")}
                    </td>

                    <td className=" py-2  whitespace-nowrap">
                      <div className="dropdown ">
                        <label tabIndex={0} className="btn m-1">
                          <HiDotsHorizontal />
                        </label>
                        <ul
                          tabIndex={0}
                          className="dropdown-content  absolute top-0 text-3xl right-[100%] content-center p-2 shadow bg-gray-800 text-white rounded-box w-32 md:w-52 ">
                          <li className="">
                            <MdDelete
                              onClick={() => handleDelete(vendor)}
                              className="justify-self-center text-red-600"
                            />
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <div className="flex justify-center my-6 items-center w-full">
                  <CgUnavailable className="text-red-600 text-xl" />{" "}
                  <p className="text-yellow-400 pl-1 text-lg ">
                    No vendors available
                  </p>
                </div>
              )}

              {/* row 2 */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default VendorList;
