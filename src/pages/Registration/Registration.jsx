import { AiOutlineCamera } from "react-icons/ai";
import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div className="relative bg-black w-full h-full min-h-screen p-6">
      <div className="bg-no-repeat bg-cover object-cover bg-center w-full h-full absolute top-0 left-0 bg-[url('https://i.ibb.co/cS96Ft6R/table-5696243-1280.jpg')]"></div>

      <div className="absolute bg-black  opacity-70 inset-0 "></div>

      <div className="flex justify-start items-center">
        <button className="flex button-style justify-start items-center gap-1">
          <IoHome className="text-xl"></IoHome> BACK TO HOME
        </button>
      </div>
      <div className="relative  z-10 flex justify-center items-center mt-2">
        <div className=" shadow-2xl bg-[#275e5eb8] p-6 border-[#44cfbf] border-[1px] rounded-xl w-full md:w-[60%] lg:w-[30%]  h-full">
          <h3 className="text-white text-center text-2xl md:text-3xl font-semibold uppercase">
            Create your account
          </h3>
          <p className="text-white  text-center text-sm my-2 font-semibold uppercase">
            Register now and enjoy a seamless experience!
          </p>
          <hr className="w-[10%] mx-auto h-[5px] bg-[#44cfbf] my-3 " />
          <div className="form  ">
            <div className=" flex flex-col">
              <label className="text-white text-lg" htmlFor="name">
                Your Name
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter your name"
                className="py-3 w-full border-b-[0.5px] mb-2 border-b-amber-50 rounded-none border-transparent text-white focus:border-b-white focus:border-b-[3px]  focus:outline-0"
              />
            </div>
            <div className="flex flex-col space-y-3">
              <label className="text-white text-lg" htmlFor="email">
                Your Email
              </label>
              <input
                type="email"
                name=""
                id=""
                placeholder="Enter your email"
                className="py-3 text-white border-b-white focus:border-b-[3px] border-transparent focus:outline-none border-b-[1px] rounded-none"
              />
            </div>
            <div className="flex flex-col space-y-3">
              <label className="text-white text-lg mt-3" htmlFor="password">
                Your Password
              </label>
              <input
                type="password"
                name=""
                id=""
                placeholder="Enter your password"
                className="py-3 border-transparent border-b-white border-b-[1px] focus:border-b-[3px] text-white focus:outline-none"
              />
            </div>
            <div className="flex relative flex-col space-y-3">
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
            </div>
            <div className="w-full grid my-7">
              <button className="button-style">Register</button>
            </div>

            <p className="text-white">
              Already have an account?
              <Link to="/login">
                <span className="text-[#d5944a] text-lg hover:border-b-2">
                  Login Now
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
