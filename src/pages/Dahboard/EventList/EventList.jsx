import { FaEdit } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";
import { MdDelete } from "react-icons/md";
import RouteTitle from "../../../components/RouteTitle";
import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";
import { LuPlus } from "react-icons/lu";

import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useEvents from "../../../hooks/useEvents";

const EventList = () => {
  const axiosSecure = useAxiosSecure();
  const [clearBtn, setClearBtn] = useState(false);
  const [events, refetch] = useEvents();

  const [inputSearchValue, setInputSearchValue] = useState("");
  console.log(inputSearchValue);
  const [showByInputField, setshowByInputField] = useState(events);

  const handleSearch = () => {
    if (inputSearchValue.trim() === "") {
      setshowByInputField(events);
    } else {
      const serchedItem = events.filter((event) =>
        event.eventtitle.toLowerCase().includes(inputSearchValue.toLowerCase())
      );
      setshowByInputField(serchedItem);
      setClearBtn(true);
    }
  };
  const handleClear = () => {
    setClearBtn(false);
    setInputSearchValue("");
    setshowByInputField(events);
  };
  useEffect(() => {
    setshowByInputField(events);
  }, [events]);
  const handleDelete = (event) => {
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
        axiosSecure.delete(`/events/${event._id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount === 1) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: `${event.eventtitle} has been deleted.`,
              icon: "success",
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
        routetitle={"Events Directory "}
        routesubtitle={
          "Manage and organize events  profiles efficiently."
        }></RouteTitle>
      {/* SEARCH AND ADD NEW BUTTON */}
      <div className="flex  flex-wrap my-7 justify-between items-center gap-4">
        <div className="flex flex-wrap items-center gap-2">
          <input
            value={inputSearchValue}
            onChange={(e) => setInputSearchValue(e.target.value)}
            type="text"
            id="text"
            placeholder="Type event name here.."
            className="input input-bordered !py-[22px] input-info border !border-[#b58753] bg-[#0f1c1c] text-white w-full max-w-xs placeholder:text-white"
          />
          <button
            onClick={handleSearch}
            className="button-style hover:scale-105">
            Search
          </button>
          {clearBtn && (
            <button
              onClick={handleClear}
              className="button-style hover:scale-105">
              Reset
            </button>
          )}
        </div>
        <div className="flex relative justify-center items-center gap-2">
          <Link to="/dashboard/addevent">
            <button className="button-style flex hover:scale-105 !text-[#daa05d] font-semibold !py-[10px] !px-6 !bg-white hover:!text-white !border-none">
              Add New <LuPlus />
            </button>
          </Link>
        </div>
      </div>
      {/* TABLE STARSTS */}
      <div className="mx-auto md:overflow-x-hidden overflow-auto  border border-[#4b4d4c] w-full flex flex-col gap-4 p-5 pb-8 rounded-md bg-[#0f1c1c] text-white">
        <div className="">
          <table className="table-auto  w-full min-w-[600px] text-center">
            {/* head           	Start Date	End Date	Status	Total Tickets	Available	Created At	Actions            */}
            <thead className="">
              <tr className="text-[#44cfbf] text-lg border-b border-white">
                <th className="py-5 whitespace-nowrap">#</th>
                <th className="py-5 whitespace-nowrap">Title</th>
                <th className="py-5 whitespace-nowrap">Start Date</th>
                <th className="py-5 whitespace-nowrap">End Date</th>
                <th className="py-5 whitespace-nowrap">Status</th>
                <th className="py-5 pr-4 whitespace-nowrap">Total Tickets</th>
                <th className="py-5 whitespace-nowrap">price</th>
                <th className="py-5 whitespace-nowrap">Created At</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {showByInputField.map((event, index) => (
                <tr
                  key={event._id}
                  className="text-white border-b border-[#4c4f4e] ">
                  <th className="py-2 whitespace-nowrap px-4 ">{index + 1}</th>
                  <td className="py-2 whitespace-nowrap px-4 ">
                    {event.eventtitle}
                  </td>
                  <td className="py-2 whitespace-nowrap px-4 ">
                    {event.eventstartdate}
                  </td>
                  <td className="py-2 whitespace-nowrap px-4 ">
                    {event.eventenddate}
                  </td>
                  <td className="py-2 whitespace-nowrap px-4 ">
                    {/* {event.eventstatus} */}
                    {event.eventstatus === "Pending" ? (
                      <p className="bg-yellow-500 text-white rounded-full px-1 py-[1px] hover:bg-gray-500 transition-all duration-500">
                        {event.eventstatus}
                      </p>
                    ) : event.eventstatus === "Approved" ? (
                      <p className="bg-blue-500  text-white rounded-full px-1 py-[1px] hover:bg-gray-500 transition-all duration-500">
                        {event.eventstatus}
                      </p>
                    ) : event.eventstatus === "Rejected" ? (
                      <p className=" bg-red-700 text-white rounded-full px-1 py-[1px] hover:bg-gray-500 transition-all duration-500">
                        {event.eventstatus}
                      </p>
                    ) : event.eventstatus === "Completed" ? (
                      <p className="bg-gray-500 text-white rounded-full px-1 py-[1px] hover:bg-gray-500 transition-all duration-500">
                        {event.eventstatus}
                      </p>
                    ) : event.eventstatus === "Canceled" ? (
                      <p className="bg-red-500 text-white rounded-full px-1 py-[1px] hover:bg-gray-500 transition-all duration-500">
                        {event.eventstatus}
                      </p>
                    ) : (
                      ""
                    )}
                  </td>
                  <td className="py-2 whitespace-nowrap px-4 ">
                    {event.ticket}
                  </td>
                  <td className="py-2 whitespace-nowrap px-4 ">
                    {event.ticketprice}
                  </td>
                  <td className="py-2 whitespace-nowrap px-4 ">
                    {event.createdAt}
                  </td>
                  <td className="py-2 whitespace-nowrap px-4 ">
                    <div className="dropdown">
                      <div tabIndex={0} role="button" className="btn m-1">
                        <HiDotsHorizontal />
                      </div>
                      <ul className="dropdown-content content-center bg-base-100 menu text-white absolute top-0 right-[100%] rounded-box w-32 md:w-52 p-1 shadow">
                        <li>
                          <Link to={`/dashboard/editevent/${event._id}`}>
                            <FaEdit className="text-2xl text-amber-300" />
                          </Link>
                        </li>
                        <li>
                          <button>
                            <MdDelete
                              onClick={() => handleDelete(event)}
                              className="text-[25px] text-red-600"
                            />
                          </button>
                        </li>
                      </ul>
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

export default EventList;
