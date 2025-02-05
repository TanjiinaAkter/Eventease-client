import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage:
            "url('https://i.ibb.co.com/cS96Ft6R/table-5696243-1280.jpg')",
        }}
        className="flex relative  bg-no-repeat bg-center bg-cover  justify-center items-center w-full h-screen">
        <div className="bg-[#0a1316] h-screen opacity-80 inset-0 absolute"></div>
        <Link to="/">
          <h3 className="absolute hover:scale-105 hover:border-transparent top-10 border-2 p-2 duration-700 hover:bg-white transition-all ease-in-out  hover:text-black border-white text-white font-semibold left-10 flex items-center gap-2">
            <IoHome className="text-[#44cfbf] text-2xl " />
            BACK TO HOME
          </h3>
        </Link>
        <div className="absolute mt-[350px] md:mt-0 form-container border transition-all border-[#44cfbf] duration-700 ease-in-out hover:shadow-[#44cfbf] shadow-lg  bg-[#275e5eb8] rounded-lg w-[90%] md:w-[50%] lg:w-[40%] py-8 px-6 ">
          <h2 className="text-white text-3xl md:text-4xl text-center font-semibold ">
            Create your account
          </h2>
          <p className="text-white uppercase md:text-sm font-semibold mt-3 text-center  ">
            Access your account with a quick login!
          </p>
          <hr className="w-[10%] mx-auto h-[5px] bg-[#44cfbf] my-3" />
          <form className="form ">
            <div className="form-group flex flex-col space-y-3">
              <label
                className="text-lg font-semibold  text-white"
                htmlFor="name">
                Your Name
              </label>
              <input
                className="px-3 text-white py-2 border-b-[1px] border-b-amber-50   focus:border-b-[3px] rounded-none border-transparent  focus:outline-none"
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-group flex flex-col space-y-2">
              <label
                className="text-lg font-semibold  text-white"
                htmlFor="email">
                Your Email
              </label>
              <input
                className="px-3 text-white py-2 border-b-[1px] border-b-amber-50   focus:border-b-[3px] rounded-none border-transparent  focus:outline-none"
                type="email"
                id="email"
                name="email"
                placeholder="Your password"
                required
              />
            </div>
            <div className="form-group flex flex-col space-y-3">
              <label
                className="text-lg font-semibold text-white "
                htmlFor="email">
                Your Password
              </label>
              <input
                className="px-3 text-white py-2 border-b-[1px] border-b-amber-50   focus:border-b-[3px] rounded-none border-transparent  focus:outline-none"
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="form-group flex flex-col space-y-3">
              <label
                className="text-lg font-semibold  text-white"
                htmlFor="photo">
                Your Photo
              </label>
              <input
                className="px-3 text-white py-2 border-b-[1px] border-b-amber-50   focus:border-b-[3px] rounded-none border-transparent  focus:outline-none"
                type="photo"
                id="photo"
                name="photo"
                placeholder="Your Photo"
                required
              />
            </div>
            <button className="my-7 w-full" type="submit">
              Submit
            </button>
            <Link to="/login">
              <p className="text-white cursor-pointer">
                Already have an account?
                <span className="text-[#d5944a] pl-1 text-lg hover:border-b-2">
                  Login
                </span>
              </p>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
