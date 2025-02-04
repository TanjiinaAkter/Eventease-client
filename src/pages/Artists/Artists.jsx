import { Helmet } from "react-helmet-async";
import Header from "../Shared/Header/Header";
import Routetitle from "../../components/RouteTitle";
const Artists = () => {
  return (
    <div className="bg-[#132323]  mx-auto sm:w-[88%] md:w-full ">
      <Header></Header>
      <Helmet>
        <title>EventEase | Artists</title>
      </Helmet>
      <Routetitle
        routetitle={"Unveil Extraordinary Talent"}
        routesubtitle={
          "Step into a realm of exceptional artists and performers."
        }></Routetitle>
      <div className="artists  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto w-[100%] md:w-[97%]">
        <div className="card w-full h-[30rem] relative text-white  shadow-sm">
          <div className="card-body p-0">
            <div className="w-[80%] mx-auto ">
              <img
                className="h-[20rem] border-2 border-[#51ebb8] object-cover"
                src="https://i.ibb.co.com/tpWTj9p7/high-angle-buisness-man-23-2148479585.jpg"
                alt=""
              />
            </div>

            <div className="flex space-y-4 absolute opacity-80 p-3 bg-black w-[60%] left-[50%] top-[80%] transform -translate-x-[50%] -translate-y-[80%] flex-col justify-center items-center">
              <h2 className="text-xl font-semibold  text-[#b58753] capitalize">
                kelvin Premium
              </h2>
              <span className="text-lg ">Speaker</span>
              <div className="flex flex-wrap  md:justify-between text-[1rem] md:items-center gap-3 font-semibold">
                <span className="border-r-4 p-1  h-[2rem] border-r-[#44cfbf]">
                  398412046124
                </span>
                <span className="p-1">a@gmail.com</span>
              </div>
              <div className="mt-6 flex justify-center">
                <button className="">View Details</button>
              </div>
            </div>
          </div>
        </div>
        <div className="card w-full h-[30rem] relative text-white  shadow-sm">
          <div className="card-body p-0">
            <div className="w-[80%] mx-auto ">
              <img
                className="h-[20rem] border-2 border-[#51ebb8] object-cover"
                src="https://i.ibb.co.com/tpWTj9p7/high-angle-buisness-man-23-2148479585.jpg"
                alt=""
              />
            </div>

            <div className="flex space-y-4 absolute opacity-80 p-3 bg-black w-[60%] left-[50%] top-[80%] transform -translate-x-[50%] -translate-y-[80%] flex-col justify-center items-center">
            <h2 className="text-xl font-semibold  text-[#b58753] capitalize">
                kelvin Premium
              </h2>
              <span className="text-lg">Speaker</span>
              <div className="flex flex-wrap  md:justify-between text-[1rem] md:items-center gap-3 font-semibold">
                <span className="border-r-4 p-1  h-[2rem] border-r-[#44cfbf]">
                  398412046124
                </span>
                <span className="p-1">a@gmail.com</span>
              </div>
              <div className="mt-6 flex justify-center">
                <button className="">View Details</button>
              </div>
            </div>
          </div>
        </div>
        <div className="card w-full h-[30rem] relative text-white  shadow-sm">
          <div className="card-body p-0">
            <div className="w-[80%] mx-auto ">
              <img
                className="h-[20rem] border-2 border-[#51ebb8] object-cover"
                src="https://media.istockphoto.com/id/2148703139/photo/confident-businesswoman-in-modern-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=wpBCJcV3jibLxNLQWrPz05SZelKaxFMwcE0N2RWM1kw="
                alt=""
              />
            </div>

            <div className="flex space-y-4 absolute opacity-80 p-3 bg-black w-[60%] left-[50%] top-[80%] transform -translate-x-[50%] -translate-y-[80%] flex-col justify-center items-center">
            <h2 className="text-xl font-semibold  text-[#b58753] capitalize">
                kelvin Premium
              </h2>
              <span className="text-lg">Speaker</span>
              <div className="flex flex-wrap  md:justify-between text-[1rem] md:items-center gap-3 font-semibold">
                <span className="border-r-4 p-1  h-[2rem] border-r-[#44cfbf]">
                  398412046124
                </span>
                <span className="p-1">a@gmail.com</span>
              </div>
              <div className="mt-6 flex justify-center">
                <button className="">View Details</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artists;
