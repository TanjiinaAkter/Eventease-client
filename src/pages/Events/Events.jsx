import { Helmet } from "react-helmet-async";
import Header from "../Shared/Header/Header";
import { FaLocationDot } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import RouteTitle from "../../components/RouteTitle";
import "./Events.css";
import { FaTicketAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useAllevents from "../../hooks/useAllevents";

const Events = () => {
  const [clearBtn, setClearBtn] = useState(false);
  const [allevents] = useAllevents();
  const [inputSearchValue, setInputSearchValue] = useState("");
  const [showByInputField, setshowByInputField] = useState(allevents);

  const [hidebtn, setHideBtn] = useState(false);
  const [showCard, setShowCard] = useState(6);
  const handleSearch = () => {
    if (inputSearchValue.trim() === "") {
      setshowByInputField(allevents);
    } else {
      const serchedItem = allevents.filter((event) =>
        event.eventtitle.toLowerCase().includes(inputSearchValue.toLowerCase())
      );
      setshowByInputField(serchedItem);
      setClearBtn(true);
    }
  };
  console.log("hi", showByInputField);
  const seeMoreEvent = () => {
    setShowCard(allevents.length);
    setHideBtn(true);
  };
  useEffect(() => {
    setShowCard(6);
    setshowByInputField(allevents);
  }, [allevents]);
  const handleClear = () => {
    setClearBtn(false);
    setshowByInputField("");
    setshowByInputField(allevents);
  };
  return (
    <div className="bg-[#0a1316] mx-auto sm:w-[88%] md:w-full ">
      <Header></Header>
      <Helmet>
        <title>EventEase | Events</title>
      </Helmet>

      <div className="mx-auto w-[88%] md:w-[97%]">
        <RouteTitle
          routetitle={"Uncover Unforgettable Experiences"}
          routesubtitle={
            "Secure your spot at the most exciting events around you!"
          }></RouteTitle>
        <div className="py-12 flex items-center justify-center gap-0">
          {/* =========== INPUT SEARCH ===========*/}
          <div className="container-input">
            <input
              onChange={(e) => setInputSearchValue(e.target.value)}
              type="text"
              placeholder="Search event here..."
              name="text"
              className="input placeholder:text-black placeholder:font-semibold"
            />
            <svg
              fill="#000000"
              width="20px"
              height="20px"
              viewBox="0 0 1920 1920"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M790.588 1468.235c-373.722 0-677.647-303.924-677.647-677.647 0-373.722 303.925-677.647 677.647-677.647 373.723 0 677.647 303.925 677.647 677.647 0 373.723-303.924 677.647-677.647 677.647Zm596.781-160.715c120.396-138.692 193.807-319.285 193.807-516.932C1581.176 354.748 1226.428 0 790.588 0S0 354.748 0 790.588s354.748 790.588 790.588 790.588c197.647 0 378.24-73.411 516.932-193.807l516.028 516.142 79.963-79.963-516.142-516.028Z"
                fillRule="evenodd"
              />
            </svg>
          </div>
          <button onClick={handleSearch} className="button-style">
            Search
          </button>
          {clearBtn && (
            <button onClick={handleClear} className="button-style ml-3">
              Reset
            </button>
          )}
        </div>
        <div className="grid  grid-cols-1 md:px-4  w-full pt-4 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {showByInputField.slice(0, showCard).map((event) => (
            <div
              key={event._id}
              className="card border  border-[#4c4f4e]  rounded-md relative w-full   bg-[#0f1c1c] shadow-md">
              <Link to={`/eventdetail/${event._id}`}>
                <figure className="w-full">
                  <img
                    className="rounded-none h-[10rem] w-full object-cover hover:scale-105 transition-transform duration-300"
                    src={event.eventimage}
                    alt="Shoes"
                  />
                </figure>
              </Link>

              <div className="absolute top-3 p-2 rounded-sm right-3 bg-black text-white font-semibold">
                ${event.ticketprice}
              </div>
              <Link to={`/eventdetail/${event._id}`}>
                <div className="card-body p-4">
                  <h2 className="card-title text-white">{event.eventtitle}</h2>
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center  gap-2">
                      <SlCalender className="text-white font-semibold"></SlCalender>
                      <p className="text-white ">{event.eventstartdate}</p>
                    </div>
                    <div className="flex items-center  gap-2">
                      <SlCalender className="text-white font-semibold"></SlCalender>
                      <p className="text-white ">{event.eventenddate}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaLocationDot className="text-white font-semibold"></FaLocationDot>
                    <p className="text-white">{event.venue}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaTicketAlt className="text-white  font-semibold"></FaTicketAlt>
                    <p className="text-white ">{event.ticket}</p>
                  </div>
                  <div className="card-actions md:absolute md:my-4 md:right-3 md:bottom-0 justify-end">
                    <Link to={`/eventdetail/${event._id}`}>
                      <button className="button-style ">View details</button>
                    </Link>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center  py-12">
          <button
            onClick={seeMoreEvent}
            className={`button-style ${hidebtn ? "hidden" : "block"}`}>
            {" "}
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Events;
