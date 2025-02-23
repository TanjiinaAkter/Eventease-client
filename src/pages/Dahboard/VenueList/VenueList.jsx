import { FaEdit } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";
import { MdDelete } from "react-icons/md";
import RouteTitle from "../../../components/RouteTitle";
import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";
import { LuPlus } from "react-icons/lu";
import useVenues from "../../../hooks/useVenues";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
const VenueList = () => {
  const [clearBtn, setClearBtn] = useState(false);
  const [venues, refetch] = useVenues();
  //console.log("venues in venue list", venues);
  const [inputSearchValue, setInputSearchValue] = useState("");
  const [showByInputField, setshowByInputField] = useState(venues);
  //console.log(inputSearchValue, showByInputField);
  const axiosSecure = useAxiosSecure();
  const handleDeleteVenue = (venue) => {
    console.log("hismlsd");
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
        axiosSecure.delete(`/venues/${venue._id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount === 1) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: `${venue.name} has been deleted.`,
              icon: "success",
            });
          }
        });
      }
    });
  };
  const handleSearch = () => {
    console.log("hisdadddd");
    if (inputSearchValue.trim() === "") {
      setshowByInputField(venues);
    } else {
      const serchedItem = venues.filter((ven) =>
        ven.name.toLowerCase().includes(inputSearchValue.toLowerCase())
      );
      console.log("serchedItem", serchedItem);
      setshowByInputField(serchedItem);
    }
    setClearBtn(true);
  };
  const handleClear = () => {
    setClearBtn(false);
    setshowByInputField(venues);
    setInputSearchValue("");
  };
  // useeffect na dile initially kono venue show e korbe na karon, venues update holeo, showByInputField directly update hobe na, karon eta alada ekta state. State independently thake, tai jokhon venues update hoy, showByInputField automatic update hoy na.
  useEffect(() => {
    setshowByInputField(venues);
  }, [venues]);
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
            // value na dile search input er value ta theke jabe cleartbn click kore khali  korleo
            value={inputSearchValue}
            onChange={(e) => setInputSearchValue(e.target.value)}
            type="text"
            id="text"
            placeholder="Type venue name..."
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
              Clear
            </button>
          )}
        </div>
        <div className="flex relative justify-center items-center gap-2">
          <Link to="/dashboard/addvenue">
            <button className="button-style hover:scale-105 !text-[#daa05d] font-semibold !py-[10px] !px-6 !bg-white flex hover:!text-white !border-none">
              Add New <LuPlus />
            </button>
          </Link>
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
              {showByInputField.map((venue, index) => (
                <tr key={venue._id} className="border-b  border-[#4c4f4e]  ">
                  <th>{index + 1}</th>
                  <td className="py-2 whitespace-nowrap px-5">{venue.name}</td>
                  <td className="py-2 whitespace-nowrap px-5">{venue.city}</td>
                  <td className="py-2 whitespace-nowrap px-5">
                    {venue.country}
                  </td>
                  <td className="py-2 whitespace-nowrap px-5">{venue.date}</td>
                  <td className="py-2 whitespace-nowrap px-5">
                    {venue.capacity}
                  </td>
                  <td className="py-2 whitespace-nowrap px-5 ">
                    <div className="dropdown">
                      <div tabIndex={0} role="button" className="btn m-1">
                        <HiDotsHorizontal />
                      </div>
                      <ul className="dropdown-content content-center bg-base-100 menu text-white absolute top-0 right-[100%] rounded-box w-32 md:w-52 p-1 shadow">
                        <li>
                          <Link to={`/dashboard/editvenue/${venue._id}`}>
                            <FaEdit className="text-2xl text-amber-300" />
                          </Link>
                        </li>
                        <li>
                          <button>
                            <MdDelete
                              onClick={() => handleDeleteVenue(venue)}
                              className="text-[25px] text-red-600"
                            />
                          </button>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              ))}
              {/* row 2 */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default VenueList;
