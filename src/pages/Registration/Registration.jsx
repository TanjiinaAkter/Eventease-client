import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineCamera } from "react-icons/ai";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
const Registration = () => {
  const navigate = useNavigate();
  const { createUser, updateUserProfile, verifyEmail } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const axiosPublic = useAxiosPublic();
  const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

  // ===================== SIGN UP AUTHENTICATION CODE(REACT HOOOK FORM) ==============//
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("reg data ", data);
    const imageFile = { image: data.photo[0] };

    // =========== PERSONAL LOCAL IMAGE HOSTING POST REQUEST TO IMGBB ============//
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    console.log(res.data.data.display_url);
    if (res.data.success) {
      const imgUrl = res.data.data.display_url;
      createUser(data.email, data.password)
        .then((res) => {
          console.log(res.user);

          // UPDATE USER NAME AND PHOTO URL
          updateUserProfile(data.name, imgUrl)
            .then((res) => {
              console.log("updated");
              Swal.fire({
                position: "top-end",
                icon: "success",
                title:
                  "Your Registration done and profile updated successfully!!",
                showConfirmButton: false,
                timer: 1500,
              });
            })
            .catch((error) => {
              console.log(error);
            });

          // EMAIL VERIFICATION
          verifyEmail()
            .then((res) => {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "please verify your email",
                showConfirmButton: false,
                timer: 3000,
              });
            })
            .catch((error) => {
              console.log(error);
            });
          navigate("/login");
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
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
          {/* =================== REACT HOOK FORM   ===================*/}
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            {/* ================  NAME INPUT ================= */}
            <div className=" flex flex-col">
              <label className="text-white text-lg" htmlFor="name">
                Your Name
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="Enter your name"
                className="py-3 w-full border-b-[0.5px] mb-2 border-b-amber-50 rounded-none border-transparent text-white focus:border-b-white  focus:outline-0"
              />
              {errors.name && (
                <span className="text-yellow-300 text-sm font-semibold">
                  This field is required *
                </span>
              )}
            </div>
            {/* ================  EMAIL INPUT ================= */}
            <div className="flex flex-col space-y-3">
              <label className="text-white text-lg" htmlFor="email">
                Your Email
              </label>

              <input
                {...register("email", {
                  required: true,
                })}
                type="email"
                placeholder="Enter your email"
                className="py-3 text-white border-b-white border-transparent focus:outline-none border-b-[1px] rounded-none"
              />
              {errors.email?.type === "required" && (
                <span className="text-yellow-300 text-sm font-semibold">
                  Only Gmail addresses are allowed and required
                </span>
              )}
            </div>
            {/* ================  PASSWORD INPUT ================= */}
            <div className="relative mb-3 flex flex-col space-y-3">
              <label className="text-white text-lg mt-3" htmlFor="password">
                Your Password
              </label>
              <input
                {...register("password", {
                  required: true,
                  maxLength: 20,
                  minLength: 6,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                })}
                type={`${isOpen ? "text" : "password"}`}
                placeholder="Enter your password"
                className="py-3 border-transparent border-b-white border-b-[1px] text-white focus:outline-none"
              />
              {errors.password?.type === "required" && (
                <p className="text-yellow-300 text-sm font-semibold ">
                  Password is required*
                </p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className="text-yellow-300 text-sm font-semibold ">
                  Password must be less than 20 characters*
                </p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-yellow-300 text-sm font-semibold ">
                  Password must be 6 characters*
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-yellow-300 text-sm font-semibold">
                  Password must be 1 uppercase, 1 lowercase, 1 number and 1
                  special character*
                </p>
              )}
              <span onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? (
                  <FaEye className=" absolute top-[62%] right-3 text-xl text-[#17c3b2] " />
                ) : (
                  <FaEyeSlash className=" absolute top-[62%] right-3 text-xl text-[#17c3b2] " />
                )}
              </span>
            </div>
            {/* ================  PHOTO INPUT ================= */}
            <div className="flex relative flex-col space-y-3">
              <label className="text-white text-lg " htmlFor="file">
                Your Profile Photo
              </label>
              <input
                {...register("photo", { required: true })}
                type="file"
                className="py-[6px] focus:border-[#b58753] focus:border-2 text-white border px-6 border-gray-500 focus:outline-none rounded-none file:px-4   file:text-sm file:font-semibold "
                required
              />
              {errors.photo && (
                <span className="text-yellow-300 text-sm font-semibold">
                  Photo field is required
                </span>
              )}
              <AiOutlineCamera
                className="absolute top-[65%] left-2 transform -translate-y-1/2 text-white"
                style={{ fontSize: "24px" }}
              />
            </div>
            <div className="w-full button-style grid my-7">
              <input type="submit" value="Register"></input>
            </div>

            <p className="text-white">
              Already have an account?
              <Link to="/login">
                <span className="text-[#d5944a] text-lg hover:border-b-2">
                  Login Now
                </span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
