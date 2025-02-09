import { FaEdit } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";
import { IoHome } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import RouteTitle from "../../../components/RouteTitle";
import { GoPlus } from "react-icons/go";

const CategoryList = () => {
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
        routetitle={"Category Directory "}
        routesubtitle={
          "Manage and organize category  profiles efficiently."
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
        <div className=" ">
          <table className="table-auto text-center  w-full min-w-[600px] text-white text-sm sm:text-base">
            {/* head */}
            <thead className="text-white ">
              <tr className="border-b text-[#44cfbf] text-[1.2rem] border-white">
                <th className="px-3 py-2 whitespace-nowrap">#</th>
                <th className="px-3 py-2 whitespace-nowrap">Category icon</th>
                <th className="px-3 py-2 whitespace-nowrap">Name</th>
                <th className="px-3 py-2 whitespace-nowrap">Description</th>
                <th className="px-3 py-2 whitespace-nowrap">Created At </th>
                <th className="px-3 py-2 whitespace-nowrap">Action </th>
              </tr>
            </thead>
            <tbody className="">
              {/* row 1 */}
              <tr className="border-b  border-[#4c4f4e] text-center">
                <th>1</th>
                <td className="py-5 px-2 whitespace-nowrap">Hart Hagerty</td>
                <td className="py-5 px-2 whitespace-nowrap">Hart Hagerty</td>
                <td className="py-5 px-2 whitespace-nowrap">
                  Desktop Support Technician
                </td>
                <td className="py-5 px-2 whitespace-nowrap">Purple</td>
                <td className="py-5 px-2 whitespace-nowrap">
                  <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn m-1">
                      <HiDotsHorizontal />
                    </label>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu absolute top-0 right-[100%] content-center p-2 shadow bg-gray-800 text-white rounded-box w-44">
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
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
