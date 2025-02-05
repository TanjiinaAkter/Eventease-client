import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div className="relative bg-black w-full h-full min-h-screen p-6">
      <div className="bg-no-repeat bg-cover object-cover bg-center w-full h-full absolute top-0 left-0 bg-[url('https://i.ibb.co/cS96Ft6R/table-5696243-1280.jpg')]"></div>

      <div className="absolute bg-black  opacity-50 inset-0 "></div>

      <div className="flex justify-start items-center p-7">
        <Link to="/">
          <button>BACK TO HOME</button>
        </Link>
      </div>
      <div className="relative z-10 flex justify-center items-center border border-y-amber-300 ">
        <div className=" shadow-2xl p-6 bg-[#0f1c1c] rounded-2xl w-full md:w-[40%] h-full">
          <h3 className="text-white text-center text-2xl md:text-4xl font-semibold uppercase">
            Create your account
          </h3>
          <p className="text-white  text-center text-sm my-2 font-semibold uppercase">
            Register now and enjoy a seamless experience!
          </p>
          <hr className="w-[10%] mx-auto h-[5px] bg-[#44cfbf] my-3 " />
          <div className="form ">
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
            <div className="flex flex-col space-y-3">
              <label className="text-white text-lg mt-3" htmlFor="photo">
                Your Photo
              </label>
              <input
                type="photo"
                name=""
                id=""
                placeholder="Enter your photo"
                className="py-3 border-transparent border-b-white border-b-[1px] focus:border-b-[3px] text-white focus:outline-none"
              />
            </div>
            <div className="w-full grid my-7">
              <button>Register</button>
            </div>

            <p className="text-white">
              {" "}
              Already have an account?{" "}
              <span className="text-[#d5944a] text-lg hover:border-b-2">
                Login Now
              </span>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
