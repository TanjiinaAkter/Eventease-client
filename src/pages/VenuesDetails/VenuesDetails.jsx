import { useQuery } from "@tanstack/react-query";
import Header from "../Shared/Header/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useParams } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
import { IoMdHeartHalf } from "react-icons/io";

const VenuesDetails = () => {
  const axiosPublic = useAxiosPublic();
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  const { data: venues = [] } = useQuery({
    queryKey: ["venues"],
    queryFn: async () => {
      const res = await axiosPublic.get("/venues");
      return res.data;
    },
  });
  const [venueInfo, setVenueInfo] = useState([]);
  const { id } = useParams();
  console.log(venueInfo);
  useEffect(() => {
    if (venues.length > 0) {
      const venueDetail = venues.find((venue) => venue._id === id);
      setVenueInfo(venueDetail);
    }
  }, [venues, id]);
  return (
    <div className="bg-[#0a1316] pb-10 h-[100vh">
      <Header></Header>
      <div className=" my-14 mx-auto sm:w-[80%] md:w-[97%] ">
        <div className="flex  justify-center items-center w-full ">
          <div
            className="inset-0 md:h-[20rem] absolute top-0 left-0 brightness-50 "
            style={{
              backgroundImage: `url(${venueInfo.bannericon})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
            }}></div>
          <div
            data-aos="fade-down"
            className="banner mx-auto text-center z-50  md:my-6">
            <h3 className=" text-[18px] gap-1 text-[#b9c3b9] md:text-lg  my-4 font-bold    ">
              <span className=""></span>
              detail info of
            </h3>
            <p className="text-[#44cfbf]  uppercase my-4 font-semibold  text-xl md:text-3xl ">
              {venueInfo.name}
            </p>
            <hr className="h-[5px] bg-[#3caea1] w-[17%] mx-auto" />
          </div>
        </div>
        <div className="grid mt-24 flex-wrap m-6 md:m-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
          <div
            data-aos="fade-left"
            className=" p-5 border border-[#3a3939] bg-[#0f1c1c]  flex justify-center flex-col items-center space-y-6">
            <IoLocationSharp className="text-5xl text-white" />
            <div className=" text-lg text-white  flex justify-center items-center flex-col text-left  space-y-3">
              <p className="capitalize">
                <strong>Name:</strong> {venueInfo.name}
              </p>
              <p className="capitalize">
                <strong>Type:</strong> {venueInfo.type}
              </p>

              <p className="capitalize">
                <strong>City:</strong> {venueInfo.city}
              </p>

              <p className="capitalize">
                <strong>Capacity:</strong> {venueInfo.capacity}
              </p>
              <p className="capitalize">
                <strong>Country:</strong> {venueInfo.country}
              </p>
              <p className="capitalize">
                <strong>Phone:</strong> {venueInfo.phone}
              </p>
              <p className="capitalize">
                <strong>Address:</strong> {venueInfo.address}
              </p>
            </div>
          </div>
          <div className="w-full relative  flex justify-center items-center ">
            <div className="w-full z-50 p-4">
              <img
                className="w-full h-[15rem]  md:h-[24rem] object-cover"
                src={venueInfo.venueimage}
                alt=""
              />
            </div>
            <div className="absolute top-0 left-0  z-10 h-[5rem] w-[5rem] bg-teal-500"></div>
            <div className="absolute bottom-0 right-0 z-10 h-[5rem] w-[5rem] bg-teal-500"></div>
          </div>
          <div
            data-aos="fade-right"
            className="border p-5  border-[#3a3939] bg-[#0f1c1c] flex justify-center flex-col items-center space-y-6">
            <IoMdHeartHalf className="text-white text-5xl" />
            <p className="text-lg text-white text-justify">
              {venueInfo.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VenuesDetails;
