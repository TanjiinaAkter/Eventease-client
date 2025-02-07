import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";
import RouteTitle from "../../../components/RouteTitle";
import { HiDotsHorizontal } from "react-icons/hi";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { GoPlus } from "react-icons/go";

const ArtistsList = () => {
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
        routetitle={"Artist Directory"}
        routesubtitle={
          "Manage and organize artist profiles efficiently."
        }></RouteTitle>
      {/* SEARCH AND ADD NEW BUTTON */}
      <div className="flex justify-between items-center gap-4">
        <div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-info w-full max-w-xs"
          />
          <button type="button-style">Search</button>
        </div>
        <div className="flex relative justify-center items-center gap-2">
          <button className="button-style rounded-2xl !bg-white ">Add New</button>
          <GoPlus className=" absolute top-3 right-1 text-[#44cfbf] font-semibold text-xl" />
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
                <th className="px-3 py-2">Name</th>
                <th className="px-3 py-2">Bio</th>
                <th className="px-3 py-2">Genre</th>
                <th className="px-3 py-2">Action </th>
              </tr>
            </thead>
            <tbody className="">
              {/* row 1 */}
              <tr className="border-b-[1px]  border-[#4c4f4e] text-center">
                <th>1</th>
                <td className="py-4">Hart Hagerty</td>
                <td className="py-4">Desktop Support Technician</td>
                <td className="py-4">Purple</td>
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
                          <FaEdit className="text-2xl text-[#44cfbf]" />
                        </a>
                      </li>
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
                <th>2</th>
                <td className="py-4">Hart Hagerty</td>
                <td className="py-4">Desktop Support Technician</td>
                <td className="py-4">Purple</td>
              </tr>
              {/* row 3 */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ArtistsList;
