import { useEffect, useState } from "react";
import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";
import "./Login.css";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const handleRecaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  return (
    <div className="overflow-hidden relative bg-black w-full h-full min-h-screen p-6 ">
      <div className="bg-no-repeat bg-cover object-cover bg-center w-full h-full absolute top-0 left-0 bg-[url('https://i.ibb.co/cS96Ft6R/table-5696243-1280.jpg')]"></div>

      <div className="absolute bg-black  opacity-70 inset-0 "></div>

      <div>
        <Link to="/">
          <button className="flex button-style justify-start items-center gap-1">
            <IoHome className="text-xl"></IoHome> BACK TO HOME
          </button>
        </Link>
      </div>
      <div className="relative  z-10 flex justify-center items-center mt-2">
        <div className=" shadow-2xl bg-[#275e5eb8] p-6 border-[#44cfbf] border-[1px] rounded-xl w-full md:w-[50%] lg:w-[30%] h-full">
          <h3 className="text-white text-center text-2xl md:text-3xl font-semibold uppercase">
            Welcome Back
          </h3>
          <p className="text-white  text-center text-sm my-3 font-semibold uppercase">
            Access your account with a quick login!
          </p>
          <hr className="w-[10%] mx-auto h-[5px] bg-[#44cfbf] my-3 " />
          <div className="form  ">
            <div className="flex flex-col space-y-3">
              <label className="text-white text-lg" htmlFor="email">
                Your Email
              </label>
              <input
                type="email"
                name=""
                id=""
                placeholder="Enter your email"
                className="py-3 text-white border-b-white  border-transparent focus:outline-none border-b-[1px] rounded-none"
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
                className="py-3 border-transparent border-b-white border-b-[1px]  text-white focus:outline-none"
              />
            </div>
            {/* =============== REACT SIMPLE RE-CAPTCHA  =================*/}
            <div className="flex flex-col space-y-3 mt-4">
              <label htmlFor="captcha">
                <LoadCanvasTemplate className="" />
              </label>
              <input
                onBlur={handleRecaptcha}
                type="text"
                name="captcha"
                id=""
                placeholder="Type the captcha"
                className="py-3 border-transparent border-b-white border-b-[1px]  text-white focus:outline-none"
              />
            </div>

            <div
              className={`${
                disabled
                  ? "bg-gray-500 px-[1.4em ] py-[0.4em]  text-white cursor-not-allowed"
                  : "button-style"
              }  cursor-pointer w-full grid my-7`}>
              <input
                className=""
                type="submit"
                value="Login"
                disabled={disabled}
              />
            </div>

            <p className="text-white">
              Not registered yet?
              <Link to="/registration">
                <span className="text-[#d5944a] text-lg hover:border-b-2">
                  Register Now
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
