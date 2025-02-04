import { Helmet } from "react-helmet-async";
import Header from "../Shared/Header/Header";
import RouteTitle from "../../components/RouteTitle";
import { FaLocationDot } from "react-icons/fa6";
import { MdPeople } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Venues = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
    });
  }, []);
  return (
    <div className="bg-[#0a1316] pb-10  mx-auto sm:w-[80%] md:w-full ">
      <Header></Header>
      <Helmet>
        <title>EventEase | Venue</title>
      </Helmet>
      <RouteTitle
        routetitle={"Discover Perfect Venues"}
        routesubtitle={
          "From intimate gatherings to grand celebrations."
        }></RouteTitle>
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto w-full md:w-[88%]">
        {/* CARD-1 */}
        <div className="mx-auto w-[90%] md:w-[97%]">
          <h2 className="text-white md:text-lg my-4 border-l-4 pl-1 font-semibold border-l-[#b58753]">
            Skyline Event Space
          </h2>
          {/* CARD-1 */}
          <div
            data-aos="fade-right"
            className="card group m-3  relative rounded-md">
            <div>
              <img
                className="rounded-md"
                src="https://i.ibb.co.com/4RNsn51T/chuttersnap-a-En-H4h-J-Mrs-unsplash.jpg"
                alt=""
              />
            </div>
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-700 ease-in-out"></div>
            {/* Text Section */}
            <div className="absolute p-5 mx-auto  w-full opacity-0 group-hover:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  transition-opacity duration-500 ease-in-out">
              <h2 className=" text-center font-semibold  mb-3 text-2xl text-white">
                Skyline Event Space
              </h2>
              <div className="flex justify-center items-center flex-col gap-3">
                <FaLocationDot className="text-[#b58753] text-3xl font-semibold"></FaLocationDot>
                <p className="text-white text-xl">Los Angeles, United States</p>
              </div>
              <div className="flex items-center flex-col justify-center gap-2 mt-3">
                <MdPeople className="text-[#b58753] text-3xl font-semibold"></MdPeople>
                <p className="text-white text-xl">Capacity-600</p>
              </div>
            </div>
          </div>
        </div>
        {/* CARD-2 */}
        <div className="mx-auto w-[90%] md:w-[97%]">
          <h2 className="text-white md:text-lg my-4 border-l-4 font-semibold border-l-[#b58753]">
            Skyline Event Space
          </h2>
          {/* CARD-1 */}
          <div
            data-aos="fade-right"
            className="card group m-3  relative rounded-md">
            <div>
              <img
                className="rounded-md"
                src="https://i.ibb.co.com/4RNsn51T/chuttersnap-a-En-H4h-J-Mrs-unsplash.jpg"
                alt=""
              />
            </div>
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-700 ease-in-out"></div>
            {/* Text Section */}
            <div className="absolute p-5 mx-auto  w-full opacity-0 group-hover:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  transition-opacity duration-500 ease-in-out">
              <h2 className=" text-center font-semibold  mb-3 text-2xl text-white">
                Skyline Event Space
              </h2>
              <div className="flex justify-center items-center flex-col gap-3">
                <FaLocationDot className="text-[#b58753] text-3xl font-semibold"></FaLocationDot>
                <p className="text-white text-xl">Los Angeles, United States</p>
              </div>
              <div className="flex items-center flex-col justify-center gap-2 mt-3">
                <MdPeople className="text-[#b58753] text-3xl font-semibold"></MdPeople>
                <p className="text-white text-xl">Capacity-600</p>
              </div>
            </div>
          </div>
        </div>
        {/* CARD-3 */}
        <div className="mx-auto w-[90%] md:w-[97%]">
          <h2 className="text-white md:text-lg my-4 border-l-4 font-semibold border-l-[#b58753]">
            Skyline Event Space
          </h2>
          {/* CARD-1 */}
          <div
            data-aos="fade-right"
            className="card group m-3  relative rounded-md">
            <div>
              <img
                className="rounded-md"
                src="https://i.ibb.co.com/4RNsn51T/chuttersnap-a-En-H4h-J-Mrs-unsplash.jpg"
                alt=""
              />
            </div>
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-700 ease-in-out"></div>
            {/* Text Section */}
            <div className="absolute p-5 mx-auto  w-full opacity-0 group-hover:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  transition-opacity duration-500 ease-in-out">
              <h2 className=" text-center font-semibold  mb-3 text-2xl text-white">
                Skyline Event Space
              </h2>
              <div className="flex justify-center items-center flex-col gap-3">
                <FaLocationDot className="text-[#b58753] text-3xl font-semibold"></FaLocationDot>
                <p className="text-white text-xl">Los Angeles, United States</p>
              </div>
              <div className="flex items-center flex-col justify-center gap-2 mt-3">
                <MdPeople className="text-[#b58753] text-3xl font-semibold"></MdPeople>
                <p className="text-white text-xl">Capacity-600</p>
              </div>
            </div>
          </div>
        </div>
        {/* CARD-4 */}
        <div className="mx-auto w-[90%] md:w-[97%]">
          <h2 className="text-white md:text-lg my-4 border-l-4 font-semibold border-l-[#b58753]">
            Skyline Event Space
          </h2>
          {/* CARD-1 */}
          <div
            data-aos="fade-right"
            className="card group m-3  relative rounded-md">
            <div>
              <img
                className="rounded-md"
                src="https://i.ibb.co.com/4RNsn51T/chuttersnap-a-En-H4h-J-Mrs-unsplash.jpg"
                alt=""
              />
            </div>
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-700 ease-in-out"></div>
            {/* Text Section */}
            <div className="absolute p-5 mx-auto  w-full opacity-0 group-hover:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  transition-opacity duration-500 ease-in-out">
              <h2 className=" text-center font-semibold  mb-3 text-2xl text-white">
                Skyline Event Space
              </h2>
              <div className="flex justify-center items-center flex-col gap-3">
                <FaLocationDot className="text-[#b58753] text-3xl font-semibold"></FaLocationDot>
                <p className="text-white text-xl">Los Angeles, United States</p>
              </div>
              <div className="flex items-center flex-col justify-center gap-2 mt-3">
                <MdPeople className="text-[#b58753] text-3xl font-semibold"></MdPeople>
                <p className="text-white text-xl">Capacity-600</p>
              </div>
            </div>
          </div>
        </div>
        {/* CARD-5 */}
        <div className="mx-auto w-[90%] md:w-[97%]">
          <h2 className="text-white md:text-lg my-4 border-l-4 font-semibold border-l-[#b58753]">
            Skyline Event Space
          </h2>
          {/* CARD-1 */}
          <div
            data-aos="fade-right"
            className="card group m-3  relative rounded-md">
            <div>
              <img
                className="rounded-md"
                src="https://i.ibb.co.com/4RNsn51T/chuttersnap-a-En-H4h-J-Mrs-unsplash.jpg"
                alt=""
              />
            </div>
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-700 ease-in-out"></div>
            {/* Text Section */}
            <div className="absolute p-5 mx-auto  w-full opacity-0 group-hover:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  transition-opacity duration-500 ease-in-out">
              <h2 className=" text-center font-semibold  mb-3 text-2xl text-white">
                Skyline Event Space
              </h2>
              <div className="flex justify-center items-center flex-col gap-3">
                <FaLocationDot className="text-[#b58753] text-3xl font-semibold"></FaLocationDot>
                <p className="text-white text-xl">Los Angeles, United States</p>
              </div>
              <div className="flex items-center flex-col justify-center gap-2 mt-3">
                <MdPeople className="text-[#b58753] text-3xl font-semibold"></MdPeople>
                <p className="text-white text-xl">Capacity-600</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Venues;
