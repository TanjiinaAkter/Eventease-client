import { IoHome } from "react-icons/io5";
import RouteTitle from "../../../components/RouteTitle";
import { Link } from "react-router-dom";

const AdminProfileEdit = () => {
  return (
    <div className="relative bg-black w-full h-full min-h-screen p-6">
      <div className="flex justify-end">
        <Link to="/">
          <button className="flex justify-start items-center gap-1">
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
                  className="py-3 text-white  border pl-2 border-gray-500 focus:outline-none  rounded-none"
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
                  className="py-3 text-white border pl-2 border-gray-500 focus:outline-none  rounded-none"
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
                  className="py-3 text-white border pl-2 border-gray-500 focus:outline-none  rounded-none"
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
                  className="py-3 text-white border pl-2 border-gray-500 focus:outline-none  rounded-none"
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
                  className="py-3 text-white border pl-2 border-gray-500 focus:outline-none  rounded-none"
                  required
                />
              </div>
              <div className="flex flex-col  w-full md:w-1/2  space-y-3">
                <label className="text-white text-lg " htmlFor="role">
                  Your Profile Photo
                </label>
                <input
                  type="photo"
                  name="text"
                  id=""
                  placeholder=" your photo"
                  className="py-3 text-white border pl-2 border-gray-500 focus:outline-none  rounded-none"
                  required
                />
              </div>
            </div>
          </div>
          <div className=" grid md:w-full my-7">
            <button>UPDATE PROFILE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfileEdit;
