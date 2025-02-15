import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";
import RouteTitle from "../../../components/RouteTitle";
import { HiDotsHorizontal } from "react-icons/hi";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import { LuPlus } from "react-icons/lu";

const ArtistsList = () => {
  return (
    <div className="relative z-0 bg-black w-full h-full min-h-screen p-6">
      <div className="flex justify-end">
        <Link to="/">
          <button className="flex button-style items-center gap-1">
            <IoHome className="text-xl" /> BACK TO HOME
          </button>
        </Link>
      </div>

      <RouteTitle
        routetitle="Artist Directory"
        routesubtitle="Manage and organize artist profiles efficiently."
      />

      {/* SEARCH AND ADD NEW BUTTON */}
      <div className="flex flex-wrap my-7 justify-between items-center gap-4">
        <div className="flex flex-wrap items-center gap-2">
          <input
            type="text"
            placeholder="Type here.."
            className="input input-bordered !py-[22px] input-info border !border-[#b58753] bg-[#0f1c1c] text-white w-full max-w-xs placeholder:text-white"
          />
          <button className="button-style hover:scale-105">Search</button>
        </div>
        <div className="relative flex items-center gap-2">
          <button className="button-style flex hover:scale-105 !text-[#daa05d] font-semibold !py-[10px] !px-6 !bg-white hover:!text-white !border-none">
            Add New <LuPlus />
          </button>
          <GoPlus className="absolute top-[13px] right-0 text-[#d39146] font-extrabold text-xl" />
        </div>
      </div>

      {/* TABLE STARTS */}
      <div className="mx-auto overflow-auto border border-[#4b4d4c]  w-full flex flex-col gap-4 p-5 pb-8 rounded-md bg-[#0f1c1c]">
        <div className="">
          <table className="table-auto w-full min-w-[600px] text-center">
            <thead className=" ">
              <tr className="text-[#44cfbf] text-lg border-b border-white">
                <th className="py-5">#</th>
                <th className="py-5">Name</th>
                <th className="py-5">Bio</th>
                <th className="py-5">Genre</th>
                <th className="py-5">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-white border-b border-[#4c4f4e] ">
                <th className="py-2">#</th>
                <td className="py-2">Cy Ganderton</td>
                <td className="py-2">Cy Ganderton</td>
                <td className="py-2">Quality Control Specialist</td>
                <td className="py-2">Blue</td>
                <td className="py-2">
                  <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn m-1">
                      <HiDotsHorizontal />
                    </div>
                    <ul className="dropdown-content content-center absolute top-0 right-[100%] menu bg-base-100 rounded-box z-10 w-32 md:w-52 p-1 shadow">
                      <li className="place-self-center">
                        <a>
                          <FaEdit className="text-2xl text-amber-300" />
                        </a>
                      </li>
                      <li className="place-self-center">
                        <a>
                          <MdDelete className="text-3xl text-red-600" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
              <tr className="text-white border-b border-[#4c4f4e] ">
                <th className="py-2">#</th>
                <td className="py-2">Cy Ganderton</td>
                <td className="py-2">Cy Ganderton</td>
                <td className="py-2">Quality Control Specialist</td>
                <td className="py-2">Blue</td>
                <td className="py-2">
                  <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn m-1">
                      <HiDotsHorizontal />
                    </div>
                    <ul className="dropdown-content absolute top-0 right-full menu bg-base-100 rounded-box z-10 w-32 md:w-52 p-1 shadow">
                      <li className="place-self-center">
                        <a>
                          <FaEdit className="text-2xl text-amber-300" />
                        </a>
                      </li>
                      <li className="place-self-center">
                        <a>
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

export default ArtistsList;
