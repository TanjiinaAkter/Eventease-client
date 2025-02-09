import { AiOutlineCamera } from "react-icons/ai";
import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";
import RouteTitle from "../../../components/RouteTitle";


const VendorProfileEdit = () => {
    return (
        <div className="relative bg-black w-full h-full min-h-screen p-6">
        <div className="flex justify-end">
          <Link to="/">
            <button className="flex button-style justify-start items-center gap-1">
              <IoHome className="text-xl"></IoHome> BACK TO HOME
            </button>
          </Link>
        </div>
        <RouteTitle
          routetitle={"Update Your Profile"}
          routesubtitle={
            "Keep your information up-to-date for a seamless experience."
          }></RouteTitle>
        <div className="relative  z-10 flex justify-center items-center mt-2">
          <div className=" shadow-2xl bg-[#0f1c1c] p-6  rounded-none w-full  lg:w-[80%] h-full">
            <div className="form space-y-3">
              {/* ROW-1 */}
              <div className="flex flex-col md:flex-row justify-between w-full items-center gap-5 ">
                <div className="flex flex-col w-full md:w-1/2 space-y-3">
                  <label className="text-white text-lg" htmlFor="email">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id=""
                    placeholder="Enter your name"
                    className="py-3 text-white  border focus:border-[#b58753] focus:border-2  pl-2 border-gray-500 focus:outline-none  rounded-none"
                    required
                  />
                </div>
                <div className="flex flex-col  w-full md:w-1/2  space-y-3">
                  <label className="text-white text-lg " htmlFor="email">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name=""
                    id=""
                    placeholder="Enter your email"
                    className="py-3 text-white border focus:border-[#b58753] focus:border-2  pl-2 border-gray-500 focus:outline-none  rounded-none"
                    required
                  />
                </div>
              </div>
              {/* ROW-2 */}
              <div className="flex flex-col md:flex-row justify-between w-full items-center gap-5 ">
                <div className="flex flex-col w-full md:w-1/2 space-y-3">
                  <label className="text-white text-lg" htmlFor="contact">
                    Your Contact Number
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id=""
                    placeholder="Enter your contact"
                    className="py-3 text-white border focus:border-[#b58753] focus:border-2  pl-2 border-gray-500 focus:outline-none  rounded-none"
                    required
                  />
                </div>
                <div className="flex flex-col  w-full md:w-1/2  space-y-3">
                  <label className="text-white text-lg " htmlFor="role">
                    Your Role
                  </label>
                  <input
                    type="text"
                    name="text"
                    id=""
                    placeholder=" your role"
                    className="py-3 text-white border focus:border-[#b58753] focus:border-2  pl-2 border-gray-500 focus:outline-none  rounded-none"
                    required
                  />
                </div>
              </div>
              {/* ROW-3 */}
              <div className="flex   flex-col md:flex-row justify-between w-full items-center gap-5 ">
                <div className="flex flex-col w-full md:w-1/2 space-y-3">
                  <label className="text-white text-lg" htmlFor="address">
                    Your Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    id=""
                    placeholder="Enter your location"
                    className="py-3 text-white border focus:border-[#b58753] focus:border-2  pl-2 border-gray-500 focus:outline-none  rounded-none"
                    required
                  />
                </div>
                <div className="flex relative flex-col w-full md:w-1/2 space-y-3">
                  <label className="text-white text-lg " htmlFor="file">
                    Your Profile Photo
                  </label>
                  <input
                    type="file"
                    name="file"
                    id="file"
                    className="py-[6px] focus:border-[#b58753] focus:border-2 text-white border px-6 border-gray-500 focus:outline-none rounded-none file:px-4   file:text-sm file:font-semibold "
                    required
                  />
  
                  <AiOutlineCamera
                    className="absolute top-[65%] left-2 transform -translate-y-1/2 text-white"
                    style={{ fontSize: "24px" }}
                  />
                  {/* Display selected file name */}
                </div>
              </div>
            </div>
            <div className=" grid md:w-full my-7">
              <button className="button-style">UPDATE PROFILE</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default VendorProfileEdit;