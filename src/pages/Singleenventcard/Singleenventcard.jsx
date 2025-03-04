import Header from "../Shared/Header/Header";

import eventAnimation from "../../assets/event.gif";
import { CiMail } from "react-icons/ci";
import { FaFacebookF, FaInstagram, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { useEffect, useState } from "react";
import useAllevents from "../../hooks/useAllevents";
import { useParams } from "react-router-dom";
import { MdGroup } from "react-icons/md";
import useAllVenues from "../../hooks/useAllVenues";
const Singleenventcard = () => {
  const { id } = useParams();
  const [allevents] = useAllevents();
  const [venues] = useAllVenues();
  const [event, setEvent] = useState([]);
  const [location, setlocation] = useState("");
  console.log("location", location);
  useEffect(() => {
    if (allevents.length > 0 && venues.length > 0) {
      const eventDetail = allevents.find((event) => event._id === id);
      setEvent(eventDetail);
      const venueLocation = venues.find((venue) => venue.name === event.venue);

      setlocation(venueLocation);
    }
  }, [allevents, id, venues, event]);
  return (
    <div className=" bg-[#0a1316]">
      <Header></Header>
      <div className="">
        <div className="first-half grid  grid-cols-1 md:grid-cols-4">
          <div className="col-span-1 border border-r-[#4c4f4e] flex justify-center items-start ">
            <div className="flex-col   flex justify-center items-center space-y-6 md:space-y-10">
              <div className="mt-12">
                <img
                  className="w-[6.5rem] h-[6.5rem]"
                  src={eventAnimation}
                  alt=""
                />
              </div>
              <h3 className="text-white font-semibold text-3xl md:text-2xl border-y-2 border-dotted border-[#b58753]">
                Total Ticket - {event.ticket}
              </h3>
              <div className="flex flex-col gap-3">
                <h3 className="text-white text-center text-lg font-semibold">
                  - ORGANIZED BY -
                  {/* <h3 className="text-center text-base">
                    {" "}
                    <MdGroup className="text-[#b58753] text-2xl font-semibold" />
                    {event.vendor}
                  </h3> */}
                </h3>
                <h2 className=" text-white text-base md:text-lg flex items-center gap-1 md:gap-2 justify-center">
                  <MdGroup className="text-[#b58753] text-2xl font-semibold" />
                  {event.vendor}
                </h2>
                <h2 className=" text-white text-base md:text-base font-semibold flex items-center gap-1 md:gap-2 justify-between">
                  <CiMail className="text-[#b58753] text-2xl font-semibold" />
                  {event.email}
                </h2>
                <h2 className=" text-white text-base md:text-lg flex items-center gap-1 md:gap-2 justify-center">
                  <FaPhone className="text-[#b58753] font-semibold" />
                  {event.phone}
                </h2>
              </div>
              <div className="flex justify-center my-6 items-center gap-3">
                <div className="p-1 text-white  hover:scale-125 hover:ease-in-out hover:transition-transform hover:duration-1000  rounded-sm border border-[#6a6d6a] text-959590">
                  <FaFacebookF></FaFacebookF>
                </div>
                <div className="p-1 text-white  hover:scale-125 hover:ease-out hover:transition-transform hover:duration-1000  rounded-sm border border-[#6a6d6a] text-959590">
                  <FaInstagram />
                </div>
                <div className="p-1 text-white  hover:scale-125 hover:ease-in-out hover:transition-transform hover:duration-1000  rounded-sm border border-[#6a6d6a] text-959590">
                  <FaFacebookF></FaFacebookF>
                </div>
              </div>
            </div>
          </div>
          <div className="relative col-span-3  text-center ">
            <img
              className="z-0 w-full h-[90vh] md:h-screen object-cover brightness-75 blur-xs opacity-50"
              src={event.eventbanner}
              alt=""
            />
            <div className="bg-[#0a1316] z-0 flex justify-between items-center gap-2 py-3 px-4 md:px-12 opacity-90 absolute top-9 left-0  ">
              <p className="text-[#44cfbf] text-2xl pr-1 border-r-4 h-20 border-r-[#44cfbf] font-semibold">
                Event Schedule
              </p>

              <div>
                <p className="text-white  z-50 opacity-90 font-semibold text-lg">
                  Start Date -<span>{event.eventstartdate}</span>
                </p>
                <p className="text-white z-50  font-semibold text-[1.1rem]">
                  End Date <span> -{event.eventenddate}</span>
                </p>
              </div>
            </div>
            <div className="absolute w-[80%]  md:mt-12 flex flex-col text-start left-[12%] bottom-[22%]  md:top-1/2 z-50 md:left-1/2 transform md:-translate-x-1/2 md:-translate-y-1/2">
              <h2 className="text-white text-2xl  font-semibold md:text-5xl ">
                {event.eventtitle}
              </h2>
              <p className="text-white mt-4 border-l-4 pl-1 border-white">
                {event.category} -
              </p>
              {/* // TO DO: CARTPAGE E NIYE JABO */}
              <div className="flex justify-start my-6">
                <button className="button-style">Buy Tickets</button>
              </div>
            </div>
          </div>
        </div>
        <div className="second-half md:pb-0 border-[1px] border-b-[#4c4f4e] grid grid-cols-1 md:grid-cols-4  ">
          <div className="col-span-1 flex flex-col">
            <div className="flex h-[20rem] md:p-2 space-y-6 text-center flex-col justify-center items-center bg-linear-65 from-[#44cfbf] to-[#fef6f685]">
              <h3 className="uppercase text-white font-semibold text-3xl md:text-lg">
                - Location -
              </h3>
              <FaLocationDot className="text-[#b58753] text-xl font-semibold" />
              <h2 className=" text-white text-justify text-base md:text-lg gap-1 md:gap-2 ">
                {event.venue}
              </h2>
              <h2 className=" text-white  text-base md:text-lg  gap-1 md:gap-2">
                {location?.address}
              </h2>
            </div>
            <div>
              <img
                className="h-[14rem] w-full object-cover"
                src={event.eventimage}
                alt=""
              />
            </div>
          </div>

          <div className=" flex border-[1px] border-t-[#4c4f4e] bg-[#0a1316] col-span-3 flex-col justify-center  items-center">
            <div className="py-7  space-y-7  mx-auto w-[70%]">
              <p className="text-semibold  text-justify text-white text-xl">
                EVENET DESCRIPTION
              </p>

              <p className="text-white  text-justify text-base">
                {event.description}
              </p>
              <div className="flex md:flex-row items-center justify-start my-3">
                <button className="button-style">Book Now </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singleenventcard;
