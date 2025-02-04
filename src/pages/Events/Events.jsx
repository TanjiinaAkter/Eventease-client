import { Helmet } from "react-helmet-async";
import Header from "../Shared/Header/Header";
import { MdPeople } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import RouteTitle from "../../components/RouteTitle";

import "./Events.css";
const Events = () => {
  return (
    <div className="bg-[#0a1316] mx-auto sm:w-[88%] md:w-full ">
      <Header></Header>
      <Helmet>
        <title>EventEase | Events</title>
      </Helmet>

      <div className="mx-auto w-[80%] md:w-[97%]">
        <RouteTitle
          routetitle={"Uncover Unforgettable Experiences"}
          routesubtitle={
            "Secure your spot at the most exciting events around you!"
          }></RouteTitle>
        <div className="py-12 flex items-center justify-center gap-0">
          <div className="container-input">
            <input
              type="text"
              placeholder="Search event here..."
              name="text"
              className="input"
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
          <button>Search</button>
        </div>
        <div className="grid  grid-cols-1 w-full pt-4 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="card border  border-[#4c4f4e]  rounded-md relative w-full   bg-[#0f1c1c] shadow-md">
            <figure className="w-full">
              <img
                className="rounded-none hover:scale-105 transition-transform duration-300"
                src="https://i.ibb.co.com/x8wW7Cvn/premium-photo-1681487469745-91d1d8a5836b-w-500-auto-format-fit-crop-q-60-ixlib-rb-4-0.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="absolute top-3 p-2 rounded-sm right-3 bg-black text-white font-semibold">
              $100
            </div>
            <div className="card-body p-4">
              <h2 className="card-title text-white">Tech Conference 2024</h2>
              <div className="flex items-center gap-2">
                <SlCalender className="text-white font-semibold"></SlCalender>
                <p className="text-white ">01/02/25</p>
              </div>
              <div className="flex items-center gap-2">
                <FaLocationDot className="text-white font-semibold"></FaLocationDot>
                <p className="text-white">USA</p>
              </div>
              <div className="flex items-center gap-2">
                <MdPeople className="text-white  font-semibold"></MdPeople>
                <p className="text-white ">3002</p>
              </div>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">View details</button>
              </div>
            </div>
          </div>
          <div className="card border  border-[#4c4f4e]  rounded-md relative w-full   bg-[#0f1c1c] shadow-md">
            <figure className="w-full">
              <img
                className="rounded-none hover:scale-105 transition-transform duration-300"
                src="https://i.ibb.co.com/x8wW7Cvn/premium-photo-1681487469745-91d1d8a5836b-w-500-auto-format-fit-crop-q-60-ixlib-rb-4-0.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="absolute top-3 p-2 rounded-sm right-3 bg-black text-white font-semibold">
              $100
            </div>
            <div className="card-body p-4">
              <h2 className="card-title text-white">Tech Conference 2024</h2>
              <div className="flex items-center gap-2">
                <SlCalender className="text-white font-semibold"></SlCalender>
                <p className="text-white ">01/02/25</p>
              </div>
              <div className="flex items-center gap-2">
                <FaLocationDot className="text-white font-semibold"></FaLocationDot>
                <p className="text-white">USA</p>
              </div>
              <div className="flex items-center gap-2">
                <MdPeople className="text-white  font-semibold"></MdPeople>
                <p className="text-white ">3002</p>
              </div>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">View details</button>
              </div>
            </div>
          </div>
          <div className="card border  border-[#4c4f4e]  rounded-md relative w-full   bg-[#0f1c1c] shadow-md">
            <figure className="w-full">
              <img
                className="rounded-none hover:scale-105 transition-transform duration-300"
                src="https://i.ibb.co.com/x8wW7Cvn/premium-photo-1681487469745-91d1d8a5836b-w-500-auto-format-fit-crop-q-60-ixlib-rb-4-0.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="absolute top-3 p-2 rounded-sm right-3 bg-black text-white font-semibold">
              $100
            </div>
            <div className="card-body p-4">
              <h2 className="card-title text-white">Tech Conference 2024</h2>
              <div className="flex items-center gap-2">
                <SlCalender className="text-white font-semibold"></SlCalender>
                <p className="text-white ">01/02/25</p>
              </div>
              <div className="flex items-center gap-2">
                <FaLocationDot className="text-white font-semibold"></FaLocationDot>
                <p className="text-white">USA</p>
              </div>
              <div className="flex items-center gap-2">
                <MdPeople className="text-white  font-semibold"></MdPeople>
                <p className="text-white ">3002</p>
              </div>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">View details</button>
              </div>
            </div>
          </div>
          <div className="card border  border-[#4c4f4e]  rounded-md relative w-full   bg-[#0f1c1c] shadow-md">
            <figure className="w-full">
              <img
                className="rounded-none hover:scale-105 transition-transform duration-300"
                src="https://i.ibb.co.com/x8wW7Cvn/premium-photo-1681487469745-91d1d8a5836b-w-500-auto-format-fit-crop-q-60-ixlib-rb-4-0.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="absolute top-3 p-2 rounded-sm right-3 bg-black text-white font-semibold">
              $100
            </div>
            <div className="card-body p-4">
              <h2 className="card-title text-white">Tech Conference 2024</h2>
              <div className="flex items-center gap-2">
                <SlCalender className="text-white font-semibold"></SlCalender>
                <p className="text-white ">01/02/25</p>
              </div>
              <div className="flex items-center gap-2">
                <FaLocationDot className="text-white font-semibold"></FaLocationDot>
                <p className="text-white">USA</p>
              </div>
              <div className="flex items-center gap-2">
                <MdPeople className="text-white  font-semibold"></MdPeople>
                <p className="text-white ">3002</p>
              </div>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">View details</button>
              </div>
            </div>
          </div>
          <div className="card border  border-[#4c4f4e]  rounded-md relative w-full   bg-[#0f1c1c] shadow-md">
            <figure className="w-full">
              <img
                className="rounded-none hover:scale-105 transition-transform duration-300"
                src="https://i.ibb.co.com/x8wW7Cvn/premium-photo-1681487469745-91d1d8a5836b-w-500-auto-format-fit-crop-q-60-ixlib-rb-4-0.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="absolute top-3 p-2 rounded-sm right-3 bg-black text-white font-semibold">
              $100
            </div>
            <div className="card-body p-4">
              <h2 className="card-title text-white">Tech Conference 2024</h2>
              <div className="flex items-center gap-2">
                <SlCalender className="text-white font-semibold"></SlCalender>
                <p className="text-white ">01/02/25</p>
              </div>
              <div className="flex items-center gap-2">
                <FaLocationDot className="text-white font-semibold"></FaLocationDot>
                <p className="text-white">USA</p>
              </div>
              <div className="flex items-center gap-2">
                <MdPeople className="text-white  font-semibold"></MdPeople>
                <p className="text-white ">3002</p>
              </div>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">View details</button>
              </div>
            </div>
          </div>
          <div className="card border  border-[#4c4f4e]  rounded-md relative w-full   bg-[#0f1c1c] shadow-md">
            <figure className="w-full">
              <img
                className="rounded-none hover:scale-105 transition-transform duration-300"
                src="https://i.ibb.co.com/x8wW7Cvn/premium-photo-1681487469745-91d1d8a5836b-w-500-auto-format-fit-crop-q-60-ixlib-rb-4-0.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="absolute top-3 p-2 rounded-sm right-3 bg-black text-white font-semibold">
              $100
            </div>
            <div className="card-body p-4">
              <h2 className="card-title text-white">Tech Conference 2024</h2>
              <div className="flex items-center gap-2">
                <SlCalender className="text-white font-semibold"></SlCalender>
                <p className="text-white ">01/02/25</p>
              </div>
              <div className="flex items-center gap-2">
                <FaLocationDot className="text-white font-semibold"></FaLocationDot>
                <p className="text-white">USA</p>
              </div>
              <div className="flex items-center gap-2">
                <MdPeople className="text-white  font-semibold"></MdPeople>
                <p className="text-white ">3002</p>
              </div>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">View details</button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center  py-12">
          <button className=""> See More</button>
        </div>
      </div>
    </div>
  );
};

export default Events;
