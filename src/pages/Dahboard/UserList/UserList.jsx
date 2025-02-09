import { HiDotsHorizontal } from "react-icons/hi";
import { IoHome } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import RouteTitle from "../../../components/RouteTitle";
import { FaUsers } from "react-icons/fa";

const UserList = () => {
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
        routetitle="Users Directory"
        routesubtitle="Manage and organize Users profiles efficiently."
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
      <div className="mx-auto overflow-x-auto border border-[#4b4d4c] w-full flex flex-col gap-4 p-5 pb-8 rounded-md bg-[#0f1c1c]">
        <div className="overflow-visible">
          <table className="table-auto w-full min-w-[600px] text-center text-white text-sm sm:text-base">
            {/* Table Head */}
            <thead>
              <tr className="border-b border-white text-[#44cfbf] text-lg">
                <th className=" py-2 ">#</th>
                <th className=" py-2 ">User Image</th>
                <th className=" py-2 ">User Name</th>
                <th className=" py-2 ">Email</th>
                <th className=" py-2 ">Phone</th>
                <th className=" py-2 ">Gender</th>
                <th className=" py-2 ">Role</th>
                <th className=" py-2 ">Action</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {/* Sample Row */}
              <tr className="border-b border-[#4c4f4e] ">
                <th className="py-2">1</th>
                <td className=" py-2">Hart Hagerty</td>
                <td className=" py-2">Hart Hagerty</td>
                <td className=" py-2">hart@example.com</td>
                <td className=" py-2">+1234567890</td>
                <td className=" py-2">Male</td>
                <td className=" py-2">Admin</td>
                <td className=" py-2">
                  <div className="dropdown relative">
                    <label tabIndex={0} className="btn m-1">
                      <HiDotsHorizontal />
                    </label>
                    <ul className="dropdown-content menu  absolute top-0 right-[100%] p-2 shadow bg-white text-black rounded-box w-44">
                      <li className="place-self-center">
                        <button>
                          <MdDelete className="text-3xl text-red-600" />
                        </button>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>

              {/* Another Sample Row */}
              <tr className="border-b border-[#4c4f4e] ">
                <th className="py-2">2</th>
                <td className=" py-2">John Doe</td>
                <td className=" py-2">John Doe</td>
                <td className=" py-2">john@example.com</td>
                <td className=" py-2">+9876543210</td>
                <td className=" py-2">Male</td>
                <td className=" py-2">
                  <FaUsers className="text-amber-400 text-2xl mx-auto" />
                </td>
                <td className=" py-2">
                  <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn m-1">
                      <HiDotsHorizontal />
                    </label>
                    <ul className="dropdown-content menu absolute top-0 right-[100%] p-2 shadow bg-white text-black rounded-box w-44">
                      <li className="place-self-center">
                        <button>
                          <MdDelete className="text-3xl text-red-600" />
                        </button>
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
