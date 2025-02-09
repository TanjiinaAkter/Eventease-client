import { FaEdit } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { HiDotsHorizontal } from "react-icons/hi";
import { MdDelete } from "react-icons/md";
import RouteTitle from "../../../components/RouteTitle";
import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";

const VenueList = () => {
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
        routetitle={"Venue Directory "}
        routesubtitle={
          "Manage and organize venue  profiles efficiently."
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
          <button className="button-style hover:scale-105 !text-[#daa05d] font-semibold !py-[10px] !px-6 !bg-white hover:!text-white !border-none">
            Add New
          </button>
          <GoPlus className="absolute  top-[13px] z-10 right-0 text-[#d39146] font-extrabold text-xl" />
        </div>
      </div>
      {/* TABLE STARSTS */}
      <div className="mx-auto overflow-auto  border border-[#4b4d4c] w-full flex flex-col gap-4 p-5 pb-8 rounded-md bg-[#0f1c1c] ">
        <div className="">
          <table className="table-auto w-full min-w-[600px] text-white text-sm sm:text-base text-center">
            {/* head */}
            <thead className="text-white ">
              <tr className="border-b text-[#44cfbf] text-lg border-white">
                <th className=" py-5 whitespace-nowrap">#</th>
                <th className=" py-5 whitespace-nowrap">Name</th>
                <th className=" py-5 whitespace-nowrap">City</th>
                <th className=" py-5 whitespace-nowrap">Country</th>
                <th className=" py-5 whitespace-nowrap">Created At </th>
                <th className=" py-5 whitespace-nowrap">Capacity </th>
                <th className=" py-5 whitespace-nowrap">Action </th>
              </tr>
            </thead>
            <tbody className="">
              {/* row 1 */}
              <tr className="border-b  border-[#4c4f4e]  ">
                <th>1</th>
                <td className="py-2 whitespace-nowrap px-5">Hart Hagerty</td>
                <td className="py-2 whitespace-nowrap px-5">
                  Desktop Support Technician
                </td>
                <td className="py-2 whitespace-nowrap px-5">Purple</td>
                <td className="py-2 whitespace-nowrap px-5">
                  Desktop Support Technician
                </td>
                <td className="py-2 whitespace-nowrap px-5">Purple</td>
                <td className="py-2 whitespace-nowrap px-5 ">
                  <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn m-1">
                      <HiDotsHorizontal />
                    </div>
                    <ul className="dropdown-content content-center bg-base-100 menu text-white absolute top-0 right-[100%] rounded-box w-32 md:w-52 p-1 shadow">
                      <li>
                        <a>
                          <FaEdit className="text-2xl text-amber-300" />
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a>
                          <MdDelete className="text-[25px] text-red-600" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
              {/* row 2 */}
              <tr className="border-b  border-[#4c4f4e]  ">
                <th>1</th>
                <td className="py-2 whitespace-nowrap px-5">Hart Hagerty</td>
                <td className="py-2 whitespace-nowrap px-5">
                  Desktop Support Technician
                </td>
                <td className="py-2 whitespace-nowrap px-5">Purple</td>
                <td className="py-2 whitespace-nowrap px-5">
                  Desktop Support Technician
                </td>
                <td className="py-2 whitespace-nowrap px-5">Purple</td>
                <td className="py-2 whitespace-nowrap px-5 ">
                  <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn m-1">
                      <HiDotsHorizontal />
                    </div>
                    <ul className="dropdown-content content-center bg-base-100 menu text-white absolute top-0 right-[100%] rounded-box w-32 md:w-52 p-1 shadow">
                      <li>
                        <a>
                          <FaEdit className="text-2xl text-amber-300" />
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a>
                          <MdDelete className="text-[25px] text-red-600" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default VenueList;
