import { HiDotsHorizontal } from "react-icons/hi";
import { IoHome } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import RouteTitle from "../../../components/RouteTitle";
import { GoPlus } from "react-icons/go";
import { FaUsers } from "react-icons/fa";

const UserList = () => {
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
        routetitle={"Users Directory "}
        routesubtitle={
          "Manage and organize Users  profiles efficiently."
        }></RouteTitle>
      {/* SEARCH AND ADD NEW BUTTON */}
      <div className="flex  flex-wrap my-7 justify-start items-center gap-4">
        <div className="flex flex-wrap items-center gap-2">
          <input
            type="text"
            id="text"
            placeholder="Type here.."
            className="input input-bordered !py-[22px] input-info border !border-[#b58753] bg-[#0f1c1c] text-white w-full max-w-xs placeholder:text-white"
          />
          <button className="button-style hover:scale-105">Search</button>
        </div>
      </div>
      {/* TABLE STARSTS */}
      <div className="mx-auto overflow-auto  border border-[#4b4d4c] w-full flex flex-col gap-4 p-5 pb-8 rounded-md bg-[#0f1c1c] ">
        <div className="overflow-visible ">
          <table className="table-auto   w-full min-w-[600px] text-white text-sm sm:text-base">
            {/* head */}
            <thead className="text-white ">
              <tr className="border-b-[1px] text-[#44cfbf] text-[1.2rem] border-white">
                <th className="px-3 py-2">#</th>
                <th className="px-3 py-2">User Image</th>
                <th className="px-3 py-2">User name</th>
                <th className="px-3 py-2"> Contact Email</th>
                <th className="px-3 py-2"> Contact Phone</th>
                <th className="px-3 py-2">Gender </th>
                <th className="px-3 py-2">Role </th>
                <th className="px-3 py-2">Action </th>
              </tr>
            </thead>
            <tbody className="">
              {/* row 1 */}
              <tr className="border-b-[1px]  border-[#4c4f4e] text-center">
                <th>1</th>
                <td className="py-4">Hart Hagerty</td>
                <td className="py-4">Hart Hagerty</td>
                <td className="py-4">Hart Hagerty</td>
                <td className="py-4">Desktop Support Technician</td>
                <td className="py-4">Hart Hagerty</td>
                <td className="py-4">Admin</td>
                <td className="">
                  <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn m-1">
                      <HiDotsHorizontal />
                    </label>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu  content-center p-2 shadow bg-gray-800 text-white rounded-box w-44">
                      <li>
                        <a href="#">
                          <MdDelete className="text-3xl text-red-600" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
              {/* row 2 */}
              <tr className="border-b-[1px]  border-[#4c4f4e] text-center">
                <th>1</th>
                <td className="py-4">Hart Hagerty</td>
                <td className="py-4">Hart Hagerty</td>
                <td className="py-4">Hart Hagerty</td>
                <td className="py-4">Desktop Support Technician</td>
                <td className="py-4">Hart Hagerty</td>
                <td className="py-4">
                  <FaUsers className="place-self-center text-amber-400 text-2xl" />
                </td>

                <td className="">
                  <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn m-1">
                      <HiDotsHorizontal />
                    </label>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu  content-center p-2 shadow bg-gray-800 text-white rounded-box w-44">
                      <li>
                        <a href="#">
                          <MdDelete className="text-3xl text-red-600" />
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

export default UserList;
