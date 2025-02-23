import { Helmet } from "react-helmet-async";
import Header from "../Shared/Header/Header";
import RouteTitle from "../../components/RouteTitle";
import { FaLocationDot } from "react-icons/fa6";
import { MdPeople } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Link } from "react-router-dom";
const Venues = () => {
  const axiosPublic = useAxiosPublic();
  useEffect(() => {
    AOS.init({
      duration: 700,
    });
  }, []);
  const { data: venues = [] } = useQuery({
    queryKey: ["venues"],
    queryFn: async () => {
      const res = await axiosPublic.get("/venues");

      return res.data;
    },
  });
  console.log(venues);
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
        {venues.map((venue) => (
          <div key={venue._id} className="mx-auto w-[90%] md:w-[97%]">
            <h2 className="text-white uppercase md:text-lg my-4 border-l-4 pl-2 font-semibold border-l-[#b58753]">
              {venue.type}
            </h2>
            {/* CARD-1 */}
            <Link to={`/venues/${venue._id}`}>
              <div
                data-aos="fade-right"
                className="card group m-3  relative rounded-md">
                <div className="">
                  <img
                    className="rounded-md border border-amber-100  h-[14rem] w-full object-cover"
                    src={venue.venueimage}
                    alt=""
                  />
                </div>
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-700 ease-in-out"></div>
                {/* Text Section */}
                <div className="absolute p-5 mx-auto  w-full opacity-0 group-hover:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  transition-opacity duration-500 ease-in-out">
                  <h2 className=" text-center font-semibold  mb-3 text-2xl text-white">
                    {venue.name}
                  </h2>
                  <div className="flex justify-center items-center flex-col gap-3">
                    <FaLocationDot className="text-[#b58753] text-3xl font-semibold"></FaLocationDot>
                    <p className="text-white text-xl">{venue.city}</p>
                  </div>
                  <div className="flex items-center flex-col justify-center gap-2 mt-3">
                    <MdPeople className="text-[#b58753] text-3xl font-semibold"></MdPeople>
                    <p className="text-white text-xl">{venue.capacity}</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Venues;
