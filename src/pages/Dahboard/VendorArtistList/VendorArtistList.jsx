import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";

import { HiDotsHorizontal } from "react-icons/hi";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import RouteTitle from "../../../components/RouteTitle";
import { LuPlus } from "react-icons/lu";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const VendorArtistList = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: artists = [] } = useQuery({
    queryKey: ["artists"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/artists/${user?.email}`);
      console.log(res.data);
      return res.data;
    },
  });
  console.log(artists);
  // const [artists] = useArtists();
  console.log(artists);
  const [btnClose, setBtnClose] = useState(false);
  const [inputSearchValue, setInputSearchValue] = useState("");
  const [showByInputField, setshowByInputField] = useState(artists);
  const handleSearch = () => {
    if (inputSearchValue.trim() === "") {
      setshowByInputField(artists);
    } else {
      const serchedItem = artists.filter((artist) =>
        artist.name.toLowerCase().includes(inputSearchValue.toLowerCase())
      );
      setshowByInputField(serchedItem);
      setBtnClose(true);
    }
  };
  useEffect(() => {
    setshowByInputField(artists);
  }, [artists]);
  const handleCloseBtn = () => {
    setInputSearchValue("");
    setshowByInputField(artists);
    setBtnClose(false);
  };
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
            value={inputSearchValue}
            onChange={(e) => setInputSearchValue(e.target.value)}
            type="text"
            placeholder="Type by artist name here.."
            className="input input-bordered !py-[22px] input-info border !border-[#b58753] bg-[#0f1c1c] text-white w-full max-w-xs placeholder:text-white"
          />
          <button
            onClick={handleSearch}
            className="button-style hover:scale-105">
            Search
          </button>

          {btnClose && (
            <button
              onClick={handleCloseBtn}
              className="button-style hover:scale-105">
              Reset
            </button>
          )}
        </div>
        <div className="relative flex items-center gap-2">
          <Link to='/dashboard/vendoraddartists'>
            <button className="button-style flex hover:scale-105 !text-[#daa05d] font-semibold !py-[10px] !px-6 !bg-white hover:!text-white !border-none">
              Add New <LuPlus />
            </button>
          </Link>
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
                <th className="py-5 px-4">Genre</th>
                <th className="py-5">Actions</th>
              </tr>
            </thead>
            <tbody>
              {showByInputField.map((artist, index) => (
                <tr
                  key={artist._id}
                  className="text-white border-b  border-[#4c4f4e] ">
                  <th className="py-2">{index + 1}</th>
                  <td className="py-2">{artist.name}</td>
                  <td className="py-2 px-5 w-fit text-justify">{artist.bio}</td>
                  <td className="py-2">{artist.genre}</td>

                  <td className="py-2">
                    <div className="dropdown">
                      <div tabIndex={0} role="button" className="btn m-1">
                        <HiDotsHorizontal />
                      </div>
                      <ul className="dropdown-content content-center absolute top-0 right-[100%] menu bg-base-100 rounded-box z-10 w-32 md:w-52 p-1 shadow">
                        <li className="place-self-center">
                          <Link to={`/dashboard/vendoreditartist/${artist._id}`}>
                            <FaEdit className="text-2xl text-amber-300" />
                          </Link>
                        </li>
                        <li className="place-self-center">
                          <button>
                            <MdDelete className="text-3xl text-red-600" />
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

export default VendorArtistList;
