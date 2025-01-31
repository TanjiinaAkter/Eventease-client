import { Helmet } from "react-helmet-async";
import Header from "../Shared/Header/Header";
import { MdPeople } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import RouteTitle from "../../components/RouteTitle";

const Events = () => {
  return (
    <div className="bg-[#0a1316] mx-auto sm:w-[88%] md:w-full ">
      <Header></Header>
      <Helmet>
        <title>EventEase | Events</title>
      </Helmet>

      <div className="mx-auto w-[80%] md:w-[80%]">
        <RouteTitle
          routetitle={"Uncover Unforgettable Experiences"}
          routesubtitle={
            "Secure your spot at the most exciting events around you!"
          }></RouteTitle>
        <div className="text-white my-6">search here</div>
        <div className="grid  grid-cols-1 w-full md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="card border  border-[#4c4f4e]  rounded-md relative w-full   bg-[#0f1c1c] shadow-md">
            <figure className="w-full">
              <img
                className="rounded-none hover:scale-105 transition-transform duration-300"
                src="https://i.ibb.co.com/x8wW7Cvn/premium-photo-1681487469745-91d1d8a5836b-w-500-auto-format-fit-crop-q-60-ixlib-rb-4-0.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="absolute top-3 p-2 rounded-sm right-3 bg-black font-semibold">
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
            <div className="absolute top-3 p-2 rounded-sm right-3 bg-black font-semibold">
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
            <div className="absolute top-3 p-2 rounded-sm right-3 bg-black font-semibold">
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
            <div className="absolute top-3 p-2 rounded-sm right-3 bg-black font-semibold">
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
            <div className="absolute top-3 p-2 rounded-sm right-3 bg-black font-semibold">
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
            <div className="absolute top-3 p-2 rounded-sm right-3 bg-black font-semibold">
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
        <div className="flex justify-center items-center py-12">
          <button className=""> See More</button>
        </div>
      </div>
    </div>
  );
};

export default Events;
